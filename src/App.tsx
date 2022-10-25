import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation";
import Authentication from "./routes/authentication/authentication";
import Shop from "./routes/shop/shop";
import Checkout from "./routes/checkout/checkout";

const App = () => (
  <Routes>
    <Route path="/" element={<Navigation />}>
      <Route index element={<Home />} />,
      <Route path="shop" element={<Shop />}></Route>
      <Route path="auth" element={<Authentication />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="*" element={<Home />} />
    </Route>
  </Routes>
);

export default App;
