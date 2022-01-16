import React, {useState, useEffect, componentDidMount} from 'react'
import BitcoinComponent from './BitcoinComponent'
import EtheriumComponent from './EtheriumComponent'
import DogeComponent from './DogeComponent'
import SolanaComponent from './SolanaComponent'
import RaribleComponent from './RaribleComponent'
import ChainlinkComponent from './ChainlinkComponent'
import BinanceCoinComponent from './BinanceCoinComponent'

import { NavLink , Route, HashRouter, Routes } from 'react-router-dom'

const Content = () => {

    let bitcoin_url = 'https://api.lunarcrush.com/v2?data=assets&key=pv12cjtjlg9yrg6sr3na3i&symbol=BTC';
    let etherium_url = 'https://api.lunarcrush.com/v2?data=assets&key=pv12cjtjlg9yrg6sr3na3i&symbol=ETH';
    let doge_url = 'https://api.lunarcrush.com/v2?data=assets&key=pv12cjtjlg9yrg6sr3na3i&symbol=DOGE';
    let solana_url = 'https://api.lunarcrush.com/v2?data=assets&key=pv12cjtjlg9yrg6sr3na3i&symbol=SOL';
    let rarible_url = 'https://api.lunarcrush.com/v2?data=assets&key=pv12cjtjlg9yrg6sr3na3i&symbol=RARI';
    let chainlink_url = 'https://api.lunarcrush.com/v2?data=assets&key=pv12cjtjlg9yrg6sr3na3i&symbol=LINK';
    let binanceCoin_url = 'https://api.lunarcrush.com/v2?data=assets&key=pv12cjtjlg9yrg6sr3na3i&symbol=BNB';

    const [bitcoinPrice, setBitcoinPrice] = useState('');
    const [etheriumPrice, setEtheriumPrice] = useState('');
    const [dogePrice, setDogePrice] = useState('');
    const [solanaPrice, setSolanaPrice] = useState('');
    const [rariblePrice, setRariblePrice] = useState('');
    const [chainlinkPrice, setChainlinkPrice] = useState('');
    const [binanceCoinPrice, setBinanceCoinPrice] = useState('');
    
    // const [bitcoinPrice, setBitcoinPrice] = useState('')
    useEffect(() => {
        const interval = setInterval(async () => {
            const response_btc = await fetch(bitcoin_url);
            const data_btc = await response_btc.json();
            const btc_price = data_btc.data[0].price;
            const btc_price_rounded = btc_price.toFixed(2);
    
            const response_eth = await fetch(etherium_url);
            const data_eth = await response_eth.json();
            const eth_price = data_eth.data[0].price;
            const eth_price_rounded = eth_price.toFixed(2);
    
            const response_doge = await fetch(doge_url);
            const data_doge = await response_doge.json();
            const doge_price = data_doge.data[0].price;
            const doge_price_rounded = doge_price.toFixed(2);

            const response_sol = await fetch(solana_url);
            const data_sol = await response_sol.json();
            const sol_price = data_sol.data[0].price;
            const sol_price_rounded = sol_price.toFixed(2);
    
            const response_rari = await fetch(rarible_url);
            const data_rari = await response_rari.json();
            const rari_price = data_rari.data[0].price;
            const rari_price_rounded = rari_price.toFixed(2);
    
            const response_link = await fetch(chainlink_url);
            const data_link = await response_link.json();
            const link_price = data_link.data[0].price;
            const link_price_rounded = link_price.toFixed(2);

            const response_bnb = await fetch(binanceCoin_url);
            const data_bnb = await response_bnb.json();
            const bnb_price = data_bnb.data[0].price;
            const bnb_price_rounded = bnb_price.toFixed(2);
            
            setBitcoinPrice(btc_price_rounded);
            setEtheriumPrice(eth_price_rounded);
            setDogePrice(doge_price_rounded);
            setSolanaPrice(sol_price_rounded);
            setRariblePrice(rari_price_rounded);
            setChainlinkPrice(link_price_rounded);
            setBinanceCoinPrice(bnb_price_rounded);
        }, 1000);
        return() => clearInterval(interval);
    })

    return ( 
        <>
        <div id="content-container">
        <div id="currencies">
            <h1 id="currencies-heading">Currencies:</h1>
            <div id="curreny-cards-container">
                <div className="currency-cards">
                    <hr></hr>
                    <NavLink to='/'><div className="currency-card-template"><div><p>BTC</p><p>{bitcoinPrice}</p></div></div></NavLink>
                    <NavLink to='/etherium'><div className="currency-card-template"><div><p>ETH</p><p>{etheriumPrice}</p></div></div></NavLink>
                    <NavLink to='/doge'><div className="currency-card-template"><div><p>DOGE</p><p>{dogePrice}</p></div></div></NavLink>
                    <NavLink to='/solana'><div className="currency-card-template"><div><p>SOL</p><p>{solanaPrice}</p></div></div></NavLink>
                    <NavLink to='/rarible'><div className="currency-card-template"><div><p>RARI</p><p>{rariblePrice}</p></div></div></NavLink>
                    <NavLink to='/chainlink'><div className="currency-card-template"><div><p>LINK</p><p>{chainlinkPrice}</p></div></div></NavLink>
                    <NavLink to='binancecoin'><div className="currency-card-template"><div><p>BNB</p><p>{binanceCoinPrice}</p></div></div></NavLink>
                </div>
            </div>
        </div>
        <Routes>
            <Route exact path='/' element={<BitcoinComponent/>}/>
            <Route path='/etherium' element={<EtheriumComponent/>}/>
            <Route path='/doge' element={<DogeComponent/>}/>
            <Route path='/solana' element={<SolanaComponent/>}/>
            <Route path='/rarible' element={<RaribleComponent/>}/>
            <Route path='/chainlink' element={<ChainlinkComponent/>}/>
            <Route path='/binancecoin' element={<BinanceCoinComponent/>}/>
        </Routes>
        </div>
        </>
     );
}
 
export default Content;