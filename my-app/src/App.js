import axios from 'axios';
import React, { useState } from 'react';

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
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={originalUrl}
                    onChange={(e) => setOriginalUrl(e.target.value)}
                    placeholder="Enter original URL"
                    required
                />
                <input
                    type="text"
                    value={customAlias}
                    onChange={(e) => setCustomAlias(e.target.value)}
                    placeholder="Enter custom alias (optional)"
                />
                <button type="submit">Shorten URL</button>
            </form>
            {shortenedUrl && <p>Shortened URL: {shortenedUrl}</p>}
        </div>
    );
}

export default UrlShortener;
