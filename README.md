# Classify Number API 🚀

A simple REST API built with **Express.js** that takes a number and returns its mathematical properties, along with a fun fact retrieved from the Numbers API.

---

## Features

- ✅ Determines if a number is **prime**, **perfect**, or **Armstrong**
- ✅ Classifies the number as **odd** or **even**
- ✅ Calculates the **sum of its digits**
- ✅ Fetches a **fun fact** about the number from the Numbers API
- ✅ Handles **invalid inputs** gracefully
- ✅ Supports **CORS (Cross-Origin Resource Sharing)**
- ✅ Returns **JSON responses**

---

## API Endpoints

### 1️⃣ Classify a Number

📌 **Endpoint:**

```
GET /api/classify-number?number=<integer>
```

📌 **Request Parameters:**
| Parameter | Type | Required | Description |
|-----------|--------|----------|---------------------------------|
| `number` | Integer | ✅ Yes | The number to classify |

📌 **Successful Response (200 OK)**  
Example for **371**:

```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

📌 **Invalid Input Response (400 Bad Request)**  
Example for `"alphabet"`:

```json
{
  "number": "alphabet",
  "error": true
}
```

---

## Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/yourusername/classify-number-api.git
cd classify-number-api
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Create a `.env` File (Optional)

```sh
PORT=5000
```

### 4️⃣ Run the Server

```sh
node server.js
```

✅ Server runs on: `http://localhost:5000`

---

## Deployment

To deploy your API, use platforms like:

- [Render](https://render.com/)
- [Railway](https://railway.app/)
- [Vercel](https://vercel.com/)

---

## Tech Stack

🚀 **Backend:** Node.js, Express.js  
📡 **API Requests:** Axios  
🌍 **Deployment:** Any cloud hosting provider

---

## License

This project is **MIT Licensed**. Feel free to use and modify it.

---

## Contributors

👤 **Your Name** (GitHub: [@yourusername](https://github.com/yourusername))

---

🔥 **Happy Coding!** 🚀
