import React from 'react';

const articleDataq = [
    {
        image: 'https://source.unsplash.com/random/245x320',
        category: 'Art',
        date: '31 Jul',
        title: 'Fuga ea ullam earum assumenda, beatae labore eligendi.',
    },
    {
        image: 'https://source.unsplash.com/random/240x320',
        category: 'Politics',
        date: '04 Aug',
        title: 'Autem sunt tempora mollitia magnam non voluptates',
    },
    {
        image: 'https://source.unsplash.com/random/241x320',
        category: 'Health',
        date: '01 Aug',
        title: 'Inventore reiciendis aliquam excepturi',
    },
    {
        image: 'https://source.unsplash.com/random/242x320',
        category: 'Science',
        date: '28 Jul',
        title: 'Officiis mollitia dignissimos commodi optio vero animi',
    },
    {
        image: 'https://source.unsplash.com/random/243x320',
        category: 'Sports',
        date: '19 Jul',
        title: 'Doloribus sit illo necessitatibus architecto exercitationem enim',
    },
];

const articleData = [
    {
        title: "What Is a Hedge Fund And Should I Invest In One?",
        "url": "https://www.kiplinger.com/investing/what-is-a-hedge-fund-and-should-i-invest-in-one",
        date: "20231224T203014",
        "authors": [
            "CFA",
            "Charles Lewis Sizemore"
        ],
        "summary": "Hedge funds. The words evoke mental images of pirates in designer suits … of backroom deals over cigars and single malt … or of Gordon Gekko's iconic line from the 1987 movie Wall Street: \"Greed is good.\" But what exactly is a hedge fund, and why should you consider investing in one?",
        image: "https://cdn.mos.cms.futurecdn.net/zHo9tBQJSGKsGshEiiTp8D-415-80.jpg",
        "source": "Kiplinger",
        "category_within_source": "n/a",
        "source_domain": "www.kiplinger.com",
        category: "Financial Markets",
        "relevance_score": "0.980716",

        "overall_sentiment_score": 0.031346,
        "overall_sentiment_label": "Neutral",
        "ticker_sentiment": [
            {
                "ticker": "MSFT",
                "relevance_score": "0.126119",
                "ticker_sentiment_score": "0.128332",
                "ticker_sentiment_label": "Neutral"
            },
            {
                "ticker": "AAPL",
                "relevance_score": "0.126119",
                "ticker_sentiment_score": "0.128332",
                "ticker_sentiment_label": "Neutral"
            },
            {
                "ticker": "FOREX:GBP",
                "relevance_score": "0.042196",
                "ticker_sentiment_score": "0.194899",
                "ticker_sentiment_label": "Somewhat-Bullish"
            }
        ]
    },
    {
        title: "Google rejected Play Store fee changes due to revenue impact: Epic Lawsuit",
        "url": "https://www.business-standard.com/companies/news/google-rejected-play-store-fee-changes-due-to-revenue-impact-epic-lawsuit-123122400905_1.html",
        date: "20231224T175319",
        "authors": [
            "Bloomberg"
        ],
        "summary": "Google spokesman Dan Jackson said the fees help the company maintain investment in Android and the Play Store. ( Photo: Bloomberg )",
        image: "https://bsmedia.business-standard.com/_media/bs/img/article/2023-12/24/full/1703440363-8356.png?im=Resize=(640,480)",
        "source": "Business Standard",
        "category_within_source": "GoogleRSS",
        "source_domain": "www.business-standard.com",
        "topics": [
            {
                "topic": "Earnings",
                "relevance_score": "0.360215"
            },
            {
                "topic": "Technology",
                "relevance_score": "1.0"
            },
            {
                "topic": "Financial Markets",
                "relevance_score": "0.108179"
            }
        ],
        "overall_sentiment_score": -0.023981,
        "overall_sentiment_label": "Neutral",
        "ticker_sentiment": [
            {
                "ticker": "GOOG",
                "relevance_score": "0.751437",
                "ticker_sentiment_score": "0.007919",
                "ticker_sentiment_label": "Neutral"
            },
            {
                "ticker": "AAPL",
                "relevance_score": "0.05749",
                "ticker_sentiment_score": "-0.131976",
                "ticker_sentiment_label": "Neutral"
            }
        ]
    },
    {
        title: "The Magnificent 7 dominated 2023. Will the rest of the stock market soar in 2024?",
        "url": "https://www.marketwatch.com/story/the-magnificent-7-dominated-2023-will-the-rest-of-the-stock-market-soar-in-2024-dc07399f",
        date: "20231224T170100",
        "authors": [
            "William Watts"
        ],
        "summary": "Beaten-down parts of the stock-market are playing catch up after lagging behind the 'Magnificent ...",
        image: "https://images.mktw.net/im-92253586?width=700&height=416",
        "source": "MarketWatch",
        "category_within_source": "Top Stories",
        "source_domain": "www.marketwatch.com",
        topic: "Financial Markets"

    },
    {
        title: "Apple Executives Spill The Beans: Here's Why The iPhone Maker's Chips Outshine Rivals - Apple  ( NASDAQ:AAPL ) , ARM Holdings  ( NASDAQ:ARM ) ",
        "url": "https://www.benzinga.com/news/23/12/36376742/apple-executives-spill-the-beans-heres-why-the-iphone-makers-chips-outshine-rivals",
        date: "20231224T135424",
        "authors": [
            "Rounak Jain"
        ],
        "summary": "Apple Inc. AAPL executives Johny Srouji and John Ternus have spilled the secret about why their chips are more powerful and efficient than competing chips from their rivals. Apple is very confident about the performance of its latest chip, the A17 Pro, which powers the iPhone 15 Pro and the ...",
        image: "https://cdn.benzinga.com/files/images/story/2023/Apple-Climate-ESG_1.jpeg?width=1200&height=800&fit=crop",
        "source": "Benzinga",
        "category_within_source": "News",
        "source_domain": "www.benzinga.com",
        topic: "Technology",

        "overall_sentiment_score": 0.244288,
        "overall_sentiment_label": "Somewhat-Bullish",

    },
    {
        title: "Is It Time to Sell This Warren Buffett \"Magnificent Seven\" Stock Before 2024?",
        url: "https://www.fool.com/investing/2023/12/24/time-sell-warren-buffett-magnificent-7-stock-2024/",
        date: "20231224T133000",
        "authors": [
            "Neil Patel"
        ],
        "summary": "Investors will find compelling reasons to be a bit pessimistic about this past outperformer.",
        image: "https://g.foolcdn.com/editorial/images/759013/buffett21-tmf.png",
        "source": "Motley Fool",
        "category_within_source": "n/a",
        "source_domain": "www.fool.com",
        topic: "Finance",



    }
]

const ArticleCard = ({ image, category, date, title, url }) => (
    <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group dark:bg-gray-500" style={{ backgroundImage: `url(${image})` }}>
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
            <a rel="noopener noreferrer" href={url} className="px-3 py-2 text-xs font-semibold tracki uppercase hover:underline dark:text-gray-100 dark:bg-violet-400">
                {category}
            </a>

            <div className="flex flex-col justify-start text-center dark:text-gray-100">
                <span className="text-3xl font-semibold leadi tracki">{date}</span>
            </div>
        </div>
        <h2 className="z-10 p-5">
            <a rel="noopener noreferrer" href="#" className="font-medium text-md group-hover:underline dark:text-gray-100">{title}</a>
        </h2>
    </div>
);

const MamboUINewsContainer = () => {
    return (
        <div className="max-w-screen-xl p-5 mx-auto dark:bg-gray-800 dark:text-gray-100">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-0 lg:grid-rows-2">
                {articleData.map((article, index) => (
                    <ArticleCard key={index} {...article} />
                ))}
            </div>
        </div>
    );
}

export default MamboUINewsContainer;
