import React, { useState , useEffect} from "react"

const DogeComponent = () =>{

    let doge_url = 'https://api.lunarcrush.com/v2?data=assets&key=pv12cjtjlg9yrg6sr3na3i&symbol=doge';

    const [dogeHigh, setdogeHigh] = useState('');
    const [dogeLow, setdogeLow] = useState('');
    const [dogePercent24h, setDogePercent24h] = useState('');
    const [dogePercent7d, setDogePercent7d] = useState('');
    const [dogePercent30d, setDogePercent30d] = useState('');

    useEffect(() => {
        const interval = setInterval(async () => {
            const response_doge = await fetch(doge_url);
            const data_doge = await response_doge.json();
            const doge_high = data_doge.data[0].high;
            const doge_low= data_doge.data[0].low;
            const doge_percent_24h = data_doge.data[0].percent_change_24h;
            const doge_percent_7d = data_doge.data[0].percent_change_7d;
            const doge_percent_30d = data_doge.data[0].percent_change_30d;
            const doge_high_rounded = doge_high.toFixed(4);
            const doge_low_rounded = doge_low.toFixed(4);
            const doge_percent_24h_rounded = doge_percent_24h.toFixed(2);
            const doge_percent_7d_rounded = doge_percent_7d.toFixed(2);
            const doge_percent_30d_rounded = doge_percent_30d.toFixed(2);
            setdogeHigh(doge_high_rounded);
            setdogeLow(doge_low_rounded);
            setDogePercent24h(doge_percent_24h_rounded);
            setDogePercent7d(doge_percent_7d_rounded);
            setDogePercent30d(doge_percent_30d_rounded);
        }, 1000);
        return() => clearInterval(interval);
    })

    return(
        <div class="currency-info">
            <div class="currency-info-heading"><h1>DOGE</h1></div>
            <div class="currency-image-container"><img class="currency-image" src={require('../images/Doge.png').default} alt="oops!"></img></div>
            <div class="currency-info-stats-container">
            <div class="currency-info-stats">High: {dogeHigh}</div>
            <div class="currency-info-stats">Low: {dogeLow}</div>
            <div class="currency-info-stats">24h: <div id={dogePercent24h > 0 ?"positive" : "negative"}>{dogePercent24h}</div></div>
            <div class="currency-info-stats">7d: <div id={dogePercent7d > 0 ?"positive" : "negative"}>{dogePercent7d}</div></div>
            <div class="currency-info-stats">30d: <div id={dogePercent30d > 0 ?"positive" : "negative"}>{dogePercent30d}</div></div>
            </div>
        </div>
        
    )
}

export default DogeComponent