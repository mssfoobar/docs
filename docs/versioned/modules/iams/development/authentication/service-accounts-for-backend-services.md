---
sidebar_position: 5
---

# Service Account for Backend Services

This section outlines the process of configuring and utilizing Keycloak Service Accounts (via the OAuth 2.0 Client Credentials Grant) 
for backend services to securely obtain access tokens. 

This approach is ideal for machine-to-machine communication, such as batch jobs or internal service-to-service calls, ensuring adherence 
to OAuth 2.0 best practices and avoiding the misuse of user credentials for non-user-originated requests.

## Understanding the Problem: Why Not User Accounts for Backend Requests?

Why not to use User Accounts (via Resource Owner Password Credentials grant) for non-user originated request (e.g., automated batch jobs):

- **Security Risk**: exposes user credentials directly to the client application (your backend service) is generally discouraged and can lead to credential leakage.

- **Non-Repudiation Issues**: It's difficult to audit or distinguish between actions performed by a real user and actions performed by a backend service masquerading as that user.

- **Credential Management Overhead**: Managing user passwords for automated processes is cumbersome and less secure than managing client secrets.

- **Violation of OAuth 2.0 Best Practices**: using user account is considered an anti-pattern for most modern applications and should be avoided where alternatives like the Client Credentials Grant exist.

The Client Credentials Grant is specifically designed for machine-to-machine authentication, where a client (your backend service) authenticates itself to Keycloak and obtains an access token to access protected resources on its own behalf, not on behalf of a user.

## Keycloak Configuration: Creating and Configuring a Service Account

A "Service Account" in Keycloak is essentially a specialized client that can be assigned roles.

### Create a New Client in Keycloak

1. **Log in to Keycloak Admin Console**: Access your Keycloak Admin Console.

2. **Select Your Realm**: Navigate to the specific realm where your applications are configured.

3. **Go to `Clients`**: In the left-hand navigation, click on `Clients`.

4. **Create New Client**: Click the `Create client` button. Enter the following for in the `General settings` page:

    - **Client ID**: Choose a meaningful and unique ID for your service account (e.g., `my-batch-service-client`, `user-management-api-client`). 
    This will be used by your backend service.

    - **Name**: (Optional) A display name for the client.

    - **Description**: (Optional) A brief description of what this service account is for.

 5. **Capability config**: click on `Next` button to move to `Capability config` page.  

    - **Client authentication**: Set to `On`. This is crucial for enabling the client credentials grant.

    - **Authorization**: Set to `On` if you plan to use Keycloak's fine-grained authorization services (policies, permissions) with this client. For simple role-based access, `On` is sufficient.

    - **Authentication flow**: Ensure `Standard flow` and `Direct access grants` are all `Off`. And `Service accounts roles` which must be `ON`.

        - **Standard flow**: `OFF`
        - **Direct access grants**: `OFF` (This is critical to prevent Resource Owner Password Credentials grant usage)
        - **Service accounts roles**: `ON` (This enables the service account to have roles)

 6. **Login settings**: Click on `Next` button to move to `Login settings` page.   

    - **Root URL**: Leave blank or specify a dummy URL if not applicable (not strictly required for client credentials).

    - **Home URIs**: Leave blank (not applicable for client credentials grant).

7. **Save Changes**: Click `Save` button to save the settings.

### Obtain the Client Secret

1. **Navigate to `Credentials` Tab**: After saving the client settings, go to the Credentials tab for your client.

2. **Client Secret**: Here you will find the `Secret` for your client. **This secret is critical for your backend service to authenticate**.

    - **Important**: Treat this secret like a password. Do not hardcode it in your application code.

    - **Regenerate**: You can regenerate the secret if it's compromised or for periodic rotation.

:::note

As of Keycloak version 26.2, the client secret rotation support is in development. Use this feature experimentally.
[https://www.keycloak.org/docs/latest/server_admin/index.html#_secret_rotation](https://www.keycloak.org/docs/latest/server_admin/index.html#_secret_rotation)
:::


### Assign Service Account Roles

This is where you grant your backend service the necessary permissions. The roles assigned to the service account are different from user roles. 
They are typically realm roles or client roles defined within Keycloak.

1. **Go to `Service Account roles` Tab**: For your client, navigate to the `Service Account roles` tab.

2. **`Assign role` dialog**: Click on `Assign role` to open the Assign Role dialog. 

    - **Assign Realm Roles**:
        - In the `Assign Roles` dialog, select `Filter by realm roles` from the dropdown.
        - In the table, you'll see realm-level roles. Select the roles your service account needs (e.g., `realm-tenant-admin`, `system-admin`, or any custom realm 
        roles you've created for administrative tasks like `view-users`, `manage-users`).
        - Click `Assign` button to assign the selected roles to your service account.

    - **Assign Client Roles**:
        - From the dropdown, select `Filter by clients`.
        - In the table, you'll see roles defined for all clients. For example, if your service needs to query all users in Keycloak, you might add the `query-users` role from the `realm-management` client.
        - Click `Assign` button to assign the selected roles to your service account.

    Example: To allow a service account to query all users in Keycloak:
        - Select `Filter by clients`.
        - Select `realm-management` `qury-users` from the table.
        - Click `Assign` button.


### Adding Additional Claims to Service Account Access Token

In Keycloak, you can add additional claims to a service account's access token using Protocol Mappers within the client's configuration. 

This is necessary as some backend services's APIs may expect certain claims to be present in the caller's access token.
For example, the `active_tenant` claim which is used to determine the tenant that the API operation to act on.

Here's a guide on how to add `active_tenant` claim to service account's access token:

#### Understanding Protocol Mappers and `active_tenant` claim

- **Protocol Mappers**: These are Keycloak's mechanism for transforming user attributes, roles, and other data into claims within 
issued tokens (ID tokens, access tokens, and user info). You can apply them to a specific client or a client scope.
- **`active_tenant` claim**: claim to indicate the active tenant for this login context. It contains the tenant id, name, and the 
roles that login account has in that tenant. The `active_tenant` is of the following format:

```JSON title="json"
{
  "exp": 1753945373,
  "iat": 1753945073,
  "auth_time": 1753945073,
  "jti": "onrtac:54c2de65-16d4-bbc3-9c8c-9808d0a5228f",
  "iss": "http://iams-keycloak.127.0.0.1.nip.io/realms/aoh",
  
  ...
  
  "all_tenants": [
    {
      "tenant_id": "c3712dbb-0d3f-40b8-8ba0-aa5de32c4149",
      "tenant_name": "development",
      "roles": [
        "tenant-admin",
        "role2",
        "tenant-user"
      ]
    }
  ],
  "email_verified": false,
  "preferred_username": "testuser",
  // highlight-start
  "active_tenant": {
    "tenant_id": "c3712dbb-0d3f-40b8-8ba0-aa5de32c4149",
    "tenant_name": "development",
    "roles": [
      "tenant-admin",
      "role2",
      "tenant-user"
    ]
  }
  // highlight-end
}

```

#### Steps to Add Claims to a Service Account Access Token:

1. **Go to `Client Scopes`**: Within your client's settings, click on the `Client Scopes` tab.

2. **Choose the Dedicated Client Scope**:
    - You'll typically see several client scopes listed. Look for the client scope that is **dedicated** to your client. 
    It usually has the same name as your client ID, followed by "-dedicated" (e.g., `your-client-id-dedicated`).

    - Click on this dedicated client scope. This is the most common and recommended place to add mappers specifically for your client's tokens, including its service account token.

    - **Why dedicated scope?** Mappers added directly to the client's "Mappers" tab are applied to all tokens issued to that client. 
    Using the dedicated client scope ensures these claims are specific to this client and its service account, without affecting other flows (like user login) that might use the same client.

3. **Add a Protocol Mapper**:

    - Inside the dedicated client scope, click on the **Mappers** tab.

    - Click the **Configure a new mapper** button.


4. **Configure the Protocol Mapper**: You have several types of mappers available, depending on the source of your desired claim:

    - **For User Attributes (if the service account has custom attributes)**:
      
      - **Mapper Type**: `User Attribute`
      
      - **Name**: A descriptive name for your mapper (e.g., `my-custom-service-attribute`)

      - **User Attribute**: The name of the user attribute you want to map (e.g., `department`, `service_id`).

      - **Token Claim Name**: The name of the claim as it will appear in the JWT (e.g., `dept`, `sid`).

      - **Claim JSON Type**: Select the appropriate type (e.g., `String`, `long`, `boolean`).

      - **Add to access token**: **ENABLE THIS**.

      - **Add to ID token**: (Optional, usually not needed for service accounts).

      - **Add to userinfo**: (Optional, usually not needed for service accounts).

      - **Multivalued**: Enable if the user attribute can have multiple values and you want them in a JSON array.

    - **For Hardcoded Claims (constant values)**:

      - **Mapper Type**: `Hardcoded claim`

      - **Name**: A descriptive name (e.g., `service-env`)

      - **Claim Name**: The name of the claim in the JWT (e.g.,  `environment`).

      - **Claim Value**: The hardcoded value (e.g., `production`).

      - **Claim JSON Type**: `String`, `boolean`, `long`, `int` etc.

      - **Add to access token**: **ENABLE THIS**.

    - **For Client Roles**:

      - **Mapper Type**: `Client Roles`

      - **Name**: (e.g., `my-client-roles`)

      - **Multivalued**: Enable if you want roles as an array.

      - **Token Claim Name**: (e.g., `client_roles`).

      - **Client ID**: Select the client whose roles you want to include (e.g., the service account's own client, or another client).

      - **Add to access token**: **ENABLE THIS**.

    - **For Realm Roles**:

      - **Mapper Type**: **User Realm Role**

      - **Name**: (e.g., `my-realm-roles`)

      - **Multivalued**: Enable if you want roles as an array.

      - **Token Claim Name**: (e.g., `realm_roles`).

      - **Add to access token**: **ENABLE THIS**.

    - **Other Mappers**: Explore other mapper types like `User Property`, `Group Membership`, `Audience`, etc., depending on your needs.

5. **Save the Mapper**: Click the `Save` button.


#### Add `active_tenant` Claim

For `active_tenant` claim, you will use the `Hardcoded Claims`:

  - **Mapper Type**: `Hardcoded claim`

  - **Name**: `active_tenant claim`

  - **Claim Name**: `active_tenant`

  - **Claim Value**: 
  ```
  {
    "tenant_id": "<your_tenant_id>",
    "tenant_name": "<your_tenant_name>",
    "roles": [
      "tenant-user"
    ]
  }  
  ```
    - replace `your_tenant_id` and `your_tenant_name` with the actual id and name of the tenant. If the service account, do add to the `roles` array.
  
  - **Claim JSON Type**: `JSON`
  
  - **Add to access token**: **ENABLE THIS**.


## Obtaining Access Tokens in Backend Services (Client Credentials Grant)  

Your backend services will use the `Client Credentials Grant` to request an access token from Keycloak. 
This involves making an HTTP POST request to Keycloak's token endpoint.

Keycloak Token Endpoint URL Format:

```
http(s)://<your-keycloak-host>/realms/<your-realm-name>/protocol/openid-connect/token
```

### Common Parameters for Token Request

- **grant_type**: `client_credentials`

- **client_id**: The Client ID you created in Keycloak (e.g., `my-batch-service-client`).

- **client_secret**: The secret obtained from the Keycloak `Credentials` tab.

- **scope**: (Optional but recommended) Defines the scope of the access token. You can request specific scopes if your application requires them. 
Common scopes include `openid`, `profile`, `email`, and any custom scopes you've defined. If not specified, Keycloak will typically issue a token with default roles.

:::caution

When getting access token for a service account, you should at least include the openid scope. 
Other services that use the `user_info` endpoint to validate tokens will reject the access token 
if this scope is missing.

:::


### Code Examples

Here's how to implement this in your specified programming languages.

#### Spring Boot (Java)

Here's a simple RestTemplate example. For production, consider using WebClient from Spring WebFlux for non-blocking I/O.

```Java

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import com.fasterxml.jackson.databind.JsonNode;

@Service
public class KeycloakTokenService {

    @Value("${keycloak.auth-server-url}")
    private String keycloakAuthServerUrl;

    @Value("${keycloak.realm}")
    private String keycloakRealm;

    @Value("${keycloak.client-id}")
    private String clientId;

    @Value("${keycloak.client-secret}")
    private String clientSecret;

    private final RestTemplate restTemplate = new RestTemplate();

    public String getAccessToken() {
        String tokenUrl = String.format("%s/realms/%s/protocol/openid-connect/token", keycloakAuthServerUrl, keycloakRealm);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        MultiValueMap<String, String> map = new LinkedMultiValueMap<>();
        map.add("grant_type", "client_credentials");
        map.add("client_id", clientId);
        map.add("client_secret", clientSecret);
        map.add("scope", "openid");
        // Optional: Add scope if required by your Keycloak setup or resource servers
        // map.add("scope", "openid profile");

        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(map, headers);

        try {
            ResponseEntity<JsonNode> response = restTemplate.postForEntity(tokenUrl, request, JsonNode.class);
            if (response.getStatusCode().is2xxSuccessful() && response.getBody() != null) {
                return response.getBody().get("access_token").asText();
            } else {
                // Handle error based on response status or body
                throw new RuntimeException("Failed to get access token: " + response.getStatusCode());
            }
        } catch (Exception e) {
            // Log the exception, handle retry logic, circuit breaker, etc.
            throw new RuntimeException("Error communicating with Keycloak to get access token", e);
        }
    }
}
```

`Spring Boot application.properties` (or `application.yaml`) configuration:

```Properties

keycloak.auth-server-url=http://your-keycloak-host:port
keycloak.realm=your-realm-name
keycloak.client-id=${KEYCLOAK_CLIENT_ID}
keycloak.client-secret=${KEYCLOAK_CLIENT_SECRET}
```
Remember to use `KEYCLOAK_CLIENT_ID` and `KEYCLOAK_CLIENT_SECRET` as environment variables populated from your Kubernetes Secret.

#### Node.js / NestJS

For Node.js, axios is a popular HTTP client. NestJS often integrates with it.

```TypeScript

// src/keycloak/keycloak.service.ts
import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class KeycloakTokenService {
  private readonly logger = new Logger(KeycloakTokenService.name);
  private accessToken: string | null = null;
  private tokenExpiryTime: number | null = null; // Unix timestamp in seconds

  constructor() {
    this.ensureEnvironmentVariables();
  }

  private ensureEnvironmentVariables() {
    const requiredEnv = [
      'KEYCLOAK_AUTH_SERVER_URL',
      'KEYCLOAK_REALM',
      'KEYCLOAK_CLIENT_ID',
      'KEYCLOAK_CLIENT_SECRET',
    ];
    for (const envVar of requiredEnv) {
      if (!process.env[envVar]) {
        this.logger.error(`Missing required environment variable: ${envVar}`);
        throw new Error(`Missing environment variable: ${envVar}`);
      }
    }
  }

  async getAccessToken(): Promise<string> {
    if (this.accessToken && this.tokenExpiryTime && Date.now() / 1000 < this.tokenExpiryTime - 60) {
      // Return existing token if it's still valid for at least 60 seconds
      return this.accessToken;
    }

    this.logger.log('Refreshing Keycloak access token...');
    const tokenUrl = `${process.env.KEYCLOAK_AUTH_SERVER_URL}/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/token`;

    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
    params.append('client_id', process.env.KEYCLOAK_CLIENT_ID!);
    params.append('client_secret', process.env.KEYCLOAK_CLIENT_SECRET!);
    params.append('scope', 'openid');
    // Optional: Add scope if required
    // params.append('scope', 'openid profile');

    try {
      const response = await axios.post(tokenUrl, params.toString(), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      this.accessToken = response.data.access_token;
      // Calculate expiry time (current time in seconds + expires_in)
      this.tokenExpiryTime = Math.floor(Date.now() / 1000) + response.data.expires_in;

      this.logger.log('Keycloak access token refreshed successfully.');
      return this.accessToken;
    } catch (error) {
      this.logger.error(`Failed to get Keycloak access token: ${error.message}`);
      if (axios.isAxiosError(error) && error.response) {
        this.logger.error('Keycloak error response:', error.response.data);
      }
      throw new Error('Could not obtain access token from Keycloak');
    }
  }
}
```
Environment Variables (e.g., in your Kubernetes Deployment config, or `.env` for local dev):
```
KEYCLOAK_AUTH_SERVER_URL=http://your-keycloak-host:port
KEYCLOAK_REALM=your-realm-name
KEYCLOAK_CLIENT_ID=my-batch-service-client
KEYCLOAK_CLIENT_SECRET=your-secret-here
```

#### Go

Following is a example of using direct HTTP call using clarity.

```Go

// keycloak_service.go
package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"net/url"
	"os"
	"strconv"
	"sync"
	"time"
)

// TokenResponse struct to unmarshal Keycloak's token response
type TokenResponse struct {
	AccessToken string `json:"access_token"`
	ExpiresIn   int    `json:"expires_in"`
	TokenType   string `json:"token_type"`
	Scope       string `json:"scope"`
}

// KeycloakService holds the configuration and token cache
type KeycloakService struct {
	AuthServerURL string
	Realm         string
	ClientID      string
	ClientSecret  string
	tokenURL      string
	accessToken   string
	expiresAt     time.Time
	mu            sync.Mutex // Mutex to protect accessToken and expiresAt
}

// NewKeycloakService creates a new KeycloakService instance
func NewKeycloakService() (*KeycloakService, error) {
	authServerURL := os.Getenv("KEYCLOAK_AUTH_SERVER_URL")
	realm := os.Getenv("KEYCLOAK_REALM")
	clientID := os.Getenv("KEYCLOAK_CLIENT_ID")
	clientSecret := os.Getenv("KEYCLOAK_CLIENT_SECRET")

	if authServerURL == "" || realm == "" || clientID == "" || clientSecret == "" {
		return nil, fmt.Errorf("missing Keycloak environment variables (KEYCLOAK_AUTH_SERVER_URL, KEYCLOAK_REALM, KEYCLOAK_CLIENT_ID, KEYCLOAK_CLIENT_SECRET)")
	}

	return &KeycloakService{
		AuthServerURL: authServerURL,
		Realm:         realm,
		ClientID:      clientID,
		ClientSecret:  clientSecret,
		tokenURL:      fmt.Sprintf("%s/realms/%s/protocol/openid-connect/token", authServerURL, realm),
	}, nil
}

// GetAccessToken retrieves or refreshes the access token
func (ks *KeycloakService) GetAccessToken() (string, error) {
	ks.mu.Lock()
	defer ks.mu.Unlock()

	// Check if token is still valid (refresh if less than 60 seconds remain)
	if ks.accessToken != "" && time.Now().Add(60*time.Second).Before(ks.expiresAt) {
		return ks.accessToken, nil
	}

	fmt.Println("Refreshing Keycloak access token...")

	data := url.Values{}
	data.Set("grant_type", "client_credentials")
	data.Set("client_id", ks.ClientID)
	data.Set("client_secret", ks.ClientSecret)
	data.Set("scope","openid")
	// Optional: Add scope
	// data.Set("scope", "openid profile")

	resp, err := http.PostForm(ks.tokenURL, data)
	if err != nil {
		return "", fmt.Errorf("failed to make token request: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		bodyBytes, _ := ioutil.ReadAll(resp.Body)
		return "", fmt.Errorf("keycloak token request failed with status %d: %s", resp.StatusCode, string(bodyBytes))
	}

	bodyBytes, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return "", fmt.Errorf("failed to read token response body: %w", err)
	}

	var tokenResp TokenResponse
	if err := json.Unmarshal(bodyBytes, &tokenResp); err != nil {
		return "", fmt.Errorf("failed to unmarshal token response: %w", err)
	}

	ks.accessToken = tokenResp.AccessToken
	ks.expiresAt = time.Now().Add(time.Duration(tokenResp.ExpiresIn) * time.Second)

	fmt.Println("Keycloak access token refreshed successfully.")
	return ks.accessToken, nil
}

// Example usage in your main application
func main() {
	// Set environment variables for testing or ensure they are set in Kubernetes deployment
	os.Setenv("KEYCLOAK_AUTH_SERVER_URL", "http://localhost:8080") // Replace with your Keycloak host
	os.Setenv("KEYCLOAK_REALM", "your-realm-name")
	os.Setenv("KEYCLOAK_CLIENT_ID", "my-batch-service-client")
	os.Setenv("KEYCLOAK_CLIENT_SECRET", "your-secret-here")

	ks, err := NewKeycloakService()
	if err != nil {
		fmt.Printf("Error initializing Keycloak service: %v\n", err)
		return
	}

	token, err := ks.GetAccessToken()
	if err != nil {
		fmt.Printf("Error getting access token: %v\n", err)
		return
	}
	fmt.Printf("Access Token: %s\n", token)

	// Example of using the token to access a protected resource
	// Make sure your resource server accepts this token type and validates it against Keycloak
	// req, _ := http.NewRequest("GET", "http://your-protected-api.com/data", nil)
	// req.Header.Set("Authorization", "Bearer " + token)
	// client := &http.Client{}
	// apiResp, _ := client.Do(req)
	// fmt.Printf("API Response Status: %s\n", apiResp.Status)
}
```

## Using the Access Token to Access Other Services

Once you have the access token from your service account, you use it in the `Authorization` header of your HTTP requests to other protected services (resource servers).

```Authorization: Bearer <your-access-token>```

Your other services (resource servers) should be configured to validate these incoming JWT tokens against Keycloak 
(e.g., using a Keycloak adapter or by fetching Keycloak's public keys and performing local validation). 
The resource server will inspect the token's claims, including the `client_id` (which identifies the service account) 
and the `realm_access.roles` or `resource_access.<client_id>.roles claims`, to determine if the service account has the necessary permissions to access the requested resource.


## Token Refresh and Expiration Handling

Access tokens are short-lived. The `expires_in` field in the token response (in seconds) tells you when the token will expire.

- **Caching**: Your backend services should cache the obtained access token.

- **Proactive Refresh**: Before making a request to a protected resource, check if the cached token is close to expiration 
(e.g., within 60 seconds). If it is, obtain a new token using the `client credentials grant`. This avoids issues with expired tokens during ongoing operations.

- **Error Handling**: Implement robust error handling for `401 Unauthorized` responses from resource servers. If you receive such an error with a 
valid (but possibly expired) token, attempt to refresh the token and retry the request.


## Security Best Practices for Service Accounts

- **Least Privilege**: Grant your service accounts only the minimum necessary roles and permissions. Avoid giving broad administrative roles unless absolutely essential.

- **Secret Management**:
    - **Never hardcode secrets**: Always use environment variables or a secret management solution like `Kubernetes Secrets`, `HashiCorp Vault`, or `AWS Secrets Manager`.
    - **Rotate secrets regularly**: Implement a process to periodically rotate client secrets in Keycloak and update them in `Kubernetes Secrets`.

- **Auditing and Logging**: Ensure that Keycloak's audit logs are enabled and monitored. This allows you to track when service accounts obtain tokens and what resources 
they access. Your backend services should also log their token acquisition and usage attempts.

- **Network Segmentation**: Restrict network access to your Keycloak instance and your backend services. Only allow necessary communication.

- **HTTPS/TLS**: Always use HTTPS/TLS for all communication between your backend services and Keycloak to prevent man-in-the-middle attacks and protect credentials 
and tokens in transit. Your containerized environment on Kubernetes should already enforce this for ingress.

- **No User Impersonation**: Emphasize that service accounts are for machine-to-machine authentication. Do not use them to impersonate users or perform actions that should be attributed to a specific user.

## Troubleshooting Common Issues

- **`invalid_client` error**:
    - **Cause**: Incorrect `client_id` or `client_secret`.
    - **Solution**: Double-check your Keycloak client ID and secret. Ensure the secret in your Kubernetes Secret matches the one in Keycloak.

- **`unauthorized_client` error**:
    - **Cause**: Client authentication is not enabled, or the client is not configured for the client_credentials grant.
    - **Solution**: In Keycloak Client Settings, ensure `Client authentication` is `On` and `Service accounts` roles is `On`.

- **`access_denied` or `insufficient permissions`**:
    - **Cause**: The service account does not have the necessary roles to access the requested resource.
    - **Solution**: Review the Service Account roles tab in Keycloak for your client and ensure all required realm roles and client roles are assigned. 
    Verify that your resource server is correctly interpreting these roles from the incoming token.

- **Network connectivity issues**:
    - **Cause**: Your backend service cannot reach the Keycloak instance.
    - **Solution**: Check Kubernetes service names, network policies, and firewall rules to ensure connectivity between your backend service pods and Keycloak.

## Conclusion

By adopting Keycloak service accounts and the `Client Credentials Grant`, you are aligning your backend authentication practices with modern OAuth 2.0 and OpenID Connect standards. 
This not only enhances the security posture of your applications by eliminating the need for user credentials in automated processes but also provides a clear, 
auditable distinction between user-initiated and system-initiated actions. 

