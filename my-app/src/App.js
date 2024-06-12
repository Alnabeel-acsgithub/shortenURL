// import axios from 'axios';
import QRCode from 'qrcode.react'; // Import the QR code component
import React, { useEffect, useState } from 'react';
import './App.css';
import { databases } from './appWrite';

function UrlShortener() {
    const [originalUrl, setOriginalUrl] = useState('');
    const [shortenedUrl, setShortenedUrl] = useState('');
    const [customAlias, setCustomAlias] = useState('');
    const BASEURL = "https://666945b1930917696e66.appwrite.global";

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // const response = await axios.option(`${BASEURL}/?url=${originalUrl}`, { originalUrl });
            customAlias?  setShortenedUrl(customAlias) :setShortenedUrl(generateShortUrl(originalUrl))
            console.log(shortenedUrl);
        } catch (error) {
            console.error(error);
        }
    };

    const urlMap = new Map();

    const generateShortUrl = (originalUrl) => {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      let shortUrl = '';
      for (let i = 0; i < 6; i++) {
        shortUrl += chars.charAt(Math.floor(Math.random() * chars.length));
      }
    
      // Store the mapping
      urlMap.set(shortUrl, originalUrl);
      return shortUrl;
    };

const getOriginalUrl = (shortUrl) => {
  return urlMap.get(shortUrl);
};

    useEffect(() => {
      const fetchUrls = async () => {
          try {
              const response = await databases.listDocuments('66692e77001942e4a1d1', '66692f6e001d5b11aff6');
              // setUrls(response.documents);
              console.log(response.documents);
          } catch (err) {
            console.log(err);
              // setError(err.message);
          } finally {
              // setLoading(false);
          }
      };

      fetchUrls();
  }, []);
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
                     <input
                        type="text"
                        value={customAlias}
                        onChange={(e) => setCustomAlias(e.target.value)}
                        placeholder="Enter custom alias (optional)"
                        className="alias-input"
                    />
                    
                    <button type="submit" className="shorten-button">Shorten URL</button>
                </form>{shortenedUrl && (
                    <div className="result-container">
                        <p className="shortened-url">Shortened URL: <a href={originalUrl} target="_blank" rel="noopener noreferrer">{shortenedUrl}</a></p>
                        <QRCode value={originalUrl} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default UrlShortener;
