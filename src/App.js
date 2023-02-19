
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";
import { HashRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home";
import Listing from "./pages/listing/Listing";
import List from "./pages/list/List";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/listings" element={<List/>}/>
        <Route path="/listings/:id" element={<Listing/>}/>
        </Routes>
    </HashRouter>

    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home/>}/>
    //     <Route path="/listings" element={<List/>}/>
    //     <Route path="/listings/:id" element={<Listing/>}/>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
