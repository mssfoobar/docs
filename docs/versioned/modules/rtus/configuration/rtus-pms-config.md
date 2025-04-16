---
sidebar_position: 1
sidebar_label: RTUS-PMS Container Configuration
---

#	RTUS-PMS Container Configuration

This section explained the `environment variables` used in the `Docker Compose` configuration file to initialize **RTUS-PMS**.


<table width="100%">
    <tr>
        <th width="40%">Environment Variable</th>
        <th width="60%">Description</th>
    </tr>
    <tr>
        <td>SERVER_PORT</td>
        <td>Port to listen for request. Default is 8080. </td>
    </tr>
    <tr>
        <td>SERVER_ERROR_INCLUDE_MESSAGE</td>
        <td>Whether to include server error in the REST error message. Default is always which will 
alway include. Can disabled by specifying never.</td>
    </tr>
    <tr>
        <td>SPRING_DATASOURCE_URL</td>
        <td>The JDBC connection string to the database.</td>
    </tr>
    <tr>
        <td>SPRING_DATASOURCE_USERNAME</td>
        <td>The username of the database user.</td>
    </tr>
    <tr>
        <td>SPRING_DATASOURCE_PASSWORD</td>
        <td>The password of the database user.</td>
    </tr>
    <tr>
        <td>SPRING_JPA_DATABASE-PLATFORM</td>
        <td>The database dialect to use.</td>
    </tr>
    <tr>
        <td>SPRING_JPA_PROPERTIES_HIBERNATE_DEFAULT_SCHEMA</td>
        <td>The database schema to use by Hibernate.</td>
    </tr>
    <tr>
        <td>SPRING_LIQUIBASE_DEFAULT-SCHEMA</td>
        <td>The database schema to use by liquibase. Should be the same as the one use by Hibernate.</td>
    </tr>
    <tr>
        <td>RTUS_CLUSTERNAME</td>
        <td>The name of the Hazelcat cluster used to communicate with RTUS-SEH.</td>
    </tr>
    <tr>
        <td>RTUS_SERVICE-DNS_ENABLE</td>
        <td>Whether to enable Hazelcast member discovery using DNS Lookup. You should enable it when 
deploying RTUS in Docker or Kubernetes.</td>
    </tr>
    <tr>
        <td>RTUS_SERVICE-DNS</td>
        <td>The name of the DNS service to use for lookup.</td>
    </tr>
    <tr>
        <td>RTUS_SERVICE-DNS-TIMEOUT</td>
        <td>Custom time for how long the DNS Lookup is checked.</td>
    </tr>
    <tr>
        <td>RTUS_SERVICE-PORT</td>
        <td>The Hazelcast port to use for member communication.</td>
    </tr>
    <tr>
        <td>RTUS_ADMIN_SECURITY_ROLES</td>
        <td>The roles that allow to configure security of Map, User Value Map, and Topic.</td>
    </tr>
    <tr>
        <td>RTUS_KEYCLOAK_URL</td>
        <td>The URL to connect to Keycloak.</td>
    </tr>
    <tr>
        <td>RTUS_ACTIVE-TENANT_CLAIMNAME</td>
        <td>The claim name in Access Token that contains the active tenant value.</td>
    </tr>
    <tr>
        <td>RTUS_TOPIC_TIME-TO-LIVE-SECONDS</td>
        <td>How long an event to stay in Topic before been removed.</td>
    </tr>
    <tr>
        <td>RTUS_TOPIC_CAPACITY</td>
        <td>The maximum number of event a Topic can hold.</td>
    </tr>
    <tr>
        <td>RTUS_MAP_MAX-IDLE-SECONDS</td>
        <td>Limits the lifetime of the entries relative to the time of the last read or write access 
            performed on them. The entries whose idle period exceeds this limit are expired and evicted 
            automatically. Value of 0 means infinite.</td>
    </tr>
    <tr>
        <td>RTUS_TOPIC_CAPACITY</td>
        <td>Define the map’s maximum size. When the maximum size is reached, map entries are removed based 
            on the value of the eviction-policy settings. Value of 0 means no limit.</td>
    </tr>
    <tr>
        <td>RTUS_MAP_EVICTION-POLICY</td>
        <td>Defines which map entries to remove when the size of the map grows larger than map's maximum size.<br/>Accepted values:
        <ul><li><b>NONE:</b> If set, no items are evicted and the size element is ignored.</li>
        <li><b>LRU:</b> The least recently used map entries are removed.</li>
        <li><b>LFU:</b> The least frequently used map entries are removed.</li></ul></td>
    </tr>
</table>



