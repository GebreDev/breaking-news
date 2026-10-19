Breaking News

Breaking News is a bilingual news publishing platform with a public website and an administration dashboard. Readers can browse articles by category in English or Amharic and follow breaking-news updates, while administrators manage articles, categories, breaking news, media uploads, site settings, and users. The platform also includes admin authentication and audit logs.

The frontend is built with React, Vite, and React Router. The backend uses Node.js and Express, with PostgreSQL as the database.

Getting Started

Install Node.js, npm, and PostgreSQL, then create a PostgreSQL database and apply the schema from the project root with psql -U <database-user> -d <database-name> -f backend/src/db/schema.sql.

Next, create a backend/.env file containing PORT, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME, and JWT_SECRET, along with ADMIN_FULL_NAME, ADMIN_EMAIL, and ADMIN_PASSWORD for the first administrator. For example, use PORT=5000 and DB_HOST=localhost, and replace the secret and password with secure values.

From the backend directory, run npm install, create the initial admin account with node src/db/createAdmin.js, and start the API with npm run dev.

In a separate terminal, go to the frontend directory, run npm install, and start the app with npm run dev. The frontend connects to http://localhost:5000 by default; to use a different API address, set VITE_API_URL in frontend/.env.

Production Build

To build the frontend for production, run npm run build from the frontend directory.
