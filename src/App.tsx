import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop";

const App = () => (
  <Routes>
    <Route path="/" element={<Navigation />}>
      <Route index element={<Home />} />,
      <Route path="shop" element={<Shop />}></Route>
      <Route path="auth" element={<Authentication />} />
      <Route path="*" element={<Home />} />
    </Route>
  </Routes>
);

export default App;
