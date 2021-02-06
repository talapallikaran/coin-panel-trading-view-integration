import './App.css';
import { TVChartContainer } from './component/TVChartContainer';
// import TradingViewWidget from 'react-tradingview-widget';


function App() {
  return (
    <div className="App">
      {/* <TradingViewWidget symbol="NASDAQ:TSLA" /> */}
      <TVChartContainer />
    </div>
  );
}

export default App;
