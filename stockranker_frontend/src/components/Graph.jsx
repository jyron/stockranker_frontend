import React from 'react';
import Plot from 'react-plotly.js';
import { useState, useEffect } from 'react';


const Graph = () => {
    const [graphData, setGraphData] = useState(null);
    const api_url = import.meta.env.VITE_API_URL;

    const fetchGraphData = async () => {
        try {
            console.log(api_url)
            const response = await fetch(`${api_url}/api/v0/thirty_day`);
            const data = await response.json();
            setGraphData(data);
        } catch (error) {
            console.error('Error fetching graph data:', error);
            // Handle error state here
        }
    };

    useEffect(() => {
        // Fetch graph data when the component mounts or when api_url changes
        fetchGraphData();
    }, []);

    // Rest of your code...


    console.log(graphData)
    const parsedData = JSON.parse(graphData);
    console.log(parsedData);
    // const timestamps = graphData["Time Series (5min)"].reverse(); // Reverse to display the latest data first
    // // console.log(timestamps);
    // const stockPrices = timestamps.map((timestamp) => parseFloat(graphData["Time Series (5min)"][timestamp]['4. close']));

    const layout = {
        title: 'Stock Price Time Series',
        xaxis: {
            title: 'Time',
        },
        yaxis: {
            title: 'Stock Price',
        },
    };

    const data = [
        {
            x: "freemmw",
            y: "SLaveme",
            type: 'scatter',
            mode: 'lines',
            name: 'Stock Price',
        },
    ];

    return <Plot data={data} layout={layout} />;
};

export default Graph;