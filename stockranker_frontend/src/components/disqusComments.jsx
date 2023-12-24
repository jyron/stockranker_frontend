import { DiscussionEmbed } from "disqus-react"
const DisqusComments = ({ stock }) => {
    const disqusShortname = "stockranker"
    const disqusConfig = {
        url: `https://stockranker.co/`,
        identifier: stock.id, // Single post id

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
