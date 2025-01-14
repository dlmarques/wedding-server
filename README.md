# Casamento Server

This is a simple server application created for managing wedding RSVPs. The primary purpose of this server is to receive POST requests with RSVP data and send the information to an email address using Nodemailer.

## Features

- Receive RSVP data via POST requests
- Send RSVP data to a specified email address using Nodemailer

## Usage

This server is intended for personal use only and is not designed for public deployment or use.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/casamento-server.git
    ```
2. Install dependencies:
    ```sh
    cd casamento-server
    npm install
    ```

## Configuration

1. Create a `.env` file in the root directory and add your email configuration:

    ```
    EMAIL=your-email@example.com
    PASSWORD=your-email-password
    ```

## Running the Server

Start the server:
```sh
npm start
```

## License

This project is licensed under the MIT License.