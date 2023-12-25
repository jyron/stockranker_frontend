import React from 'react';
import NewsArticle from './NewsArticle';

const NewsArticlePage = ({ articles }) => {
    // Assume 'articles' is an array of news articles in the provided format

    return (
        <div>
            {articles.map((article, index) => (
                <NewsArticle key={index} article={article} />
            ))}
        </div>
    );
};

export default NewsArticlePage;