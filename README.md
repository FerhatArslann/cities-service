
# Cities Service

NestJS REST & GraphQL API for managing cities and their locations, fully containerized with Docker.

---

## 📺 Demo Video

- link

---

## Features
- NestJS (TypeScript) backend
- MySQL database (Dockerized)
- GraphQL & REST endpoints
- Modular structure: Cities & Locations
- Easy local development with Docker Compose

---

## 🚀 Quick Start


### 1. Clone the repository
```bash
git clone https://github.com/your-username/cities-service.git
cd cities-service
```

### 2. Install dependencies
```bash
npm install
# If you see vulnerabilities, you can try:
npm audit fix
# Or, if needed (use with caution):
npm audit fix --force
```

### 3. (Optional, but recommended) Install NestJS CLI globally
```bash
npm i -g @nestjs/cli
```

### 4. Setup environment variables


Create a `.env` file in the project root:
```env
DB_HOST=mysql_cities
DB_HOST_PORT=3306
DB_USER=admin
DB_PASSWORD=password
DB_DATABASE=cities_db
PORT=3000
```

### 5. Docker Setup

Ensure you have Docker & Docker Compose installed.


#### Build and run with Docker Compose
```bash
docker-compose up --build
```

#### Or run containers from Docker Desktop UI
- Open Docker Desktop
- Click **Containers** > **cities_service_app** > Start
- Click **Containers** > **mysql_cities** > Start

#### (Optional) Run the app locally without Docker
```bash
npm run start
```

<img src="/doc/screenshots/docker-desktop.png" width="600" alt="Docker Desktop Screenshot"/>

---

## 🗄️ Database Access

#### Access MySQL in the running container:
```bash
docker exec -it mysql_cities mysql -u admin -p
# Enter password: password
```

#### Example MySQL commands:
```sql
USE cities_db;
SHOW TABLES;
DESCRIBE city;
SELECT * FROM city;
```

<img src="/doc/screenshots/mysql-shell.png" width="600" alt="MySQL Shell Screenshot"/>

---

## 🧪 Testing

Run tests with:
```bash
npm run test
npm run test:e2e
npm run test:cov
```

---

## 📸 Screenshots

- App Overview: `/doc/screenshots/app-overview.png`
- Docker Desktop: `/doc/screenshots/docker-desktop.png`
- MySQL Shell: `/doc/screenshots/mysql-shell.png`

---

## License

MIT
