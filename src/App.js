import { BrowserRouter, Route, Routes } from "react-router-dom";

import StockView from "./components/stockView/StockView";
import Nav from "./components/Nav";

import "./App.scss"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<StockView />} />
            <Route exact path="/createitem" element={<StockView />} />
            <Route exact path="/createlocation" element={<StockView />} />
            <Route exact path="/createtypeofitem" element={<StockView />} />
            <Route exact path="/createbrandofitem" element={<StockView />} />
          </Routes>
        
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
