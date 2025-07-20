# 🎟️ Ticket Gateway Platform

## 1. Project Overview

The Ticket Gateway Platform is a robust, secure, and scalable event ticketing solution designed for seamless user experiences across mobile and web. It supports multiple user roles (End Users, Organizers, Admins) to enable event discovery, ticket booking, payment processing, and comprehensive administration.

---

## 2. Technology Stack

| Layer            | Technology                            |
| ---------------- | ------------------------------------- |
| Mobile Frontend  | Flutter                               |
| Web Frontend     | Next.js (TypeScript + Tailwind CSS)   |
| Backend          | Spring Boot Microservices (REST APIs) |
| Authentication   | Keycloak (OAuth2/OpenID Connect)      |
| Containerization | Docker                                |
| Orchestration    | Kubernetes (Contabo VPS)              |
| Messaging        | RabbitMQ                              |
| Database         | PostgreSQL                            |
| API Gateway      | Spring Cloud Gateway                  |
| CI/CD            | Jenkins + ArgoCD (GitOps)             |
| Monitoring       | Prometheus, Grafana, Loki             |

---

## 3. System Architecture

### 3.1 Microservices Design

- Backend is composed of loosely coupled Spring Boot microservices communicating primarily via REST APIs.
- Services register with Eureka Service Discovery and are accessed through a central API Gateway.
- Each microservice encapsulates a business domain: User, Event, Booking, Payment, Notification, Admin.

### 3.2 Communication Patterns

- **Synchronous:** RESTful API calls for real-time operations (e.g., Booking → Payment).
- **Asynchronous:** RabbitMQ facilitates event-driven communication, decoupling services and enabling background processing (e.g., Notifications on ticket booking).

### 3.3 Key Flows

- User requests routed through API Gateway with JWT-based authentication.
- Booking Service handles ticket reservations and publishes events.
- Notification Service consumes events asynchronously to send emails/SMS.
- Payment Service integrates external payment gateways and confirms transactions synchronously.

---

## 4. Infrastructure & Deployment

- **Kubernetes Cluster:** Provisioned on Contabo VPS with high availability (minimum 3 nodes).
- **Ingress Controller:** NGINX with automated TLS certificates managed by Cert-Manager.
- **Stateful Services:** PostgreSQL and Keycloak deployed as StatefulSets with persistent storage.
- **Messaging:** RabbitMQ deployed as a cluster inside Kubernetes.
- **Deployment:** Helm charts for microservices packaged with environment-specific configurations.
- **CI/CD:** Jenkins pipelines build, test, and publish Docker images; ArgoCD manages GitOps-based deployments.
- **Namespaces:** Segregation for `dev`, `staging`, and `prod` environments.

---

## 5. Security & Compliance

- Centralized authentication and authorization using Keycloak with OAuth2/OpenID Connect.
- Secure API access via JWT tokens propagated through the Gateway and validated by services.
- Role-Based Access Control (RBAC) enforced across all services.
- Kubernetes Network Policies enforce pod-to-pod communication restrictions.
- TLS encryption on ingress and inter-service communication.
- Regular security audits and vulnerability scanning integrated into CI pipelines.

---

## 6. Scalability & Reliability

- Stateless microservices enable efficient horizontal scaling with Kubernetes Horizontal Pod Autoscalers.
- Database replication and backup strategies ensure data durability and availability.
- Pod health monitored through readiness and liveness probes; Pod Disruption Budgets prevent downtime during upgrades.
- Canary and blue-green deployment strategies implemented for zero downtime rollouts.

---

## 7. CI/CD Pipeline Highlights

- **Flutter App:** Automated build, test, APK artifact generation, and optional deployment to Play Store/TestFlight.
- **Next.js Web App:** Automated linting, testing, building, and deployment via Vercel or Kubernetes.
- **Spring Boot Microservices:** Automated build, test, Docker image creation, and deployment to Kubernetes using Helm and ArgoCD.
- Automated rollback on failure and notifications via Slack/email integrated into pipelines.
- Secrets managed securely through Jenkins credentials, Kubernetes Secrets, or Vault.

---

## 8. Monitoring & Observability

- **Metrics:** Collected with Prometheus; visualized using Grafana dashboards.
- **Logging:** Centralized log aggregation using Loki, supporting query and analysis.
- **Alerting:** Configured with Alertmanager to notify on threshold breaches or failures.
- **Tracing (Future):** Potential integration with Jaeger or Zipkin for distributed tracing.

---

## 9. Summary Architecture Diagram (Text-Based)

```
[User Devices (Flutter, Next.js)]
          ↓
  [API Gateway (Spring Cloud Gateway)] -- JWT Validation
          ↓
+--------------------------------------------+
| Microservices:                             |
| - User Service                            |
| - Event Service                           |
| - Booking Service <---- REST Sync ----> Payment Service |
|      ↓                                        |
|      +---> Publish Events ---> RabbitMQ <---+
|                          ↑                     |
|               Notification Service            |
+--------------------------------------------+
```
