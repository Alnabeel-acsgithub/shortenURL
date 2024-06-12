// import axios from 'axios';
import React, { useState } from 'react';
import QRCode from 'qrcode.react'; // Import the QR code component
import './App.css';

function UrlShortener() {
    const [originalUrl, setOriginalUrl] = useState('');
    const [shortenedUrl, setShortenedUrl] = useState('');
    const BASEURL = "https://666945b1930917696e66.appwrite.global";

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // const response = await axios.post(`${BASEURL}/?url=${originalUrl}`, { originalUrl });
            setShortenedUrl(originalUrl);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="url-shortener-container">
            <div className="url-shortener-card">
                <h1>Linkify</h1>
                <p>Enter a URL to shorten it, and optionally provide a custom alias.</p>
                <form onSubmit={handleSubmit} className="url-shortener-form">
                    <input
                        type="text"
                        value={originalUrl}
                        onChange={(e) => {
                            console.log(e);
                            setOriginalUrl(e.target.value);
                        }}
                        placeholder="Enter original URL"
                        required
                        className="url-input"
                    />
                    <button type="submit" className="shorten-button">Shorten URL</button>
                </form>{shortenedUrl && (
                    <div className="result-container">
                        <p className="shortened-url">Shortened URL: <a href={`http://localhost:5000/${shortenedUrl.replace('www.', '').replace('.com', '')}`} target="_blank" rel="noopener noreferrer">{shortenedUrl}</a></p>
                        <QRCode value={shortenedUrl} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default UrlShortener;
