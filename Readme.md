## Setup

### Clone the Repository

To get started, clone the repository and navigate to the project directory:

  ```sh
  git clone <repository-url>
  cd <repository-directory>
  ```
## Steps to Run First Task

1. Navigate to the first-assignment Directory:
    ```sh
    cd first-assignment
    ```
2. Install the necessary dependencies:
    ```sh
    npm install
    ```
3.  Create a .env file in the root directory of the project and add the following values:
     ```sh
     CONTACTS_API_URL=https://xyz1-751447553764528659.myfreshworks.com/crm/sales/api/contacts
     API_KEY=o1BW-GbHjNJ-zYAbHnBwcw
     ```
4. Start the server
    ```sh
    npm run dev
    ```
The server will run successfully on port 8000. Use Postman or any other API client to perform CRUD operations.

## Steps to Run Second Task

1. Navigate to the first-assignment Directory:
    ```sh
    cd second-assignment
    ```
2. Install the necessary dependencies:
    ```sh
    npm install
    ```
3.  Create a .env file in the root directory of the project and add the following values:
     ```sh
     TWILIO_ACCOUNT_SID
     TWILIO_AUTH_TOKEN
     TWILIO_PHONE_NUMBER
     MY_PHONE_NUMBER
     ```

4. Expose Your Local Server to the Internet Using ngrok:
   To allow Twilio to communicate with your local server, you need to expose it to the internet. You can use ngrok for this purpose.

    - Install ngrok: If you haven't installed ngrok yet, download it from ngrok.com and follow the installation instructions.

    - Start ngrok: Run ngrok to expose your local server:
    ```sh
    ngrok http 3000
    ```

    - Copy the Forwarding URL: After running the above command, ngrok will provide you with a forwarding URL that looks something like http://<ngrok-id>.ngrok.io. This URL will tunnel requests to your local server running on port 3000.

5. Start the server
    ```sh
    npm run dev
    ```
The server will run successfully on port 3000 and a call will be made.