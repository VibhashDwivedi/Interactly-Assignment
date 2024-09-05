const twilio = require('twilio');
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const myPhoneNumber = process.env.MY_PHONE_NUMBER;
const interviewLink = 'https://v.personaliz.ai/?id=9b697c1a&uid=fe141702f66c760d85ab&mode=test';

const client = new twilio(accountSid, authToken);

// Endpoint to handle the IVR call
app.post('/ivr', (req, res) => {
    const twiml = new twilio.twiml.VoiceResponse();

    twiml.say('Hello, this is a personalized IVR call.');
    twiml.play('https://VibhashDwivedi.github.io/audio/demo.mp3');
    twiml.gather({
        numDigits: 1,
        action: '/handle-key',
        method: 'POST'
    });

    res.type('text/xml');
    res.send(twiml.toString());
});

// Endpoint to handle key press
app.post('/handle-key', (req, res) => {
    const digit = req.body.Digits;
    const twiml = new twilio.twiml.VoiceResponse();

    if (digit === '1') {
        twiml.say('Thank you. You will receive a personalized interview link shortly.');
        client.messages.create({
            body: `Here is your personalized interview link: ${interviewLink}`,
            from: twilioPhoneNumber,
            to: myPhoneNumber
        }).then(message => console.log(`Message sent: ${message.sid}`));
    } else {
        twiml.say('Invalid input. Please try again.');
        twiml.redirect('/ivr');
    }

    res.type('text/xml');
    res.send(twiml.toString());
});

// Function to initiate the call
async function createCall() {
    const call = await client.calls.create({
        from: twilioPhoneNumber,
        to: myPhoneNumber,
        url: 'https://aabc-2405-201-4049-1a-9480-2103-6b2a-acba.ngrok-free.app/ivr' //  ngrok URL 
    });

    console.log(call.sid);
}

// Start the Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    createCall() 
});