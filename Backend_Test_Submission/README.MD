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

# Server Configuration
PORT=3000

# Database Configuration
MONGO_DB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/database_name

# Integration (Required for hiring test)
CLIENT_ID=your__client_id
CLIENT_SECRET=your__client_secret
ACCESS_CODE=your__access_code
EMAIL=your_registered_email
NAME=YourName
ROLL_NO=your_roll_number
AUTH_TOKEN=your_jwt_bearer_token
📡 API Reference
Create Short URL
POST /api/v1/url/shorturls

Creates a new shortened URL with optional customization.

Request Body:

{
  "url": "https://example.com/some/very/long/path",
  "validity": 30,           // Optional: validity in days
  "shortcode": "custom123"  // Optional: custom shortcode
}
Response (201 Created):

{
  "shortLink": "http://localhost:3000/custom123",
  "expiry": "2025-08-13T14:30:00.000Z"
}
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

{
  "originalUrl": "https://example.com/some/very/long/path",
  "createdAt": "2025-07-14T12:00:00.000Z",
  "expiry": "2025-08-13T12:00:00.000Z",
  "totalClicks": 15,
  "clickAnalytics": [
    {
      "timestamp": "2025-07-14T12:30:00.000Z",
      "referrer": "https://google.com",
      "location": "India"
    }
  ]
}
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



