---
sidebar_position: 3
---

# Deployment 🌎

## CI/CD Pipeline

Every commit to main branch will trigger the github action workflow.

Following actions will be triggered by workflow
- build & push the images into ghcr (github container registry)
- update the image tags in manifest files of staging server

Refer to ```deployment.yml``` inside ```.github/workflows``` for more details.
