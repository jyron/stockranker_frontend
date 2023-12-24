import React from 'react';
import { CommentCount } from 'disqus-react';

const DisqusCommentCount = ({ post }) => {
    const disqusShortname = 'stockranker';
    const disqusConfig = {
        url: `https://stockranker.co/stocks/${post.ticker}`,
        identifier: post.ticker + '_0', // Single post id
    };

    return (
        <>

            <CommentCount shortname={disqusShortname} config={disqusConfig} />
        </>
    );
};

export default DisqusCommentCount;