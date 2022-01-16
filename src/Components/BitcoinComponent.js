import React, { useState , useEffect} from "react";

const BitcoinComponent = () =>{

    let bitcoin_url = 'https://api.lunarcrush.com/v2?data=assets&key=pv12cjtjlg9yrg6sr3na3i&symbol=BTC';

    const [bitcoinHigh, setBitcoinHigh] = useState('');
    const [bitcoinLow, setBitcoinLow] = useState('');
    const [bitcoinPercent24h, setBitcoinPercent24h] = useState('');
    const [bitcoinPercent7d, setBitcoinPercent7d] = useState('');
    const [bitcoinPercent30d, setBitcoinPercent30d] = useState('');

    useEffect(() => {
        const interval = setInterval(async () => {
            const response_btc = await fetch(bitcoin_url);
            const data_btc = await response_btc.json();
            const btc_high = data_btc.data[0].high;
            const btc_low = data_btc.data[0].low;
            const btc_percent_24h = data_btc.data[0].percent_change_24h;
            const btc_percent_7d = data_btc.data[0].percent_change_7d;
            const btc_percent_30d = data_btc.data[0].percent_change_30d;
            const btc_high_rounded = btc_high.toFixed(2);
            const btc_low_rounded = btc_low.toFixed(2);
            const btc_percent_24h_rounded = btc_percent_24h.toFixed(2);
            const btc_percent_7d_rounded = btc_percent_7d.toFixed(2);
            const btc_percent_30d_rounded = btc_percent_30d.toFixed(2);
            setBitcoinHigh(btc_high_rounded);
            setBitcoinLow(btc_low_rounded);
            setBitcoinPercent24h(btc_percent_24h_rounded);
            setBitcoinPercent7d(btc_percent_7d_rounded);
            setBitcoinPercent30d(btc_percent_30d_rounded);
        }, 1000);
        return() => clearInterval(interval);
    })

    return(
        <div class="currency-info">
            <div class="currency-info-heading"><h1>Bitcoin</h1></div>
            <div class="currency-image-container"><img class="currency-image" src={require('../images/Bitcoin.png').default} alt="oops!"></img></div>
            <div class="currency-info-stats-container">
            <div class="currency-info-stats">High: {bitcoinHigh}</div>
            <div class="currency-info-stats">Low: {bitcoinLow}</div>
            <div class="currency-info-stats">24h: <div id={bitcoinPercent24h > 0 ?"positive" : "negative"}>{bitcoinPercent24h}</div></div>
            <div class="currency-info-stats">7d: <div id={bitcoinPercent7d > 0 ?"positive" : "negative"}>{bitcoinPercent7d}</div></div>
            <div class="currency-info-stats">30d: <div id={bitcoinPercent30d > 0 ?"positive" : "negative"}>{bitcoinPercent30d}</div></div>
            </div>
        </div>
        
    )
}

export default BitcoinComponent