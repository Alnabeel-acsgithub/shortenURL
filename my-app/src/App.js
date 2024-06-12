import axios from 'axios';
import React, { useState } from 'react';
import './App.css';

function UrlShortener() {
    const [originalUrl, setOriginalUrl] = useState('');
    const [customAlias, setCustomAlias] = useState('');
    const [shortenedUrl, setShortenedUrl] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/shorten', { originalUrl, customAlias });
            setShortenedUrl(response.data.alias);
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
                        onChange={(e) => setOriginalUrl(e.target.value)}
                        placeholder="Enter original URL"
                        required
                        className="url-input"
                    />
                    <input
                        type="text"
                        value={customAlias}
                        onChange={(e) => setCustomAlias(e.target.value)}
                        placeholder="Enter custom alias (optional)"
                        className="alias-input"
                    />
                    <button type="submit" className="shorten-button">Shorten URL</button>
                </form>
                {shortenedUrl && <p className="shortened-url">Shortened URL: {shortenedUrl}</p>}
            </div>
        </div>
    );
}

export default UrlShortener;
