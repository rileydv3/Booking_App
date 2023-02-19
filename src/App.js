
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/home/Home";
import Listing from "./pages/listing/Listing";
import List from "./pages/list/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/listings" element={<List/>}/>
        <Route path="/listings/:id" element={<Listing/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
