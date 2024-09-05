## Setup

### Clone the Repository

To get started, clone the repository and navigate to the project directory:

  ```sh
  git clone <repository-url>
  cd <repository-directory>
  ```
---
# Steps to Run Task 1:

1. **Navigate to the first-assignment Directory:**
    ```sh
    cd first-assignment
    ```
2. **Install the necessary dependencies:**
    ```sh
    npm install
    ```
3.  **Create a .env file in the root directory of the project and add the following values:**
     ```sh
     CONTACTS_API_URL=https://xyz1-751447553764528659.myfreshworks.com/crm/sales/api/contacts
     API_KEY=o1BW-GbHjNJ-zYAbHnBwcw
     ```
4. **Start the server**
    ```sh
    npm run dev
    ```
The server will run successfully on port `8000`. Use Postman or any other API client to perform CRUD operations. 
- Goto `localhost:8000/createContact` to create new Contact
- Goto `localhost:8000/getContact` to get Contact details using id
- Goto `localhost:8000/updateContact` to update email and mobile number
- Goto `localhost:8000/deleteContact` to delete contact using id

### Screenshots

- `Create Contact`
  ![](https://github.com/VibhashDwivedi/Interactly-Assignment/blob/main/Screenshots/Screenshot%20(321).png?raw=true)
  
  ![](https://github.com/VibhashDwivedi/Interactly-Assignment/blob/main/Screenshots/Screenshot%20(322).png?raw=true)

- `Get Contact`
  ![](https://github.com/VibhashDwivedi/Interactly-Assignment/blob/main/Screenshots/Screenshot%20(323).png?raw=true)

  ![](https://github.com/VibhashDwivedi/Interactly-Assignment/blob/main/Screenshots/Screenshot%20(324).png?raw=true)

- `Update Contact`
  ![](https://github.com/VibhashDwivedi/Interactly-Assignment/blob/main/Screenshots/Screenshot%20(325).png?raw=true)

  ![](https://github.com/VibhashDwivedi/Interactly-Assignment/blob/main/Screenshots/Screenshot%20(326).png?raw=true)

- `Delete Contact`
  ![](https://github.com/VibhashDwivedi/Interactly-Assignment/blob/main/Screenshots/Screenshot%20(327).png?raw=true)

  ---
  

# Steps to Run Task 2:

1. **Navigate to the first-assignment Directory:**
    ```sh
    cd second-assignment
    ```
2. **Install the necessary dependencies:**
    ```sh
    npm install
    ```
3.  **Create a .env file in the root directory of the project and add the following values:**
     ```sh
     TWILIO_ACCOUNT_SID
     TWILIO_AUTH_TOKEN
     TWILIO_PHONE_NUMBER
     MY_PHONE_NUMBER
     ```

4. **Expose Your Local Server to the Internet Using ngrok:**
   To allow Twilio to communicate with our local server, wou need to expose it to the internet. We will use `ngrok` for this purpose.

    - *Install ngrok:* 
    If you haven't installed ngrok yet, download it from ngrok.com and follow the installation instructions.

    - *Start ngrok:*
    Run ngrok to expose your local server:
    ```sh
    ngrok http 3000
    ```

    - *Copy the Forwarding URL:*
     After running the above command, ngrok will provide you with a forwarding URL that looks something like `http://<ngrok-id>.ngrok.io`. This URL will tunnel requests to your local server running on port `3000`. Update this url in `createCall` function.

5. **Start the server**
    ```sh
    npm run dev
    ```
The server will run successfully on port 3000 and a call will be made.
