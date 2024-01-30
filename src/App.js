import { BrowserRouter, Route, Routes } from "react-router-dom";

import StockView from "./components/stockView/StockView"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<StockView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;