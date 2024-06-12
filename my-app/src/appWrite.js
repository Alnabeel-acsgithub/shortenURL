// src/appwriteConfig.js

import { Client, Databases } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('666925b80018dc04263c'); // Your project ID

const databases = new Databases(client);

export { client, databases };
