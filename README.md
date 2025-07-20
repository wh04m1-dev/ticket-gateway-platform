```md

# 🎟️ Ticket Gateway Platform

## 1. Project Overview

The **Ticket Gateway Platform** is a modern, secure, and scalable event ticketing solution optimized for both mobile and web platforms. It supports multiple user roles—**End Users, Event Organizers, and Admins**—enabling seamless event discovery, ticket booking, secure payment processing, and centralized administration.

---

## 2. Technology Stack

| Layer             | Technology                                     |
| ----------------- | ---------------------------------------------- |
| Mobile Frontend   | Flutter                                        |
| Web Frontend      | Next.js (TypeScript + Tailwind CSS)            |
| Backend           | Spring Boot Microservices (REST APIs)          |
| Authentication    | Keycloak (OAuth2 / OpenID Connect) + reCAPTCHA |
| Containerization  | Docker                                         |
| Orchestration     | Kubernetes (Contabo VPS)                       |
| Messaging         | RabbitMQ                                       |
| Database          | PostgreSQL                                     |
| API Gateway       | Spring Cloud Gateway                           |
| CI/CD             | Jenkins + ArgoCD (GitOps)                      |
| Monitoring        | Prometheus, Grafana, Loki                      |
| Security Scanning | Trivy, OWASP Dependency-Check, OWASP ZAP       |
| Code Quality      | SonarQube                                      |
| Container UI      | Portainer                                      |
| Notification      | Telegram Bot (CI/CD Alerts)                    |

---

## 3. System Architecture

### 3.1 Microservices Design

- Backend comprises domain-driven **Spring Boot microservices** communicating via REST.
- Services are registered with **Eureka Service Discovery** and accessed via a central **API Gateway**.
- Microservices are structured by business domain:
  - **User Service**
  - **Event Service**
  - **Booking Service**
  - **Payment Service**
  - **Notification Service**
  - **Admin Service**

### 3.2 Communication Patterns

- **Synchronous (REST):** Real-time interactions (e.g., Booking → Payment confirmation).
- **Asynchronous (RabbitMQ):** Decoupled event-driven flows (e.g., ticket confirmation → Notification).

### 3.3 Core Request Flow

1. User logs in via Keycloak → JWT issued.
2. Requests pass through API Gateway with token validation.
3. Booking Service reserves tickets and emits events.
4. Notification Service listens and dispatches email/SMS alerts.
5. Payment Service confirms transactions via third-party gateway.

---

## 4. Infrastructure & Deployment

- **Kubernetes:** High-availability cluster on Contabo VPS (≥3 nodes).
- **Ingress:** NGINX with Cert-Manager (automated HTTPS via Let's Encrypt).
- **Stateful Services:** PostgreSQL and Keycloak with persistent volumes (StatefulSets).
- **Messaging:** RabbitMQ runs as a Kubernetes cluster.
- **Helm Charts:** Package all services with environment-specific configs.
- **CI/CD:**
  - **Jenkins** builds, tests, and pushes Docker images.
  - **ArgoCD** deploys services using GitOps workflows.
- **Namespaces:** Logical separation for `dev`, `staging`, and `prod`.
- **Portainer:** Web UI for managing containers and K8s resources.

---

## 5. Security & Compliance

- **Authentication & Authorization:** Centralized via Keycloak (OAuth2/OIDC).
- **Bot Protection:** reCAPTCHA on login and registration.
- **JWT:** Verified at both Gateway and service layers.
- **RBAC:** Enforced across microservices.
- **Network Security:** Kubernetes Network Policies limit inter-pod access.
- **TLS Everywhere:** Managed by Cert-Manager, covers internal and external traffic.
- **Security Scanning:**
  - **Trivy** – Docker image CVEs
  - **OWASP Dependency-Check** – Library vulnerabilities
  - **OWASP ZAP** – Runtime vulnerability testing (DAST)

---

## 6. Scalability & Reliability

- **Horizontal Scaling:** Stateless microservices with Kubernetes HPA.
- **Database High Availability:** Replication + scheduled backups.
- **Health Checks:** Liveness/readiness probes for all pods.
- **Pod Disruption Budgets (PDB):** Safe rolling updates and high uptime.
- **Deployment Strategies:** Canary and blue-green deployments for risk mitigation.

---

## 7. CI/CD Pipeline Overview

### 🔧 Build & Deploy Steps

- **Flutter App:**
  - Build → Test → Generate APK → Deploy to Play Store.
- **Next.js App:**
  - Lint → Test → Build → Deploy via Vercel → Kubernetes.
- **Microservices (Spring Boot):**
  - Compile → Test → Dockerize → Deploy via Helm & ArgoCD.

### 🔐 DevSecOps Pipeline

| Stage       | Tool                   | Purpose                                   |
| ----------- | ---------------------- | ----------------------------------------- |
| Build       | SonarQube              | Code quality and security review          |
| Build       | OWASP Dependency-Check | Scan Java/Node libraries for CVEs         |
| Post-build  | Trivy                  | Docker image vulnerability scan           |
| Post-deploy | OWASP ZAP              | Dynamic app security testing (DAST)       |
| Notify      | Telegram Bot           | Real-time CI/CD alerts and status updates |

- **Secrets Management:** Kubernetes Secrets + Jenkins credentials (Vault integration planned)

---

## 8. Monitoring & Observability

- **Metrics:** Collected via Prometheus, visualized in Grafana (CPU, memory, latency, etc.)
- **Logging:** Loki centralizes logs for full-text search and debugging.
- **Alerting:** Alertmanager triggers based on thresholds (via email, Telegram, Slack).
- **Tracing (Planned):** Integrate **Jaeger** or **Zipkin** for distributed tracing.

---

## 9. High-Level Architecture Diagram (Text-Based)
```

\[User Devices: Flutter, Next.js]
|
v
\[API Gateway (Spring Cloud Gateway)] -- (JWT Validation)
|
v
+-------------------------------------------------------------+
\| Microservices |
\| |
\| - User Service |
\| - Event Service |
\| - Booking Service <-- REST --> Payment Service |
\| | |
\| +--> \[RabbitMQ] <--+ |
\| | | |
\| Notification Service | |
+-------------------------------------------------------------+

\[External Tools & Services]

- Keycloak (Auth)
- PostgreSQL
- RabbitMQ
- SonarQube, Trivy, OWASP tools (Security)
- Telegram Bot (Alerts)
- Portainer (K8s & Docker UI)

```

---

## 10. DevSecOps Toolchain Summary

| Tool         | Purpose                                    | CI/CD Phase |
| ------------ | ------------------------------------------ | ----------- |
| reCAPTCHA    | Prevent bots on frontend forms             | Runtime     |
| Portainer    | Manage Docker/Kubernetes containers via UI | Infra Ops   |
| SonarQube    | Analyze code quality & security            | Build       |
| Trivy        | Docker image vulnerability scanning        | Post-build  |
| OWASP DC     | Dependency vulnerability scanner           | Build       |
| OWASP ZAP    | Dynamic runtime vulnerability testing      | Post-deploy |
| Telegram Bot | Notify about CI/CD status, security alerts | Any Stage   |

---

## 11. Future Enhancements

- Add distributed tracing with Jaeger or Zipkin
- Integrate HashiCorp Vault for secure secrets management
- Implement K6 for load and performance testing
- Enable Audit Logging for Admin and Booking actions
- Set up Sentry for full-stack error monitoring

```

---



{
  "id": "evt-001",
  "slug": "tech-conference-2025",
  "status": "published",
  "visibility": "public",
  "priority": 1,
  "language": "en",
  "localizations": {
    "km": {
      "title": "សន្និសីទបច្ចេកវិទ្យា ២០២៥",
      "summary": "ព្រឹត្តិការណ៍ ២ ថ្ងៃអំពីបច្ចេកវិទ្យា និងការច្នៃប្រឌិត",
      "description": "សូមចូលរួមសន្និសីទបច្ចេកវិទ្យាដែលរួមមានអ្នកនិយាយថ្នាក់ជាតិ..."
    }
  },

  "title": "Tech Conference 2025",
  "summary": "A 2-day conference showcasing emerging tech, innovation, and startups.",
  "description": "Join us for Cambodia’s largest tech event with speakers, exhibitors, and networking opportunities.",

  "category": {
    "id": "cat-tech",
    "name": "Technology"
  },
  "tags": ["tech", "conference", "innovation", "startups"],

  "venue": {
    "type": "physical",
    "name": "Diamond Island Convention Center",
    "address": "Koh Pich, Phnom Penh, Cambodia",
    "city": "Phnom Penh",
    "latitude": 11.559056,
    "longitude": 104.928209,
    "online_url": null
  },

  "datetime": {
    "timezone": "Asia/Phnom_Penh",
    "start": "2025-11-01T09:00:00+07:00",
    "end": "2025-11-02T17:00:00+07:00",
    "duration_minutes": 960,
    "booking_start": "2025-08-01T00:00:00+07:00",
    "booking_end": "2025-10-30T23:59:59+07:00"
  },

  "ticketing": {
    "max_tickets_per_user": 5,
    "total_capacity": 800,
    "tickets_sold": 0,
    "types": [
      {
        "id": "early-bird",
        "name": "Early Bird",
        "price": 20.0,
        "currency": "USD",
        "quantity": 200,
        "benefits": ["Access to all sessions", "Free swag bag"],
        "refundable": true,
        "available_from": "2025-08-01T00:00:00+07:00",
        "available_until": "2025-09-15T23:59:00+07:00"
      },
      {
        "id": "standard",
        "name": "Standard",
        "price": 25.0,
        "currency": "USD",
        "quantity": 500,
        "benefits": ["Access to all sessions"],
        "refundable": false,
        "available_from": "2025-09-16T00:00:00+07:00",
        "available_until": "2025-10-30T23:59:00+07:00"
      },
      {
        "id": "vip",
        "name": "VIP",
        "price": 100.0,
        "currency": "USD",
        "quantity": 100,
        "benefits": ["Front row seat", "Lunch & gifts", "VIP networking session"],
        "refundable": true,
        "available_from": "2025-08-01T00:00:00+07:00",
        "available_until": "2025-10-30T23:59:00+07:00"
      }
    ]
  },

  "media": {
    "banner": "https://cdn.ticketgateway.io/events/evt-001/banner.jpg",
    "gallery": [
      "https://cdn.ticketgateway.io/events/evt-001/gallery1.jpg",
      "https://cdn.ticketgateway.io/events/evt-001/gallery2.jpg"
    ],
    "video": "https://youtube.com/watch?v=xyz123"
  },

  "organizer": {
    "id": "org-009",
    "name": "Cambodia Tech Association",
    "logo": "https://cdn.ticketgateway.io/orgs/org-009/logo.png",
    "contact_email": "info@techcambodia.org",
    "contact_phone": "+85512345678",
    "website": "https://techcambodia.org"
  },

  "analytics": {
    "views": 0,
    "clicks": 0,
    "shares": {
      "facebook": 0,
      "telegram": 0,
      "twitter": 0
    },
    "rating": {
      "average": null,
      "count": 0
    }
  },

  "audit": {
    "created_at": "2025-07-20T12:00:00+07:00",
    "updated_at": "2025-07-20T12:00:00+07:00",
    "created_by": "admin-001",
    "updated_by": "admin-001"
  },

  "security": {
    "checkin_method": "qr_code",
    "access_control": "jwt_rbac",
    "terms_and_conditions": "https://ticketgateway.io/events/evt-001/terms"
  }
}

