# 🔗URL Shortener API

A simple and efficient **backend API** built with **Node.js** and **Express.js** to shorten URLs and manage redirections. This backend supports custom aliases, automatic code generation, and API-based interaction for integration with frontend clients.

---

## 📌 Features

- ✅ Shortens long URLs into compact, shareable short URLs
- ✅ Allows custom short codes (aliases)
- ✅ Handles redirection from short URL to original
- ✅ Stores URLs in MongoDB with creation timestamp
- ✅ Edge case handling: duplicates, invalid URLs, empty input
- ✅ Tested using **Postman** for all API endpoints
- ✅ Easily deployable on Render (CI/CD integrated with GitHub)

---

## 🔧 Technologies Used

| Category     | Tools/Technologies                   |
|--------------|--------------------------------------|
| **Language** | JavaScript (Node.js)                 |
| **Framework**| Express.js                           |
| **Database** | MongoDB with Mongoose                |
| **Testing**  | Postman (manual API testing)         |
| **Tools**    | Git, GitHub, Render, dotenv          |
| **Deployment** | Render (CI/CD from GitHub)         |

---

🔐 Environment Configuration
Create a .env file in the root directory:

<img width="1220" height="380" alt="Image" src="https://github.com/user-attachments/assets/df9d5d1b-7842-41ef-8dbc-5f4ec750f9d7" />

📡 API Reference
Create Short URL
POST /api/v1/url/shorturls

Creates a new shortened URL with optional customization.

Request Body:


