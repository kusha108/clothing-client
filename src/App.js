// import "./App.css";

// //components
// import Header from "./components/header/Header";
// import Home from "./components/home/Home";
// import DetailView from "./components/details/DetailView";
// import Cart from "./components/cart/Cart";
// import CategoryPage from "./components/category/CategoryPage";
// import FashionShow from "./components/fashion/FashionShow";
// import ShoesPage from "./components/category/ShoesPage";
// import FeaturedPage from "./components/category/FeaturedPage";

// //context
// import DataProvider from "./context/DataProvider";
// import { Box } from "@mui/material";

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <DataProvider>
//       <BrowserRouter>
//         <Header />
//         <Box style={{ marginTop: 10 }}>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/product/:id" element={<DetailView />} />
//             <Route path="/cart" element={<Cart />} />

//             {/*  FIXED: PLACE THIS INSIDE <Routes> */}
//             <Route path="/category/:name" element={<CategoryPage />} />
//             <Route path="/fashion" element={<FashionShow />} />
//             <Route path="/shoes" element={<ShoesPage />} />
//             <Route path="/featured" element={<FeaturedPage />} />
//           </Routes>
//         </Box>
//       </BrowserRouter>
//     </DataProvider>
//   );
// }

// export default App;

import "./App.css";

//components
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import DetailView from "./components/details/DetailView";
import Cart from "./components/cart/Cart";
import CategoryPage from "./components/category/CategoryPage";
import FashionShow from "./components/fashion/FashionShow";
import ShoesPage from "./components/category/ShoesPage";
import FeaturedPage from "./components/category/FeaturedPage";
import AIPage from "./components/ai/AIPage"; // ✅ NEW

//context
import DataProvider from "./context/DataProvider";
import { Box } from "@mui/material";
import SearchPage from "./components/search/SearchPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 10 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<DetailView />} />
            <Route path="/cart" element={<Cart />} />

            <Route path="/category/:name" element={<CategoryPage />} />
            <Route path="/fashion" element={<FashionShow />} />
            <Route path="/shoes" element={<ShoesPage />} />
            <Route path="/featured" element={<FeaturedPage />} />

            {/* ✅ NEW AI ROUTE */}
            <Route path="/ai" element={<AIPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;