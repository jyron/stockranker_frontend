// NewsArticle.js

import React from 'react';

const NewsArticle = ({ article }) => {
    const {
        title,
        url,
        time_published,
        authors,
        summary,
        banner_image,
        source,
        topics,
        overall_sentiment_score,
        overall_sentiment_label,
        ticker_sentiment,
    } = article;

    return (
        <div className="max-w-2xl mx-auto bg-white shadow-md p-4 my-4 rounded-md grid gap-4 grid-cols-1 sm:grid-cols-2">
            <div>
                <h2 className="text-lg font-bold mb-1">{title}</h2>
                <p className="text-sm text-gray-600">
                    Published on {new Date(time_published).toLocaleString()} by {authors.join(', ')}
                </p>
                <img src={banner_image} alt={title} className="mt-2 rounded-md w-full h-32 object-cover" />
                <p className="text-sm text-gray-700 mt-2">{summary}</p>
            </div>

            <div>
                <div className="mb-2">
                    <span className="font-semibold text-sm text-gray-600">Source:</span>{' '}
                    <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline text-sm">
                        {source}
                    </a>
                </div>

                <div className="mb-2">
                    <span className="font-semibold text-sm text-gray-600">Topics:</span>{' '}
                    <div className="flex flex-wrap">
                        {topics.map((topic, index) => (
                            <span key={index} className="mr-1 text-xs">
                                -{topic.topic}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mb-2">
                    <span className="font-semibold text-sm text-gray-600">Sentiment:</span>{' '}
                    <span
                        className={`${overall_sentiment_score >= 0 ? 'text-green-500' : 'text-red-500'
                            } font-semibold text-xs`}
                    >
                        {overall_sentiment_label}
                    </span>
                </div>

                <div>
                    <span className="font-semibold text-sm text-gray-600">Ticker Sentiment:</span>{' '}
                    <div className="flex flex-wrap">
                        {ticker_sentiment.map((ticker, index) => (
                            <span key={index} className="mr-1 text-xs">
                                {ticker.ticker} -{' '}
                                <span
                                    className={`${ticker.ticker_sentiment_score >= 0 ? 'text-green-500' : 'text-red-500'
                                        } font-semibold text-xs`}
                                >
                                    {ticker.ticker_sentiment_label}
                                </span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsArticle;
