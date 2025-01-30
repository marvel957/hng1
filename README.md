# HNG12 Public API

## Project Overview

This is a simple public API developed for HNG12, returning essential details in JSON format, including:

- The registered email address.
- The current datetime in ISO 8601 format (UTC).
- The GitHub repository URL containing the project code.

The API is built using **Node.js with Express.js** and deployed for public access.

## Technology Stack

- **Backend:** Node.js, Express.js
- **Deployment:** Heroku (or Render/Vercel)
- **Version Control:** GitHub
- **CORS Handling:** Enabled with Express CORS middleware

---

## Setup Instructions

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [Git](https://git-scm.com/)

### Installation & Running Locally

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/hng12-api.git
   cd hng12-api
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the server:**

   ```bash
   node index.js
   ```

4. **Test the API locally:**
   Open your browser or use Postman to visit:
   ```
   http://localhost:3000/
   ```

---

## API Documentation

### Base URL (Deployed API Endpoint)

```
https://your-deployed-url.com/
```

### Endpoint:

#### **GET /**

Returns essential details in JSON format.

#### **Request Format:**

No request parameters required.

#### **Response Format (`200 OK`):**

```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/hng12-api"
}
```

### Example Usage

#### **Using `curl` in Terminal:**

```bash
curl -X GET https://your-deployed-url.com/
```

#### **Using JavaScript (Fetch API):**

```js
fetch("https://your-deployed-url.com/")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

---

## Deployment

The API is deployed on **Heroku/Render/Vercel** and is publicly accessible.

- **Live URL:** [https://your-deployed-url.com/](https://your-deployed-url.com/)
- **Response Time:** < 500ms

---

## Related Link

Interested in **Node.js developers**? Visit:
👉 [https://hng.tech/hire/nodejs-developers](https://hng.tech/hire/nodejs-developers)

---

### License

This project is open-source and available under the MIT License.

---

### Author

Developed by **[Your Name]**
