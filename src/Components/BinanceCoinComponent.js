import React, { useState , useEffect} from "react";

const BinanceCoinComponent = () =>{

    let binanceCoin_url = 'https://api.lunarcrush.com/v2?data=assets&key=pv12cjtjlg9yrg6sr3na3i&symbol=BNB';

    const [binanceCoinHigh, setbinanceCoinHigh] = useState('');
    const [binanceCoinLow, setbinanceCoinLow] = useState('');
    const [binanceCoinPercent24h, setbinanceCoinPercent24h] = useState('');
    const [binanceCoinPercent7d, setbinanceCoinPercent7d] = useState('');
    const [binanceCoinPercent30d, setbinanceCoinPercent30d] = useState('');

    useEffect(() => {
        const interval = setInterval(async () => {
            const response_bnb = await fetch(binanceCoin_url);
            const data_bnb = await response_bnb.json();
            const bnb_high = data_bnb.data[0].high;
            const bnb_low = data_bnb.data[0].low;
            const bnb_percent_24h = data_bnb.data[0].percent_change_24h;
            const bnb_percent_7d = data_bnb.data[0].percent_change_7d;
            const bnb_percent_30d = data_bnb.data[0].percent_change_30d;
            const bnb_high_rounded = bnb_high.toFixed(2);
            const bnb_low_rounded = bnb_low.toFixed(2);
            const bnb_percent_24h_rounded = bnb_percent_24h.toFixed(2);
            const bnb_percent_7d_rounded = bnb_percent_7d.toFixed(2);
            const bnb_percent_30d_rounded = bnb_percent_30d.toFixed(2);
            setbinanceCoinHigh(bnb_high_rounded);
            setbinanceCoinLow(bnb_low_rounded);
            setbinanceCoinPercent24h(bnb_percent_24h_rounded);
            setbinanceCoinPercent7d(bnb_percent_7d_rounded);
            setbinanceCoinPercent30d(bnb_percent_30d_rounded);
        }, 1000);
        return() => clearInterval(interval);
    })

    return(
        <div class="currency-info">
            <div class="currency-info-heading"><h1>Binance Coin</h1></div>
            <div class="currency-image-container"><img class="currency-image" src={require('../images/BinanceCoin.png').default} alt="oops!"></img></div>
            <div class="currency-info-stats-container">
            <div class="currency-info-stats">High: {binanceCoinHigh}</div>
            <div class="currency-info-stats">Low: {binanceCoinLow}</div>
            <div class="currency-info-stats">24h: <div id={binanceCoinPercent24h > 0 ?"positive" : "negative"}>{binanceCoinPercent24h}</div></div>
            <div class="currency-info-stats">7d: <div id={binanceCoinPercent7d > 0 ?"positive" : "negative"}>{binanceCoinPercent7d}</div></div>
            <div class="currency-info-stats">30d: <div id={binanceCoinPercent30d > 0 ?"positive" : "negative"}>{binanceCoinPercent30d}</div></div>
            </div>
        </div>
        
    )
}

export default BinanceCoinComponent;
