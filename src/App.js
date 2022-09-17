import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import Checkout from "./pages/Checkout/Checkout";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Category/:CategoryId" exact element={<Category />} />
          <Route path="/CheckOut" exact element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
