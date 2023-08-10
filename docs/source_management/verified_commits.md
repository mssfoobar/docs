# Signing Commits

To sign commits that are valid under GitHub's rules - you must use a GPG Keypair. Signing commits allows us to verify
that commits are made by the user that's committing them.

Ideally, all branches should be protected to require commits to be signed. This can be done by [configuring GitHub's
branch protection rules](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#require-signed-commits) to ensure commits are only allowed when they have been verified with a
GPG signature. The following section explains how you can set your computer up with a GPG keypair to sign your git
commits.

## Listing your existing GPG keys

To list existing GPG keys on the machine:

```bash
gpg --list-secret-keys --keyid-format=long
```

This will be useful, especially when you need to view the Key ID (used in many of the following commands).

:::tip
See this [reference](https://docs.github.com/en/authentication/managing-commit-signature-verification/checking-for-existing-gpg-keys) for more information.
:::

## 2. Generate a GPG Keypair

To generate new GPG key on the machine:

:::tip
See this [reference](https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key) for more information.
:::

```bash
gpg --full-generate-key
```

-   `(1) RSA and RSA (default)` When prompted on what kind of key you want.
-   `4096` when prompted on what keysize you want.
-   `0` when prompted how long the key should be valid so that it does not expire (unless you wish to commit to a
    different policy).
-   `(y)` to confirm that the key does not expire if you picked `0`.
-   `<your name>` when asked for you name. This does not need to match the commit name.
-   `<email address>` when asked for your email, this must match the commit email address.
-   (Optional) Key in some comments to tag on to this key.
-   `O` for Okey when you're done.
-   A dialogue box will appear - key in your passphrase for the key - you <b>MUST</b> remember this passphrase and use it
    everytime to sign a commit. You will be asked to key the passphrase in again to confirm.

## 3. Set up GPG Public Key

Retrieve the GPG public key to view it:

```bash
gpg --list-secret-keys --keyid-format=long
```

:::tip
See this [reference](https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key) for more information.
:::

## 4. GPG key ID is located after `sec rsa4096/`

Print the GPG key ID in ASCII armor format:

```bash
gpg --armor --export <key-ID>
```

:::tip
See this [reference](https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key) for more information.
:::

## 5. Add GPG public key to GitHub

Copy the entire output from [4](#4-gpg-key-id-is-located-after-sec-rsa4096) into your [GitHub account's settings > keys](https://github.com/settings/keys)

Select `New GPG key` and paste the output there.

Also, it is highly recommended that you set your account to `Vigilant mode` to mark any unsigned commits as `unverified`.

![image](/img/github_settings_keys.png)

:::tip
See this [reference](https://docs.github.com/en/authentication/managing-commit-signature-verification/adding-a-gpg-key-to-your-github-account) for more information.
:::

## 6. Set up private key

Edit the global `.gitconfig` or for each repository, edit `.git/config`.

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

You can add the `--global` flag to modify the settings globally (for any repo in your machine)

```bash
 git config --global user.email "<commit email>"
 git config --global user.signingkey "<key-ID>"
 git config --global commit.gpgsign true
```

Subsequently, every time you commit, you will be prompted for a passphrase.

## Migrating GPG Keypairs

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

## Deleting GPG Keypairs

To delete the keypairs from your PC:

```
gpg --delete-secret-key <key-ID>
gpg --delete-key <key-ID>
```

Or just delete the `.gnupg` file. On Windows machines, it should be at `%USERPROFILE%/.gnupg`.

:::tip
See this [reference](https://blog.chapagain.com.np/gpg-remove-keys-from-your-public-keyring/) for more information.
:::
