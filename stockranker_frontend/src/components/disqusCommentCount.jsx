import { CommentCount } from 'disqus-react';
const DisqusCommentCount = ({ post }) => {
    <CommentCount
        shortname='stockranker'
        config={
            {
                url: "http://localhost:5173/",
                identifier: post.id,

            }
        }
    >

        Comments
    </CommentCount>
}
export default DisqusCommentCount;