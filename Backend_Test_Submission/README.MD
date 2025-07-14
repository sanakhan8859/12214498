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

<img width="1218" height="166" alt="Image" src="https://github.com/user-attachments/assets/cea8d971-14a9-4cea-8e46-941204557458" />

Response (201 Created):

<img width="1222" height="132" alt="Image" src="https://github.com/user-attachments/assets/566da063-ebdc-40ff-ae60-137a63ba2b08" />

Error Responses:

400 Bad Request: Invalid URL or duplicate shortcode
500 Internal Server Error: Database or server error
Redirect to Original URL
GET /api/v1/url/:shortcode

Redirects to the original URL and tracks analytics.

Response:

302 Found: Successful redirect
404 Not Found: Shortcode doesn't exist
410 Gone: URL has expired
Get URL Statistics
GET /api/v1/url/shorturls/:shortcode

Retrieves comprehensive analytics for a shortened URL.

Response (200 OK):

<img width="1207" height="348" alt="Image" src="https://github.com/user-attachments/assets/4eb6139f-315f-4363-805d-720e9568fbd6" />

Features Deep Dive

Analytics Tracking

Click Counting: Real-time click tracking

Referrer Detection: Track traffic sources

Location Tracking: Geographic analytics

Timestamp Logging: Detailed access history


Security & Validation

URL Validation: Ensures valid URLs only

Shortcode Uniqueness: Prevents collisions

Expiration Handling: Automatic cleanup of expired URLs

Rate Limiting: Built-in protection against abuse

Logging & Monitoring

Request Logging: All API requests logged

Error Tracking: Comprehensive error logging

Performance Metrics: Response time tracking

Integration: Centralized log management




