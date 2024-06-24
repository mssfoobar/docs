# Source Management

This section explains how we manage our source code, why we do it in this way, and why you have to do it
this way too.

---

## Git

We use Git as our VCS (version control system) because it is highly mature, widely supported, has well
established best-practices, and has many tools that support it.

### How this ties to Developer Operations

Since we want our application to be cloud native, we have to have a good degree of infrastructure automation. We'll need
to be able to easily scale up or down services by declaratively describing their deployment configurations, and we'll
want to have preview servers automatically deployed when we check in our code to faciliate faster development cycles.

To achieve these things, our applications are containerized and orchestrated by Kubernetes, and the container images are
built automatically by our CI. These images are created whenever a commit occurs on a Git branch that is tied to an
environment (e.g. when a merge request is successfully merged from a feature branch to the release branch, the new code
from the release branch would then be built by the CI into an image, and this image will be uploaded to a container
registry, and ultimately deployed by Kubernetes).

In order for these systems to be run effectively, we adopt the principles of
[GitOps](https://about.gitlab.com/topics/gitops/), this is necessary for us to develop and deploy our system in a
reliable, structured way.

### What Git Ops?

`GitOps` is a practice that makes Git the single source of truth for our infrastructure definitions. This means that we
will be able to make changes to the system's deployment 'simply' by looking at the state of the Git repository. By
tying the configuration of the system infrastructure and deployment to source code, we also gain the ability to version
the infrastructure since they can be tied to individual Git commits.

Read more about GitOps [here](https://about.gitlab.com/topics/gitops/).

### Branching Strategy

We are essentially using a variations of Git Flow as our branching strategy. This is required because our deployment
environments are tied to branches in your Git repository. These branches that get deployed can be seen as
'deployment' branches.

For each environment that you want to have automatically deployed, you need a branch. When developers need
to make changes to that branch, they check out a new branch using that as the base. They then make changes to their
'personal' feature branch, and when they are done, they make a pull request to merge it back to the base branch, which
then gets triggered to be deployed.

For example, someone found a typo in the web `development` branch (this branch deploys to a preview server for us to
view changes made to the web server) - for a change to be made, a developer must use the `development` branch as the base
and checkout a new branch with a new name (e.g. `fix/ambulance-chart-typo`). They then make the changes to fix this
typographical error, and open a pull request to contribute this change back to the `development` branch. This pull
request must be reviewed by another developer to ensure it adheres to the projects guidelines and as a primary check to
ensure it does not sabotage the system (code formatting and linting should be done automatically by pre-commit hooks).

Git Flow is a popular and well documented branching strategy, read more about it
[here](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).

---

## Conventional Commits

Conventional commits is a specification for adding human and machine readable meaning to commit messages.

The specification is well documented, read more about conventional commits [here](https://www.conventionalcommits.org/).

### Summary

The Conventional Commits specification is a lightweight convention on top of commit messages. It provides an easy set
of rules for creating an explicit commit history; which makes it easier to write automated tools on top of. This
convention dovetails with [SemVer](https://semver.org/), by describing the features, fixes, and breaking changes made in
commit messages.

The commit message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Why conventional commits?

Following conventional commits allows many tools to parse and make sense of commits since they follow an agreed upon
convention. It also standardizes them in a format that lets the reader make sense of the commit. On our web server, we
use husky to apply a pre-commit check to enforce that developers commit with messages that follows conventional commits.
We can then use tools to generate release notes based on these commits - but the quality of these notes will directly be
related to the quality of the commit messages and pull requests, so please take this practice seriously!

---

## Signing Commits

To sign commits that are valid under GitHub's rules - you must use a GPG Keypair. Signing commits allows us to verify
that commits are made by the user that's committing them.

Ideally, all branches should be protected to require commits to be signed. This can be done by [configuring GitHub's
branch protection rules](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#require-signed-commits) to ensure commits are only allowed when they have been verified with a
GPG signature. The following section explains how you can set your computer up with a GPG keypair to sign your git
commits.

### 1. Generate a GPG Keypair

To generate a new GPG key on the machine:

```bash
gpg --full-generate-key
```

-   `1` for `(1) RSA and RSA (default)` when prompted on what kind of key you want.
-   `4096` when prompted on what keysize you want.
-   `0` when prompted how long the key should be valid so that it does not expire (unless you wish to commit to a
    different policy).
-   `y` to confirm that the key does not expire if you picked `0`.
-   `<your name>` when asked for your name. This does not need to match the commit name.
-   `<email address>` when asked for your email, this must match the commit email address.
-   `<comment>` (optional) some comments to tag onto this key.
-   `O` for (O)kay when you're done.
-   A dialogue box will appear - key in your passphrase for the key - you <b>MUST</b> remember this passphrase and use it
    every time to sign a commit. You will be asked to key the passphrase in again to confirm.

:::tip
See this [reference](https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key) for more information.
:::

### 2. Set up the GPG public key

#### 2.1. List your existing GPG keys

To list existing GPG keys on the machine:

```bash
gpg --list-keys --keyid-format=long
gpg --list-secret-keys --keyid-format=long
```

GPG key ID is located after `sec rsa4096/`

:::tip
See this [reference](https://docs.github.com/en/authentication/managing-commit-signature-verification/checking-for-existing-gpg-keys) for more information.
:::

#### 2.2. Print the GPG public key

Print the GPG public key in ASCII armor format:

```bash
gpg --armor --export <key-ID>
```

:::tip
See this [reference](https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key) for more information.
:::

#### 2.3. Add the GPG public key to GitHub

Copy the entire output from [2.1](#21-list-your-existing-gpg-keys) into your [GitHub account's settings > keys](https://github.com/settings/keys)

Select `New GPG key` and paste the output there.

Also, it is highly recommended that you set your account to `Vigilant mode` to mark any unsigned commits as `unverified`.

![image](/img/github_settings_keys.png)

:::tip
See this [reference](https://docs.github.com/en/authentication/managing-commit-signature-verification/adding-a-gpg-key-to-your-github-account) for more information.
:::

### 3. Set up the GPG private key

Edit the `.gitconfig` for global configuration. On Windows machines, it should be at `%USERPROFILE%/.gitconfig`.  
Or edit the `.git/config` for each repository's configuration.

```
[user]
    email = <commit email>
    signingkey = <key-ID>
[commit]
    gpgsign = true
```

Alternatively, you can use the following commands to edit your git config from the terminal.

```bash
 git config user.email "<commit email>"
 git config user.signingkey "<key-ID>"
 git config commit.gpgsign true
```

You can add the `--global` flag to modify the settings globally (for any/all repositories in your machine).  
Repository settings will supersede global settings.

```bash
 git config --global user.email "<commit email>"
 git config --global user.signingkey "<key-ID>"
 git config --global commit.gpgsign true
```

After that, you will be prompted for a passphrase every time you commit.

:::tip
See this [reference](https://docs.github.com/en/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key#telling-git-about-your-gpg-key) for more information.
:::

### List your existing GPG keys

To list existing GPG keys on the machine:

```bash
gpg --list-keys --keyid-format=long
gpg --list-secret-keys --keyid-format=long
```

GPG key ID is located after `sec rsa4096/`

This will be useful, especially when you need to view the key ID (used in many of the commands).

:::tip
See this [reference](https://docs.github.com/en/authentication/managing-commit-signature-verification/checking-for-existing-gpg-keys) for more information.
:::

### Migrate GPG Keypairs

To export the keypairs from your PC:

```bash
gpg --export <key-ID> > public_keys.pgp
gpg --export-secret-keys <key-ID> > private_keys.pgp
```

To import the keypairs to your other PC:

```bash
gpg --import < public_keys.pgp
gpg --import < private_keys.pgp
```

:::tip
See this [reference](https://makandracards.com/makandra-orga/37763-gpg-extract-private-key-and-import-on-different-machine) for more information.
:::

### Delete GPG Keypairs

To delete the keypairs from your PC:

:::info
You must delete the private key before you can delete the public key.
:::

```
gpg --delete-secret-key <key-ID>
gpg --delete-key <key-ID>
```

Or delete the `.gnupg` file. On Windows machines, it should be at `%USERPROFILE%/.gnupg`.

:::tip
See this [reference](https://blog.chapagain.com.np/gpg-remove-keys-from-your-public-keyring/) for more information.
:::

### Password Entry on Mac

If you're on MacOS, under the default configuration, `gpg` might not be able to create a password prompt for you. Run the following commands
in sequence to install `pinetry-mac`, which is a small collection of dialog programs that allow GnuPG to read passphrases and PIN numbers
in a secure manner.

```bash
brew install pinentry-mac
echo "pinentry-program $(which pinentry-mac)" >> ~/.gnupg/gpg-agent.conf
killall gpg-agent
```
