const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const isPerfect = (num) => {
  let sum = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) sum += i;
  }
  return sum === num;
};

const isArmstrong = (num) => {
  const digits = num.toString().split("").map(Number);
  const power = digits.length;
  const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);
  return sum === num;
};

const digitSum = (num) => {
  return num
    .toString()
    .split("")
    .reduce((sum, digit) => sum + parseInt(digit), 0);
};
const getFunFact = async (num) => {
  try {
    const response = await axios.get(`http://numbersapi.com/${num}/math`);
    return response.data;
  } catch (error) {
    return "No fun fact available for this number.";
  }
};

app.get("/api/classify-number", async (req, res) => {
  const { number } = req.query;

  // Check if the number is a valid integer
  if (!number || isNaN(number) || !Number.isInteger(Number(number))) {
    return res.status(400).json({ number, error: true });
  }

  const num = parseInt(number);

  // Determine properties
  const prime = isPrime(num);
  const perfect = isPerfect(num);
  const armstrong = isArmstrong(num);
  const even = num % 2 === 0;
  const properties = [];
  if (armstrong) properties.push("armstrong");
  properties.push(even ? "even" : "odd");

  // Get fun fact
  const funFact = await getFunFact(num);

  // Response
  res.json({
    number: num,
    is_prime: prime,
    is_perfect: perfect,
    properties,
    digit_sum: digitSum(num),
    fun_fact: funFact,
  });
});

// Start Server
app.listen(port, () => console.log(`Server running on port ${port}`));
