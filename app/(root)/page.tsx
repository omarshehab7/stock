import Header from "@/components/Header";
import TradingViewWidget from '@/components/TradingViewWidget';
import { HEATMAP_WIDGET_CONFIG, MARKET_DATA_WIDGET_CONFIG, MARKET_OVERVIEW_WIDGET_CONFIG, TOP_STORIES_WIDGET_CONFIG } from '@/lib/constants';
const Home = () => {
    const scriptUrl = `https://s3.tradingview.com/external-embedding/embed-widget-`;
    return (
        <div className="flex min-h-screen home-wrapper">
            <Header />
            <section className='grid w-full gap-8 home-section'>
                <div className="md:col-span-1 xl:col-span-2">
                    <TradingViewWidget title='Market Overview'
                     script={`${scriptUrl}market-overview.js`}
                      config={MARKET_OVERVIEW_WIDGET_CONFIG} 
                      className='custom-chart'
                      height={600} />
                      <div className='md:col-span-1 xl:col-span-1'>
                        <TradingViewWidget title='Stock Heatmap'
                     script={`${scriptUrl}stock-heatmap.js`}
                      config={HEATMAP_WIDGET_CONFIG} 
                      height={600} />
                      </div>
                </div>
                <div className="h-full md:col-span-1 xl:col-span-1">
                    <TradingViewWidget 
                     script={`${scriptUrl}timeline.js`}
                      config={TOP_STORIES_WIDGET_CONFIG} 
                      className='custom-chart'
                      height={600} />
                      <div className='h-full md:col-span-1 xl:col-span-2'>
                        <TradingViewWidget 
                     script={`${scriptUrl}market-quotes.js`}
                      config={MARKET_DATA_WIDGET_CONFIG} 
                      height={600} />
                      </div>
                </div>
            </section>
        </div>
    )
}
export default Home


      
          

