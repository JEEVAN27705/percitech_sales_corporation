const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Gmail transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

// Contact API
app.post("/api/contact", async (req, res) => {
  const {
    name,
    email,
    phone,
    message,
    intent,
    slotDate,
    slotTime,
    trialDate,
    trialTime,
  } = req.body;

  const html = `
    <h2>New Contact Form Submission</h2>
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Phone:</b> ${phone}</p>
    <p><b>Intent:</b> ${intent}</p>
    ${
      intent === "schedule_call"
        ? `<p><b>Call Date:</b> ${slotDate}</p><p><b>Call Time:</b> ${slotTime}</p>`
        : ""
    }
    ${
      intent === "request_trial"
        ? `<p><b>Trial Date:</b> ${trialDate}</p><p><b>Trial Time:</b> ${trialTime}</p>`
        : ""
    }
    <p><b>Message:</b></p>
    <p>${message}</p>
  `;

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: "New Contact Form Details",
      html,
    });

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
