import { DiscussionEmbed } from "disqus-react"
import { CommentCount } from 'disqus-react';
const DisqusComments = ({ post }) => {
    const disqusShortname = "stockranker"
    const disqusConfig = {
        url: "https://stockranker.co/",
        identifier: post.id, // Single post id

    }
    return (
        <div>
            <DiscussionEmbed
                shortname={disqusShortname}
                config={disqusConfig}
            />
        </div>
    )
}
export default DisqusComments;
