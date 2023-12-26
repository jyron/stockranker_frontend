import React from 'react';
import Header from '../components/header';
import StockCarousel from '../components/StockCarousel';
import Table from '../components/table';
import Footer from '../components/footer';
import NewsArticlePage from '../components/NewsArticlesPage';

const articles = [
    {
        "title": "What Is a Hedge Fund And Should I Invest In One?",
        "url": "https://www.kiplinger.com/investing/what-is-a-hedge-fund-and-should-i-invest-in-one",
        "time_published": "20231224T203014",
        "authors": [
            "CFA",
            "Charles Lewis Sizemore"
        ],
        "summary": "Hedge funds. The words evoke mental images of pirates in designer suits … of backroom deals over cigars and single malt … or of Gordon Gekko's iconic line from the 1987 movie Wall Street: \"Greed is good.\" But what exactly is a hedge fund, and why should you consider investing in one?",
        "banner_image": "https://cdn.mos.cms.futurecdn.net/zHo9tBQJSGKsGshEiiTp8D-415-80.jpg",
        "source": "Kiplinger",
        "category_within_source": "n/a",
        "source_domain": "www.kiplinger.com",
        "topics": [
            {
                "topic": "Economy - Monetary",
                "relevance_score": "0.158519"
            },
            {
                "topic": "Financial Markets",
                "relevance_score": "0.980716"
            },
            {
                "topic": "Earnings",
                "relevance_score": "0.158519"
            },
            {
                "topic": "Technology",
                "relevance_score": "1.0"
            }
        ],
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
        "title": "Google rejected Play Store fee changes due to revenue impact: Epic Lawsuit",
        "url": "https://www.business-standard.com/companies/news/google-rejected-play-store-fee-changes-due-to-revenue-impact-epic-lawsuit-123122400905_1.html",
        "time_published": "20231224T175319",
        "authors": [
            "Bloomberg"
        ],
        "summary": "Google spokesman Dan Jackson said the fees help the company maintain investment in Android and the Play Store. ( Photo: Bloomberg )",
        "banner_image": "https://bsmedia.business-standard.com/_media/bs/img/article/2023-12/24/full/1703440363-8356.png?im=Resize=(640,480)",
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
        "title": "The Magnificent 7 dominated 2023. Will the rest of the stock market soar in 2024?",
        "url": "https://www.marketwatch.com/story/the-magnificent-7-dominated-2023-will-the-rest-of-the-stock-market-soar-in-2024-dc07399f",
        "time_published": "20231224T170100",
        "authors": [
            "William Watts"
        ],
        "summary": "Beaten-down parts of the stock-market are playing catch up after lagging behind the 'Magnificent ...",
        "banner_image": "https://images.mktw.net/im-92253586?width=700&height=416",
        "source": "MarketWatch",
        "category_within_source": "Top Stories",
        "source_domain": "www.marketwatch.com",
        "topics": [
            {
                "topic": "Economy - Monetary",
                "relevance_score": "0.158519"
            },
            {
                "topic": "Financial Markets",
                "relevance_score": "0.995077"
            },
            {
                "topic": "Manufacturing",
                "relevance_score": "0.333333"
            },
            {
                "topic": "Technology",
                "relevance_score": "0.333333"
            },
            {
                "topic": "Finance",
                "relevance_score": "0.333333"
            }
        ],
        "overall_sentiment_score": 0.190758,
        "overall_sentiment_label": "Somewhat-Bullish",
        "ticker_sentiment": [
            {
                "ticker": "MSFT",
                "relevance_score": "0.077719",
                "ticker_sentiment_score": "0.09422",
                "ticker_sentiment_label": "Neutral"
            },
            {
                "ticker": "GOOG",
                "relevance_score": "0.077719",
                "ticker_sentiment_score": "0.09422",
                "ticker_sentiment_label": "Neutral"
            },
            {
                "ticker": "META",
                "relevance_score": "0.077719",
                "ticker_sentiment_score": "0.09422",
                "ticker_sentiment_label": "Neutral"
            },
            {
                "ticker": "NVDA",
                "relevance_score": "0.116348",
                "ticker_sentiment_score": "0.154643",
                "ticker_sentiment_label": "Somewhat-Bullish"
            },
            {
                "ticker": "AAPL",
                "relevance_score": "0.192694",
                "ticker_sentiment_score": "0.207267",
                "ticker_sentiment_label": "Somewhat-Bullish"
            },
            {
                "ticker": "TSLA",
                "relevance_score": "0.077719",
                "ticker_sentiment_score": "0.09422",
                "ticker_sentiment_label": "Neutral"
            },
            {
                "ticker": "SCHW",
                "relevance_score": "0.038906",
                "ticker_sentiment_score": "0.14681",
                "ticker_sentiment_label": "Neutral"
            }
        ]
    },
    {
        "title": "Apple Executives Spill The Beans: Here's Why The iPhone Maker's Chips Outshine Rivals - Apple  ( NASDAQ:AAPL ) , ARM Holdings  ( NASDAQ:ARM ) ",
        "url": "https://www.benzinga.com/news/23/12/36376742/apple-executives-spill-the-beans-heres-why-the-iphone-makers-chips-outshine-rivals",
        "time_published": "20231224T135424",
        "authors": [
            "Rounak Jain"
        ],
        "summary": "Apple Inc. AAPL executives Johny Srouji and John Ternus have spilled the secret about why their chips are more powerful and efficient than competing chips from their rivals. Apple is very confident about the performance of its latest chip, the A17 Pro, which powers the iPhone 15 Pro and the ...",
        "banner_image": "https://cdn.benzinga.com/files/images/story/2023/Apple-Climate-ESG_1.jpeg?width=1200&height=800&fit=crop",
        "source": "Benzinga",
        "category_within_source": "News",
        "source_domain": "www.benzinga.com",
        "topics": [
            {
                "topic": "Technology",
                "relevance_score": "0.5"
            },
            {
                "topic": "Manufacturing",
                "relevance_score": "0.5"
            }
        ],
        "overall_sentiment_score": 0.244288,
        "overall_sentiment_label": "Somewhat-Bullish",
        "ticker_sentiment": [
            {
                "ticker": "SSNLF",
                "relevance_score": "0.137278",
                "ticker_sentiment_score": "-0.057928",
                "ticker_sentiment_label": "Neutral"
            },
            {
                "ticker": "GOOG",
                "relevance_score": "0.270523",
                "ticker_sentiment_score": "0.2145",
                "ticker_sentiment_label": "Somewhat-Bullish"
            },
            {
                "ticker": "AAPL",
                "relevance_score": "0.738953",
                "ticker_sentiment_score": "0.415769",
                "ticker_sentiment_label": "Bullish"
            },
            {
                "ticker": "ARM",
                "relevance_score": "0.137278",
                "ticker_sentiment_score": "0.0",
                "ticker_sentiment_label": "Neutral"
            },
            {
                "ticker": "QCOM",
                "relevance_score": "0.270523",
                "ticker_sentiment_score": "0.300509",
                "ticker_sentiment_label": "Somewhat-Bullish"
            },
            {
                "ticker": "INTC",
                "relevance_score": "0.137278",
                "ticker_sentiment_score": "0.0",
                "ticker_sentiment_label": "Neutral"
            }
        ]
    },
    {
        "title": "Is It Time to Sell This Warren Buffett \"Magnificent Seven\" Stock Before 2024?",
        "url": "https://www.fool.com/investing/2023/12/24/time-sell-warren-buffett-magnificent-7-stock-2024/",
        "time_published": "20231224T133000",
        "authors": [
            "Neil Patel"
        ],
        "summary": "Investors will find compelling reasons to be a bit pessimistic about this past outperformer.",
        "banner_image": "https://g.foolcdn.com/editorial/images/759013/buffett21-tmf.png",
        "source": "Motley Fool",
        "category_within_source": "n/a",
        "source_domain": "www.fool.com",
        "topics": [
            {
                "topic": "Financial Markets",
                "relevance_score": "0.999186"
            },
            {
                "topic": "Manufacturing",
                "relevance_score": "0.333333"
            },
            {
                "topic": "Earnings",
                "relevance_score": "0.77141"
            },
            {
                "topic": "Technology",
                "relevance_score": "0.333333"
            },
            {
                "topic": "Finance",
                "relevance_score": "0.333333"
            }
        ],
        "overall_sentiment_score": 0.200533,
        "overall_sentiment_label": "Somewhat-Bullish",
        "ticker_sentiment": [
            {
                "ticker": "AAPL",
                "relevance_score": "0.524949",
                "ticker_sentiment_score": "0.168728",
                "ticker_sentiment_label": "Somewhat-Bullish"
            },
            {
                "ticker": "BRK-A",
                "relevance_score": "0.126119",
                "ticker_sentiment_score": "0.025299",
                "ticker_sentiment_label": "Neutral"
            },
            {
                "ticker": "TSLA",
                "relevance_score": "0.063258",
                "ticker_sentiment_score": "0.197943",
                "ticker_sentiment_label": "Somewhat-Bullish"
            }
        ]
    }
]

const Home = ({ stocks, setStocks }) => {
    return (
        <div className="min-h-screen overflow-hidden">
            <Header />
            <StockCarousel stocks={stocks} />

            {/* Content on the left side (e.g., news articles) */}


            {/* Content on the right side (e.g., the table) */}
            <Table stocks={stocks} setStocks={setStocks} />
            <NewsArticlePage articles={articles} />
            <Footer />
        </div>
    );
};

export default Home;