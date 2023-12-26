import React from 'react';
import NewsArticle from './NewsArticle';


const smallerArticlesStyle = {
    fontSize: '14px',
    padding: '8px',
};

const NewsArticlePage = ({ articles }) => {
    // Assume 'articles' is an array of news articles in the provided format

    return (
        <div className='smallerArticlesStyle'>
            {articles.map((article, index) => (
                <NewsArticle key={index} article={article} />
            ))}
        </div>
    );
};

export default NewsArticlePage;