---
sidebar_position: 589
---

#temporalio
For detailed cots configuration:
- refer to helm chart

sample values customisation

      - name: elasticsearch.enabled
        value: "false"
      - name: grafana.enabled
        value: "false"
      - name: prometheus.enabled
        value: "false"
      - name: traefik.enabled
        value: "true"
      - name: server.replicaCount
        value: "1"
      - name: cassandra.enabled
        value: "false"
      - name: cassandra.config.cluster_size
        value: "1"
      - name: server.config.persistence.default.sql.user
        value: postgres
      - name: server.config.persistence.default.sql.password
        value: postgres
      - name: server.config.persistence.visibility.sql.user
        value: postgres
      - name: server.config.persistence.visibility.sql.password
        value: postgres
      - name: server.config.persistence.default.sql.host
        value: ar2-postgres-dbz-postgresql.ar2
      - name: server.config.persistence.visibility.sql.host
        value: ar2-postgres-dbz-postgresql.ar2
      # - name: web.ingress.enabled
      #   value: "true"
      values: |
        web: 
          ingress:
            enabled: false
            hosts:
              - "wf-admin.qa.agilopshub.com"

        traefik:
          enabled: false
          name: temporal-web-http
          annotations:
            linkerd.io/inject: disabled
          entryPoints:
            - web
          routes:
            - match: Host(`wf-admin.qa.agilopshub.com`)
              middlewares:
                - name: common-wf-redirectscheme
                  namespace: ar2
              services:
                - namespace: common-wf
                  name: temporalio-web
                  port: 8080
                  scheme: http
      valueFiles: 
      - values/values.postgresql.yaml