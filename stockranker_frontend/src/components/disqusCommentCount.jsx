import React from 'react';
import { CommentCount } from 'disqus-react';

const DisqusCommentCount = ({ post }) => {
    const disqusShortname = 'stockranker';
    const disqusConfig = {
        url: `https://stockranker.co/stocks/`,
        identifier: post.ticker + '_0', // Single post id
    };

    return (
        <div>
            <CommentCount shortname={disqusShortname} config={disqusConfig} />
        </div>
    );
};

export default DisqusCommentCount;