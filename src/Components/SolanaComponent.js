import React, { useState , useEffect} from "react";

const SolanaComponent = () =>{

    let solana_url = 'https://api.lunarcrush.com/v2?data=assets&key=pv12cjtjlg9yrg6sr3na3i&symbol=Sol';

    const [solanaHigh, setsolanaHigh] = useState('');
    const [solanaLow, setsolanaLow] = useState('');
    const [solanaPercent24h, setsolanaPercent24h] = useState('');
    const [solanaPercent7d, setsolanaPercent7d] = useState('');
    const [solanaPercent30d, setsolanaPercent30d] = useState('');

    useEffect(() => {
        const interval = setInterval(async () => {
            const response_sol = await fetch(solana_url);
            const data_sol = await response_sol.json();
            const sol_high = data_sol.data[0].high;
            const sol_low = data_sol.data[0].low;
            const sol_percent_24h = data_sol.data[0].percent_change_24h;
            const sol_percent_7d = data_sol.data[0].percent_change_7d;
            const sol_percent_30d = data_sol.data[0].percent_change_30d;
            const sol_high_rounded = sol_high.toFixed(2);
            const sol_low_rounded = sol_low.toFixed(2);
            const sol_percent_24h_rounded = sol_percent_24h.toFixed(2);
            const sol_percent_7d_rounded = sol_percent_7d.toFixed(2);
            const sol_percent_30d_rounded = sol_percent_30d.toFixed(2);
            setsolanaHigh(sol_high_rounded);
            setsolanaLow(sol_low_rounded);
            setsolanaPercent24h(sol_percent_24h_rounded);
            setsolanaPercent7d(sol_percent_7d_rounded);
            setsolanaPercent30d(sol_percent_30d_rounded);
        }, 1000);
        return() => clearInterval(interval);
    })

    return(
        <div class="currency-info">
            <div class="currency-info-heading"><h1>Solana</h1></div>
            <div class="currency-image-container"><img class="currency-image" src={require('../images/Solana.png').default} alt="oops!"></img></div>
            <div class="currency-info-stats-container">
            <div class="currency-info-stats">High: {solanaHigh}</div>
            <div class="currency-info-stats">Low: {solanaLow}</div>
            <div class="currency-info-stats">24h: <div id={solanaPercent24h > 0 ?"positive" : "negative"}>{solanaPercent24h}</div></div>
            <div class="currency-info-stats">7d: <div id={solanaPercent7d > 0 ?"positive" : "negative"}>{solanaPercent7d}</div></div>
            <div class="currency-info-stats">30d: <div id={solanaPercent30d > 0 ?"positive" : "negative"}>{solanaPercent30d}</div></div>
            </div>
        </div>
        
    )
}

export default SolanaComponent;