import React, { useState , useEffect} from "react"

const EtheriumComponent = () =>{

    let etherium_url = 'https://api.lunarcrush.com/v2?data=assets&key=pv12cjtjlg9yrg6sr3na3i&symbol=eth';

    const [etheriumHigh, setetheriumHigh] = useState('');
    const [etheriumLow, setetheriumLow] = useState('');
    const [etheriumPercent24h, setEtheriumPercent24h] = useState('');
    const [etheriumPercent7d, setEtheriumPercent7d] = useState('');
    const [etheriumPercent30d, setEtheriumPercent30d] = useState('');
    
    const [dayPercentColor, setDayPercentColor] = useState(true)

    useEffect(() => {
        const interval = setInterval(async () => {
            const response_eth = await fetch(etherium_url);
            const data_eth = await response_eth.json();
            const eth_high = data_eth.data[0].high;
            const eth_low= data_eth.data[0].low;
            const eth_percent_24h = data_eth.data[0].percent_change_24h;
            const eth_percent_7d = data_eth.data[0].percent_change_7d;
            const eth_percent_30d = data_eth.data[0].percent_change_30d;
            const eth_high_rounded = eth_high.toFixed(2);
            const eth_low_rounded = eth_low.toFixed(2);
            const eth_percent_24h_rounded = eth_percent_24h.toFixed(2);
            const eth_percent_7d_rounded = eth_percent_7d.toFixed(2);
            const eth_percent_30d_rounded = eth_percent_30d.toFixed(2);
            setetheriumHigh(eth_high_rounded);
            setetheriumLow(eth_low_rounded);
            setEtheriumPercent24h(eth_percent_24h_rounded);
            setEtheriumPercent7d(eth_percent_7d_rounded);
            setEtheriumPercent30d(eth_percent_30d_rounded);

        }, 1000);
        return() => clearInterval(interval);
    })

    return(
        <div class="currency-info">
            <div className="currency-info-heading"><h1>Etherium</h1></div>
            <div class="currency-image-container"><img class="currency-image" src={require('../images/Etherium.png').default} alt="oops!"></img></div>
            <div class="currency-info-stats-container">
            <div className="currency-info-stats">High: {etheriumHigh}</div>
            <div className="currency-info-stats">Low: {etheriumLow}</div>
            <div className="currency-info-stats">24h: <div id={etheriumPercent24h > 0 ?"positive" : "negative"}>{etheriumPercent24h}</div></div>
            <div className="currency-info-stats">7d: <div id={etheriumPercent7d > 0 ?"positive" : "negative"}>{etheriumPercent7d}</div></div>
            <div className="currency-info-stats">30d: <div id={etheriumPercent30d > 0 ?"positive" : "negative"}>{etheriumPercent30d}</div></div>
            </div>
        </div>
        
    )
}

export default EtheriumComponent