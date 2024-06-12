// src/components/UrlList.js

import React, { useEffect, useState } from 'react';
import { databases } from './appWrite';

const UrlList = () => {
    const [urls, setUrls] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUrls = async () => {
            try {
                const response = await databases.listDocuments('6669405d0032e1fcb3e1', '66694076000c188eb260');
                setUrls(response.documents);
                console.log(urls);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUrls();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Shortened URLs</h1>
            <ul>
                {urls.map((url) => (
                    <li key={url.$id}>
                        <a href={url.originalUrl}>{url.name || url.shortenedUrl}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UrlList;
