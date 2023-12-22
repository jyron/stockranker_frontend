import { DiscussionEmbed } from "disqus-react"
const DisqusComments = ({ post }) => {
    const disqusShortname = "stockranker"
    const disqusConfig = {
        url: "http://localhost:5173/",
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