# JS-API Backend

My first Node.js backend project using 3-layer architecture (MVC) and PostgreSQL. Built with Express, Prisma ORM, and structured in a modular API design.

## 🛠 Technologies

- **Node.js** + **Express**
- **Prisma ORM**
- **PostgreSQL**
- **MVC + 3-layer architecture**
- **REST API**

## Getting started

### 1. Clone the repo
```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment
Vytvoř `.env` soubor:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/db_name?schema=public"
```

### 4. Prisma setup
```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 5. Start the server
```bash
node app.js
```

Server poběží na `http://localhost:3000`

## API endpoints

| Method | Route          | Description        |
|--------|----------------|--------------------|
| GET    | `/users`       | Get all users      |
| POST   | `/users`       | Create new user    |

---

### Notes

- The `User` table must be referenced as `"User"` in raw SQL, because it's a reserved keyword.
- All API logic is separated by responsibility into controller, service, and repository.

---

