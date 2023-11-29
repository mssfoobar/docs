---
sidebar_position: 1
---

# Version Control System

This section attempts to explain how we manage our source code, why we do it in this way, and why you have to do it
this way too. We use Git as our VCS (version control system) because it is highly mature, widely supported, has well
established best-practices, and has many tools that support it.

## How this ties to Developer Operations

Since we want our application to be cloud native, we have to have a good degree of infrastructure automation. We'll need
to be able to easily scale up or down services by declaratively describing their deployment configurations, and we'll
want to have preview servers automatically deployed when we check in our code to faciliate faster development cycles.

To achieve these things, our applications are containerized and orchestrated by Kubernetes, and the container images are
built automatically by our CI. These images are created whenever a commit occurs on a Git branch that tied to an
environment (e.g. a merge request is successfully merged from a feature branch to the 'development' branch, the code
from the development branch in that commit would then be built by the CI into an image, and this image will be uploaded
to a container registry, and ultimately deployed by Kubernetes).

In order for these systems to be run effectively, we adopt the principals of
[GitOps](https://about.gitlab.com/topics/gitops/), this is necessary for us to develop and deploy our system in a
reliable, structured way.

## What Git Ops?

`GitOps` is a practice that makes Git the single source of truth for our infrastructure definitions. This means that we
will be able to make changes to the system's deployment 'simply' by looking at the state of the Git repository. By
tying the configuration of the system infrastructure and deployment to source code, we also gain the ability to version
the infrastructure since they can be tied to individual Git commits.

Read more about GitOps [here](https://about.gitlab.com/topics/gitops/).

## Branching Strategy

We are essentially using a form of Git Flow as our branching strategy. This is required because our deployment
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
