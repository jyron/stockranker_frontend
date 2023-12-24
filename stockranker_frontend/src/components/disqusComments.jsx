import { DiscussionEmbed } from "disqus-react"
const DisqusComments = ({ post }) => {
    const disqusShortname = "stockranker"
    const disqusConfig = {
        url: `https://stockranker.co/stocks/${post.ticker}`,
        identifier: post.ticker + "_0", // Single post id

    }
    return (
        <>
            <DiscussionEmbed
                shortname={disqusShortname}
                config={disqusConfig}
            />
        </>
    )
}
export default DisqusComments;
