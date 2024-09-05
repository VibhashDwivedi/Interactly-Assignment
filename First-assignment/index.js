require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args)); 

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

const CONTACTS_API_URL = process.env.CONTACTS_API_URL;
const API_KEY = process.env.API_KEY;
const port = 8000;

if (!CONTACTS_API_URL || !API_KEY) {
    console.error('Missing CONTACTS_API_URL or API_KEY environment variable');
    process.exit(1); // Exit the application if environment variables are missing
}

// Create a contact
app.post('/createContact', async (req, res) => {
    const { first_name, last_name, email, mobile_number, data_store } = req.body;
    console.log(`Received request to create contact: ${first_name} ${last_name}, ${email}, ${mobile_number} in ${data_store}`);
    
    if (data_store === 'CRM') {
        const url = `${CONTACTS_API_URL}`;
        console.log(`Creating contact in CRM with URL: ${url}`);
        
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': `Token token=${API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ first_name, last_name, email, mobile_number })
            });
            const data = await response.json();
            console.log(`Received response from CRM:`, data);
            res.status(response.status).send(data);
        } catch (error) {
            console.error('Error creating contact:', error);
            res.status(500).send('Internal Server Error');
        }
    } else {
        console.log('Invalid data_store value');
        res.status(400).send('Invalid data_store value');
    }
});

// Retrieve a contact
app.post('/getContact', async (req, res) => {
    const { id, data_store } = req.body;
    console.log(`Received request to get contact with ID: ${id} from ${data_store}`);
    
    if (data_store === 'CRM') {
        const url = `${CONTACTS_API_URL}/${id}`;
        console.log(`Fetching contact from CRM with URL: ${url}`);
        
        try {
            const response = await fetch(url, {
                headers: {
                    'Authorization': `Token token=${API_KEY}`
                }
            });
            const data = await response.json();
            console.log(`Received response from CRM:`, data);
            res.status(response.status).send(data);
        } catch (error) {
            console.error('Error fetching contact:', error);
            res.status(500).send('Internal Server Error');
        }
    } else {
        console.log('Invalid data_store value');
        res.status(400).send('Invalid data_store value');
    }
});

// Update a contact
app.post('/updateContact', async (req, res) => {
    const { id, email, mobile_number, data_store } = req.body;
    console.log(`Received request to update contact with ID: ${id} in ${data_store}`);
    
    if (data_store === 'CRM') {
        const url = `${CONTACTS_API_URL}/${id}`;
        console.log(`Updating contact in CRM with URL: ${url}`);
        
        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Authorization': `Token token=${API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: email, mobile_number: mobile_number })
            });
            const data = await response.json();
            console.log(`Received response from CRM:`, data);
            res.status(response.status).send(data);
        } catch (error) {
            console.error('Error updating contact:', error);
            res.status(500).send('Internal Server Error');
        }
    } else {
        console.log('Invalid data_store value');
        res.status(400).send('Invalid data_store value');
    }
});

// Delete a contact
app.post('/deleteContact', async (req, res) => {
    const { id, data_store } = req.body;
    console.log(`Received request to delete contact with ID: ${id} from ${data_store}`);
    
    if (data_store === 'CRM') {
        const url = `${CONTACTS_API_URL}/${id}`;
        console.log(`Deleting contact from CRM with URL: ${url}`);
        
        try {
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Token token=${API_KEY}`
                }
            });
            console.log(`Contact deleted from CRM with status: ${response.status}`);
            res.status(response.status).send('Contact deleted');
        } catch (error) {
            console.error('Error deleting contact:', error);
            res.status(500).send('Internal Server Error');
        }
    } else {
        console.log('Invalid data_store value');
        res.status(400).send('Invalid data_store value');
    }
});

app.listen(port, () => {
    console.log(`Express server started successfully on port ${port}`);
});