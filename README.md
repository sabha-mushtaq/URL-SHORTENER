## URL Shortener
A simple URL shortener built with Node.js and Express. This application allows users to create shortened URLs that redirect to the original links, along with tracking visit history.

## Features
Shorten long URLs
Redirect to the original URL when the short URL is accessed
Track visit history for each shortened URL

## Technologies Used
Node.js
Express.js
MongoDB
Mongoose


## Getting Started
Prerequisites
Node.js (v14 or higher)
MongoDB (v4.0 or higher)
## Installation
Clone the repository:



git clone https://github.com/yourusername/url-shortener.git

cd url-shortener

Install dependencies:



npm install

Connect to MongoDB:

## Ensure your MongoDB server is running. You can use the following command to start it:


mongod --dbpath /path/to/your/db

## Start the server:

node index.js

The server will be running at http://localhost:8000.

API Endpoints
POST /: Create a shortened URL
##
Request Body:

json

{
    "url": "https://example.com"
}
## 
Response:

json

{
    "id": "shortenedID"
}
GET /:shortid: Redirect to the original URL

GET /:shortid/analytics: Get analytics for the shortened URL (e.g., total clicks)

Example Usage
Create a short URL by sending a POST request to / with a JSON body containing the URL you want to shorten.

Access the shortened URL to be redirected to the original link.

Get analytics by sending a GET request to /:shortid/analytics.
