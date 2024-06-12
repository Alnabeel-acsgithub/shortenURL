// src/components/AnalyticsTable.js
import React, { useState } from 'react';

const AnalyticsTable = () => {
    const [data, setData] = useState([{
        $id: '1',
        shortened_url: 'https://short.url/abc123',
        click_timestamp: '2024-06-12T10:00:00Z',
        geo_location: 'New York, USA',
        device_type: 'Desktop',
        referrer: 'Google'
    },
    {
        $id: '2',
        shortened_url: 'https://short.url/def456',
        click_timestamp: '2024-06-12T11:30:00Z',
        geo_location: 'London, UK',
        device_type: 'Mobile',
        referrer: 'Twitter'
    },
    {
        $id: '3',
        shortened_url: 'https://short.url/ghi789',
        click_timestamp: '2024-06-12T14:15:00Z',
        geo_location: 'Tokyo, Japan',
        device_type: 'Tablet',
        referrer: 'Facebook'
    }]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     const loadData = async () => {
    //         try {
    //             const analyticsData = await fetchAnalyticsData();
    //             setData(analyticsData);
    //         } catch (err) {
    //             setError(err);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     loadData();
    // }, []);

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error loading data: {error.message}</p>;

    return (
        <table>
            <thead>
                <tr>
                    <th>Shortened URL</th>
                    <th>Click Timestamp</th>
                    <th>Geo Location</th>
                    <th>Device Type</th>
                    <th>Referrer</th>
                </tr>
            </thead>
            <tbody>
                {data.map((entry) => (
                    <tr key={entry.$id}>
                        <td>{entry.shortened_url}</td>
                        <td>{new Date(entry.click_timestamp).toLocaleString()}</td>
                        <td>{entry.geo_location}</td>
                        <td>{entry.device_type}</td>
                        <td>{entry.referrer}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default AnalyticsTable;
