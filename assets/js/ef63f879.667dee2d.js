"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[94213],{31911:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var t=i(74848),s=i(28453);const o={},r="Source Management",a={id:"development/guidelines/source_management",title:"Source Management",description:"This section explains how we manage our source code, why we do it in this way, and why you have to do it",source:"@site/docs/20_development/60_guidelines/10_source_management.md",sourceDirName:"20_development/60_guidelines",slug:"/development/guidelines/source_management",permalink:"/docs/docs/development/guidelines/source_management",draft:!1,unlisted:!1,editUrl:"https://github.com/mssfoobar/docs/tree/main/docs/20_development/60_guidelines/10_source_management.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"development",previous:{title:"\ud83d\udcda Guidelines",permalink:"/docs/docs/category/-guidelines"},next:{title:"Coding Guides",permalink:"/docs/docs/category/coding-guides"}},c={},l=[{value:"Git",id:"git",level:2},{value:"How this ties to Developer Operations",id:"how-this-ties-to-developer-operations",level:3},{value:"What Git Ops?",id:"what-git-ops",level:3},{value:"Branching Strategy",id:"branching-strategy",level:3},{value:"Conventional Commits",id:"conventional-commits",level:2},{value:"Summary",id:"summary",level:3},{value:"Why conventional commits?",id:"why-conventional-commits",level:3},{value:"Signing Commits",id:"signing-commits",level:2},{value:"1. Generate a GPG Keypair",id:"1-generate-a-gpg-keypair",level:3},{value:"2. Set up the GPG public key",id:"2-set-up-the-gpg-public-key",level:3},{value:"2.1. List your existing GPG keys",id:"21-list-your-existing-gpg-keys",level:4},{value:"2.2. Print the GPG public key",id:"22-print-the-gpg-public-key",level:4},{value:"2.3. Add the GPG public key to GitHub",id:"23-add-the-gpg-public-key-to-github",level:4},{value:"3. Set up the GPG private key",id:"3-set-up-the-gpg-private-key",level:3},{value:"List your existing GPG keys",id:"list-your-existing-gpg-keys",level:3},{value:"Migrate GPG Keypairs",id:"migrate-gpg-keypairs",level:3},{value:"Delete GPG Keypairs",id:"delete-gpg-keypairs",level:3},{value:"Password Entry on Mac",id:"password-entry-on-mac",level:3}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"source-management",children:"Source Management"})}),"\n",(0,t.jsx)(n.p,{children:"This section explains how we manage our source code, why we do it in this way, and why you have to do it\nthis way too."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"git",children:"Git"}),"\n",(0,t.jsx)(n.p,{children:"We use Git as our VCS (version control system) because it is highly mature, widely supported, has well\nestablished best-practices, and has many tools that support it."}),"\n",(0,t.jsx)(n.h3,{id:"how-this-ties-to-developer-operations",children:"How this ties to Developer Operations"}),"\n",(0,t.jsx)(n.p,{children:"Since we want our application to be cloud native, we have to have a good degree of infrastructure automation. We'll need\nto be able to easily scale up or down services by declaratively describing their deployment configurations, and we'll\nwant to have preview servers automatically deployed when we check in our code to faciliate faster development cycles."}),"\n",(0,t.jsx)(n.p,{children:"To achieve these things, our applications are containerized and orchestrated by Kubernetes, and the container images are\nbuilt automatically by our CI. These images are created whenever a commit occurs on a Git branch that is tied to an\nenvironment (e.g. when a merge request is successfully merged from a feature branch to the release branch, the new code\nfrom the release branch would then be built by the CI into an image, and this image will be uploaded to a container\nregistry, and ultimately deployed by Kubernetes)."}),"\n",(0,t.jsxs)(n.p,{children:["In order for these systems to be run effectively, we adopt the principles of\n",(0,t.jsx)(n.a,{href:"https://about.gitlab.com/topics/gitops/",children:"GitOps"}),", this is necessary for us to develop and deploy our system in a\nreliable, structured way."]}),"\n",(0,t.jsx)(n.h3,{id:"what-git-ops",children:"What Git Ops?"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"GitOps"})," is a practice that makes Git the single source of truth for our infrastructure definitions. This means that we\nwill be able to make changes to the system's deployment 'simply' by looking at the state of the Git repository. By\ntying the configuration of the system infrastructure and deployment to source code, we also gain the ability to version\nthe infrastructure since they can be tied to individual Git commits."]}),"\n",(0,t.jsxs)(n.p,{children:["Read more about GitOps ",(0,t.jsx)(n.a,{href:"https://about.gitlab.com/topics/gitops/",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"branching-strategy",children:"Branching Strategy"}),"\n",(0,t.jsx)(n.p,{children:"We are essentially using a variations of Git Flow as our branching strategy. This is required because our deployment\nenvironments are tied to branches in your Git repository. These branches that get deployed can be seen as\n'deployment' branches."}),"\n",(0,t.jsx)(n.p,{children:"For each environment that you want to have automatically deployed, you need a branch. When developers need\nto make changes to that branch, they check out a new branch using that as the base. They then make changes to their\n'personal' feature branch, and when they are done, they make a pull request to merge it back to the base branch, which\nthen gets triggered to be deployed."}),"\n",(0,t.jsxs)(n.p,{children:["For example, someone found a typo in the web ",(0,t.jsx)(n.code,{children:"development"})," branch (this branch deploys to a preview server for us to\nview changes made to the web server) - for a change to be made, a developer must use the ",(0,t.jsx)(n.code,{children:"development"})," branch as the base\nand checkout a new branch with a new name (e.g. ",(0,t.jsx)(n.code,{children:"fix/ambulance-chart-typo"}),"). They then make the changes to fix this\ntypographical error, and open a pull request to contribute this change back to the ",(0,t.jsx)(n.code,{children:"development"})," branch. This pull\nrequest must be reviewed by another developer to ensure it adheres to the projects guidelines and as a primary check to\nensure it does not sabotage the system (code formatting and linting should be done automatically by pre-commit hooks)."]}),"\n",(0,t.jsxs)(n.p,{children:["Git Flow is a popular and well documented branching strategy, read more about it\n",(0,t.jsx)(n.a,{href:"https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow",children:"here"}),"."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"conventional-commits",children:"Conventional Commits"}),"\n",(0,t.jsx)(n.p,{children:"Conventional commits is a specification for adding human and machine readable meaning to commit messages."}),"\n",(0,t.jsxs)(n.p,{children:["The specification is well documented, read more about conventional commits ",(0,t.jsx)(n.a,{href:"https://www.conventionalcommits.org/",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"summary",children:"Summary"}),"\n",(0,t.jsxs)(n.p,{children:["The Conventional Commits specification is a lightweight convention on top of commit messages. It provides an easy set\nof rules for creating an explicit commit history; which makes it easier to write automated tools on top of. This\nconvention dovetails with ",(0,t.jsx)(n.a,{href:"https://semver.org/",children:"SemVer"}),", by describing the features, fixes, and breaking changes made in\ncommit messages."]}),"\n",(0,t.jsx)(n.p,{children:"The commit message should be structured as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"<type>[optional scope]: <description>\n\n[optional body]\n\n[optional footer(s)]\n"})}),"\n",(0,t.jsx)(n.h3,{id:"why-conventional-commits",children:"Why conventional commits?"}),"\n",(0,t.jsx)(n.p,{children:"Following conventional commits allows many tools to parse and make sense of commits since they follow an agreed upon\nconvention. It also standardizes them in a format that lets the reader make sense of the commit. On our web server, we\nuse husky to apply a pre-commit check to enforce that developers commit with messages that follows conventional commits.\nWe can then use tools to generate release notes based on these commits - but the quality of these notes will directly be\nrelated to the quality of the commit messages and pull requests, so please take this practice seriously!"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"signing-commits",children:"Signing Commits"}),"\n",(0,t.jsx)(n.p,{children:"To sign commits that are valid under GitHub's rules - you must use a GPG Keypair. Signing commits allows us to verify\nthat commits are made by the user that's committing them."}),"\n",(0,t.jsxs)(n.p,{children:["Ideally, all branches should be protected to require commits to be signed. This can be done by ",(0,t.jsx)(n.a,{href:"https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#require-signed-commits",children:"configuring GitHub's\nbranch protection rules"})," to ensure commits are only allowed when they have been verified with a\nGPG signature. The following section explains how you can set your computer up with a GPG keypair to sign your git\ncommits."]}),"\n",(0,t.jsx)(n.h3,{id:"1-generate-a-gpg-keypair",children:"1. Generate a GPG Keypair"}),"\n",(0,t.jsx)(n.p,{children:"To generate a new GPG key on the machine:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gpg --full-generate-key\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"1"})," for ",(0,t.jsx)(n.code,{children:"(1) RSA and RSA (default)"})," when prompted on what kind of key you want."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"4096"})," when prompted on what keysize you want."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"0"})," when prompted how long the key should be valid so that it does not expire (unless you wish to commit to a\ndifferent policy)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"y"})," to confirm that the key does not expire if you picked ",(0,t.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"<your name>"})," when asked for your name. This does not need to match the commit name."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"<email address>"})," when asked for your email, this must match the commit email address."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"<comment>"})," (optional) some comments to tag onto this key."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"O"})," for (O)kay when you're done."]}),"\n",(0,t.jsxs)(n.li,{children:["A dialogue box will appear - key in your passphrase for the key - you ",(0,t.jsx)("b",{children:"MUST"})," remember this passphrase and use it\nevery time to sign a commit. You will be asked to key the passphrase in again to confirm."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["See this ",(0,t.jsx)(n.a,{href:"https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key",children:"reference"})," for more information."]})}),"\n",(0,t.jsx)(n.h3,{id:"2-set-up-the-gpg-public-key",children:"2. Set up the GPG public key"}),"\n",(0,t.jsx)(n.h4,{id:"21-list-your-existing-gpg-keys",children:"2.1. List your existing GPG keys"}),"\n",(0,t.jsx)(n.p,{children:"To list existing GPG keys on the machine:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gpg --list-keys --keyid-format=long\ngpg --list-secret-keys --keyid-format=long\n"})}),"\n",(0,t.jsxs)(n.p,{children:["GPG key ID is located after ",(0,t.jsx)(n.code,{children:"sec rsa4096/"})]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["See this ",(0,t.jsx)(n.a,{href:"https://docs.github.com/en/authentication/managing-commit-signature-verification/checking-for-existing-gpg-keys",children:"reference"})," for more information."]})}),"\n",(0,t.jsx)(n.h4,{id:"22-print-the-gpg-public-key",children:"2.2. Print the GPG public key"}),"\n",(0,t.jsx)(n.p,{children:"Print the GPG public key in ASCII armor format:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gpg --armor --export <key-ID>\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["See this ",(0,t.jsx)(n.a,{href:"https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key",children:"reference"})," for more information."]})}),"\n",(0,t.jsx)(n.h4,{id:"23-add-the-gpg-public-key-to-github",children:"2.3. Add the GPG public key to GitHub"}),"\n",(0,t.jsxs)(n.p,{children:["Copy the entire output from ",(0,t.jsx)(n.a,{href:"#21-list-your-existing-gpg-keys",children:"2.1"})," into your ",(0,t.jsx)(n.a,{href:"https://github.com/settings/keys",children:"GitHub account's settings > keys"})]}),"\n",(0,t.jsxs)(n.p,{children:["Select ",(0,t.jsx)(n.code,{children:"New GPG key"})," and paste the output there."]}),"\n",(0,t.jsxs)(n.p,{children:["Also, it is highly recommended that you set your account to ",(0,t.jsx)(n.code,{children:"Vigilant mode"})," to mark any unsigned commits as ",(0,t.jsx)(n.code,{children:"unverified"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image",src:i(32575).A+"",width:"1137",height:"737"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["See this ",(0,t.jsx)(n.a,{href:"https://docs.github.com/en/authentication/managing-commit-signature-verification/adding-a-gpg-key-to-your-github-account",children:"reference"})," for more information."]})}),"\n",(0,t.jsx)(n.h3,{id:"3-set-up-the-gpg-private-key",children:"3. Set up the GPG private key"}),"\n",(0,t.jsxs)(n.p,{children:["Edit the ",(0,t.jsx)(n.code,{children:".gitconfig"})," for global configuration. On Windows machines, it should be at ",(0,t.jsx)(n.code,{children:"%USERPROFILE%/.gitconfig"}),".",(0,t.jsx)(n.br,{}),"\n","Or edit the ",(0,t.jsx)(n.code,{children:".git/config"})," for each repository's configuration."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[user]\n    email = <commit email>\n    signingkey = <key-ID>\n[commit]\n    gpgsign = true\n"})}),"\n",(0,t.jsx)(n.p,{children:"Alternatively, you can use the following commands to edit your git config from the terminal."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:' git config user.email "<commit email>"\n git config user.signingkey "<key-ID>"\n git config commit.gpgsign true\n'})}),"\n",(0,t.jsxs)(n.p,{children:["You can add the ",(0,t.jsx)(n.code,{children:"--global"})," flag to modify the settings globally (for any/all repositories in your machine).",(0,t.jsx)(n.br,{}),"\n","Repository settings will supersede global settings."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:' git config --global user.email "<commit email>"\n git config --global user.signingkey "<key-ID>"\n git config --global commit.gpgsign true\n'})}),"\n",(0,t.jsx)(n.p,{children:"After that, you will be prompted for a passphrase every time you commit."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["See this ",(0,t.jsx)(n.a,{href:"https://docs.github.com/en/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key#telling-git-about-your-gpg-key",children:"reference"})," for more information."]})}),"\n",(0,t.jsx)(n.h3,{id:"list-your-existing-gpg-keys",children:"List your existing GPG keys"}),"\n",(0,t.jsx)(n.p,{children:"To list existing GPG keys on the machine:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gpg --list-keys --keyid-format=long\ngpg --list-secret-keys --keyid-format=long\n"})}),"\n",(0,t.jsxs)(n.p,{children:["GPG key ID is located after ",(0,t.jsx)(n.code,{children:"sec rsa4096/"})]}),"\n",(0,t.jsx)(n.p,{children:"This will be useful, especially when you need to view the key ID (used in many of the commands)."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["See this ",(0,t.jsx)(n.a,{href:"https://docs.github.com/en/authentication/managing-commit-signature-verification/checking-for-existing-gpg-keys",children:"reference"})," for more information."]})}),"\n",(0,t.jsx)(n.h3,{id:"migrate-gpg-keypairs",children:"Migrate GPG Keypairs"}),"\n",(0,t.jsx)(n.p,{children:"To export the keypairs from your PC:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gpg --export <key-ID> > public_keys.pgp\ngpg --export-secret-keys <key-ID> > private_keys.pgp\n"})}),"\n",(0,t.jsx)(n.p,{children:"To import the keypairs to your other PC:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gpg --import < public_keys.pgp\ngpg --import < private_keys.pgp\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["See this ",(0,t.jsx)(n.a,{href:"https://makandracards.com/makandra-orga/37763-gpg-extract-private-key-and-import-on-different-machine",children:"reference"})," for more information."]})}),"\n",(0,t.jsx)(n.h3,{id:"delete-gpg-keypairs",children:"Delete GPG Keypairs"}),"\n",(0,t.jsx)(n.p,{children:"To delete the keypairs from your PC:"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"You must delete the private key before you can delete the public key."})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"gpg --delete-secret-key <key-ID>\ngpg --delete-key <key-ID>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Or delete the ",(0,t.jsx)(n.code,{children:".gnupg"})," file. On Windows machines, it should be at ",(0,t.jsx)(n.code,{children:"%USERPROFILE%/.gnupg"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["See this ",(0,t.jsx)(n.a,{href:"https://blog.chapagain.com.np/gpg-remove-keys-from-your-public-keyring/",children:"reference"})," for more information."]})}),"\n",(0,t.jsx)(n.h3,{id:"password-entry-on-mac",children:"Password Entry on Mac"}),"\n",(0,t.jsxs)(n.p,{children:["If you're on MacOS, under the default configuration, ",(0,t.jsx)(n.code,{children:"gpg"})," might not be able to create a password prompt for you. Run the following commands\nin sequence to install ",(0,t.jsx)(n.code,{children:"pinetry-mac"}),", which is a small collection of dialog programs that allow GnuPG to read passphrases and PIN numbers\nin a secure manner."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'brew install pinentry-mac\necho "pinentry-program $(which pinentry-mac)" >> ~/.gnupg/gpg-agent.conf\nkillall gpg-agent\n'})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},32575:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/github_settings_keys-826b038bece825f7fe45905d65a8b0b3.png"}}]);