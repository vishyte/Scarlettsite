import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

console.log('SMTP env loaded:', {
  GMAIL_USER: process.env.GMAIL_USER ? 'set' : 'missing',
  GMAIL_PASS: process.env.GMAIL_PASS ? 'set' : 'missing',
  RECEIVER_EMAIL: process.env.RECEIVER_EMAIL ? 'set' : 'missing',
});

const app = express();
app.use(cors());
app.use(express.json());

const { GMAIL_USER, GMAIL_PASS, RECEIVER_EMAIL = GMAIL_USER } = process.env;

const transporter = GMAIL_USER && GMAIL_PASS
  ? nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS,
      },
    })
  : null;

if (transporter) {
  transporter.verify().then(() => {
    console.log('SMTP authentication successful.');
  }).catch((err) => {
    console.error('SMTP authentication failed:', err);
  });
}

app.post('/api/rsvp', async (req, res) => {
  if (!transporter) {
    return res.status(500).json({ error: 'SMTP is not configured. Please set GMAIL_USER and GMAIL_PASS.' });
  }

  const { name, email, phone, attendance, guests, dietaryRestrictions, message } = req.body;

  if (!name || !email || !attendance) {
    return res.status(400).json({ error: 'Name, email, and attendance are required.' });
  }

  const emailBody = `New RSVP submission from Scarlett Baptism Site:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nAttendance: ${attendance}\nGuests: ${guests || 'N/A'}\nDietary Restrictions: ${dietaryRestrictions || 'None'}\nMessage: ${message || 'None'}\n`;

  try {
    await transporter.sendMail({
      from: `"Scarlett Baptism Site" <${GMAIL_USER}>`,
      to: RECEIVER_EMAIL,
      replyTo: email,
      subject: 'Scarlett Baptism RSVP',
      text: emailBody,
    });

    return res.status(200).json({ success: true });
  } catch (sendError) {
    console.error('RSVP email send failed:', sendError);
    return res.status(500).json({ error: 'Failed to send RSVP. Please try again later.', detail: sendError.message });
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`SMTP server running on http://localhost:${port}`);
});
