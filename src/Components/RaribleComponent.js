import React, { useState , useEffect} from "react";

const RaribleComponent = () =>{

    let rarible_url = 'https://api.lunarcrush.com/v2?data=assets&key=pv12cjtjlg9yrg6sr3na3i&symbol=RARI';

    const [raribleHigh, setraribleHigh] = useState('');
    const [raribleLow, setraribleLow] = useState('');
    const [rariblePercent24h, setrariblePercent24h] = useState('');
    const [rariblePercent7d, setrariblePercent7d] = useState('');
    const [rariblePercent30d, setrariblePercent30d] = useState('');

    useEffect(() => {
        const interval = setInterval(async () => {
            const response_rari = await fetch(rarible_url);
            const data_rari = await response_rari.json();
            const rari_high = data_rari.data[0].high;
            const rari_low = data_rari.data[0].low;
            const rari_percent_24h = data_rari.data[0].percent_change_24h;
            const rari_percent_7d = data_rari.data[0].percent_change_7d;
            const rari_percent_30d = data_rari.data[0].percent_change_30d;
            const rari_high_rounded = rari_high.toFixed(2);
            const rari_low_rounded = rari_low.toFixed(2);
            const rari_percent_24h_rounded = rari_percent_24h.toFixed(2);
            const rari_percent_7d_rounded = rari_percent_7d.toFixed(2);
            const rari_percent_30d_rounded = rari_percent_30d.toFixed(2);
            setraribleHigh(rari_high_rounded);
            setraribleLow(rari_low_rounded);
            setrariblePercent24h(rari_percent_24h_rounded);
            setrariblePercent7d(rari_percent_7d_rounded);
            setrariblePercent30d(rari_percent_30d_rounded);
        }, 1000);
        return() => clearInterval(interval);
    })

    return(
        <div class="currency-info">
            <div class="currency-info-heading"><h1>Rarible</h1></div>
            <div class="currency-image-container"><img class="currency-image" src={require('../images/Rarible.jpg').default} alt="oops!"></img></div>
            <div class="currency-info-stats-container">
            <div class="currency-info-stats">High: {raribleHigh}</div>
            <div class="currency-info-stats">Low: {raribleLow}</div>
            <div class="currency-info-stats">24h: <div id={rariblePercent24h > 0 ?"positive" : "negative"}>{rariblePercent24h}</div></div>
            <div class="currency-info-stats">7d: <div id={rariblePercent7d > 0 ?"positive" : "negative"}>{rariblePercent7d}</div></div>
            <div class="currency-info-stats">30d: <div id={rariblePercent30d > 0 ?"positive" : "negative"}>{rariblePercent30d}</div></div>
            </div>
        </div>
        
    )
}

export default RaribleComponent;