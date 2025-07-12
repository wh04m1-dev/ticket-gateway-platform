I want to build and deploy a full-featured Ticket Gateway Platform project using the following technologies and architecture:

🔧 Tech Stack:

- Backend: Spring Boot Microservices
- Frontend: Next.js (Typescript and tailwind)
- Authentication: Spring Security with JWT
- API Gateway: Spring Cloud Gateway
- Service Discovery: Eureka
- Configuration: Spring Cloud Config Server (with Git)
- CI/CD: Jenkins (installed and running on my Contabo VPS)
- Docker: Containerize all services
- Kubernetes: Use K3s to manage deployment on my Contabo VPS
- SSL + Ingress: NGINX Ingress Controller with Let's Encrypt (for HTTPS)
- Database: PostgreSQL for each microservice
- Monitoring: Prometheus + Grafana
- Logging: Loki

🎫 Functional Requirements:

- User registration and login with JWT
- Role-based access: USER, ADMIN
- Event listing and event details (Event Service)
- Ticket booking and seat selection (Ticket Service)
- Order history and invoice tracking (Order Service)
- Payment handling (mock or real, via Payment Service)
- Admin panel to manage events, users, and tickets (Admin Service)
- Frontend for users and admins using Next.js

📦 Repository Structure:
ticket-gateway-platform/
├── frontend/ # Next.js app
├── api-gateway/
├── eureka-server/
├── config-server/
├── auth-service/
├── event-service/
├── ticket-service/
├── payment-service/
├── order-service/
├── admin-service/
├── docker/ # Dockerfiles
├── jenkins/ # Jenkinsfile and deployment scripts
├── k8s/ # Kubernetes YAML files
├── helm/ # Helm charts for deployment (optional)

📄 CI/CD Pipeline (Jenkins):

- Clone code from GitHub
- Run unit tests (JUnit for backend, Jest for frontend)
- Build Docker images
- Push Docker images to Docker Hub
- Deploy to Kubernetes on Contabo VPS using Helm
- Notify via Slack/email (optional)

⚙️ Deployment Target:

- Single Ubuntu VPS hosted on Contabo
- Jenkins is already installed
- Kubernetes will be installed using K3s
- Will secure the platform with HTTPS via Let's Encrypt and NGINX Ingress

✅ Please generate:

1. Dockerfiles for each Spring Boot service and the Next.js frontend
2. A Jenkinsfile for the complete CI/CD pipeline
3. Kubernetes YAML files (Deployment, Service, Ingress) for each service
4. Ingress setup with domain and SSL
5. Helm charts for easy deployment
6. Prometheus + Grafana setup for monitoring

Make sure everything is suitable for deployment on a single Contabo VPS with at least 4 CPU, 8GB RAM.

Thank you.
