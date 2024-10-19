const express = require('express');
const twilio = require('twilio');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new twilio(accountSid, authToken);

app.post('/send-sms', (req, res) => {
    console.log('Request Body:', req.body);
    const { to, location } = req.body;

    if (!to || !location) {
        return res.status(400).json({ success: false, error: 'Phone number and location are required.' });
    }

    const message = `Help needed! Current location: ${location}`;

    client.messages.create({
        body: message,
        to: to,
        from: process.env.TWILIO_PHONE_NUMBER
    })
    .then(message => {
        console.log(`Message sent: ${message.sid}`);
        res.json({ success: true, sid: message.sid });
    })
    .catch(error => {
        console.error('Error sending message:', error);
        res.status(500).json({ success: false, error: error.message });
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'sos.html'));
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
