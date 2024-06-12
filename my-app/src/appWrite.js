// src/appwriteConfig.js

import { Client, Databases } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('66686b30000336ef6b28'); // Your project ID

const databases = new Databases(client);

export { client, databases };
