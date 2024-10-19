const twilio = require('twilio');
const accountSid = 'ACdd2641795bc1d9603e2b2b78127e12bc'; 
const authToken = '7f91cbdd8f4ae4d9bb2faf45e95671e4'; 

const client = new twilio(accountSid, authToken);

function sendSMS(to, location) {
    const message = `Help needed! Current location: ${location}`;
    client.messages.create({
        body: message,
        to: '+918800242566', 
        from: '+13344907896' 
    })
    .then((message) => console.log(`Message sent to ${to}: ${message.sid}`))
    .catch((error) => console.error(error));
}

const emergencyContacts = [
    { name: 'Mom', number: '8800242566' },
    { name: 'Friend', number: '0987654321' }
];

const location = 'Sample Location'; 
emergencyContacts.forEach(contact => sendSMS(contact.number, location));
