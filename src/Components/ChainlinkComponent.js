import React, { useState , useEffect} from "react";

const ChainlinkComponent = () =>{

    let chainlink_url = 'https://api.lunarcrush.com/v2?data=assets&key=pv12cjtjlg9yrg6sr3na3i&symbol=LINK';

    const [chainlinkHigh, setchainlinkHigh] = useState('');
    const [chainlinkLow, setchainlinkLow] = useState('');
    const [chainlinkPercent24h, setchainlinkPercent24h] = useState('');
    const [chainlinkPercent7d, setchainlinkPercent7d] = useState('');
    const [chainlinkPercent30d, setchainlinkPercent30d] = useState('');

    useEffect(() => {
        const interval = setInterval(async () => {
            const response_link = await fetch(chainlink_url);
            const data_link = await response_link.json();
            const link_high = data_link.data[0].high;
            const link_low = data_link.data[0].low;
            const link_percent_24h = data_link.data[0].percent_change_24h;
            const link_percent_7d = data_link.data[0].percent_change_7d;
            const link_percent_30d = data_link.data[0].percent_change_30d;
            const link_high_rounded = link_high.toFixed(2);
            const link_low_rounded = link_low.toFixed(2);
            const link_percent_24h_rounded = link_percent_24h.toFixed(2);
            const link_percent_7d_rounded = link_percent_7d.toFixed(2);
            const link_percent_30d_rounded = link_percent_30d.toFixed(2);
            setchainlinkHigh(link_high_rounded);
            setchainlinkLow(link_low_rounded);
            setchainlinkPercent24h(link_percent_24h_rounded);
            setchainlinkPercent7d(link_percent_7d_rounded);
            setchainlinkPercent30d(link_percent_30d_rounded);
        }, 1000);
        return() => clearInterval(interval);
    })

    return(
        <div class="currency-info">
            <div class="currency-info-heading"><h1>Chainlink</h1></div>
            <div class="currency-image-container"><img class="currency-image" src={require('../images/Chainlink.jpg').default} alt="oops!"></img></div>
            <div class="currency-info-stats-container">
            <div class="currency-info-stats">High: {chainlinkHigh}</div>
            <div class="currency-info-stats">Low: {chainlinkLow}</div>
            <div class="currency-info-stats">24h: <div id={chainlinkPercent24h > 0 ?"positive" : "negative"}>{chainlinkPercent24h}</div></div>
            <div class="currency-info-stats">7d: <div id={chainlinkPercent7d > 0 ?"positive" : "negative"}>{chainlinkPercent7d}</div></div>
            <div class="currency-info-stats">30d: <div id={chainlinkPercent30d > 0 ?"positive" : "negative"}>{chainlinkPercent30d}</div></div>
            </div>
        </div>
        
    )
}

export default ChainlinkComponent;