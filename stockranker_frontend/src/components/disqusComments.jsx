import { DiscussionEmbed } from "disqus-react"
const DisqusComments = ({ stock }) => {
    const disqusShortname = "stockranker"
    const disqusConfig = {
        url: 'https://stockranker.co/stocks/',
        identifier: stock._id, // Single post id

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
