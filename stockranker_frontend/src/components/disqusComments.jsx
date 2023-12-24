import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DiscussionEmbed } from 'disqus-react';

const DisqusComments = ({ post }) => {
    const disqusShortname = 'stockranker';
    const location = useLocation();

    useEffect(() => {
        // Reload Disqus comments whenever the route changes
        const loadDisqusComments = () => {
            const disqusConfig = {
                url: `https://stockranker.co${location.pathname}`,
                identifier: post.id + '_0', // Single post id
            };

            // Assuming you have a function to reset Disqus comments
            window.DISQUS.reset({
                reload: true,
                config: function () {
                    this.page.identifier = disqusConfig.identifier;
                    this.page.url = disqusConfig.url;
                },
            });
        };

        loadDisqusComments();
    }, [location.pathname, post.id]);

    return <DiscussionEmbed shortname={disqusShortname} config={{}} />;
};

export default DisqusComments;