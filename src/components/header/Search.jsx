import { useState, useEffect } from "react";
import { InputBase, List, ListItem, Box, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";
import { Link, useNavigate } from "react-router-dom";

//  Search Container
const SearchContainer = styled(Box)`
  background: #ffffff;
  width: 100%;
  border-radius: 6px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  position: relative;
  border: 2px solid #6a00ff25;
`;

const InputSearchBase = styled(InputBase)`
  padding: 8px 12px;
  width: 100%;
  font-size: 14px;
`;

const SearchIconWrapper = styled(Box)`
  color: #7a00ff;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;   /* 🔥 clickable */
`;

const ListWrapper = styled(List)`
  position: absolute;
  top: 45px;
  width: 100%;
  max-height: 300px;
  overflow-y: auto;
  background: #fff;
  color: #000;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.25);
  z-index: 20;
`;

const Search = () => {
  const [text, setText] = useState("");

  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // 🔥 NEW

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const getText = (text) => {
    setText(text);
  };

  //  HANDLE SEARCH (ENTER + ICON)
  const handleSearch = () => {
    if (!text.trim()) return;

    navigate(`/search?q=${text}`); // 🔥 redirect to search page
    setText(""); // optional clear
  };

  return (
    <SearchContainer>
      <InputSearchBase
        placeholder="Search for products..."
        value={text}
        onChange={(e) => getText(e.target.value)}

        //  ENTER KEY FIX
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />

      {/*  ICON CLICK FIX */}
      <SearchIconWrapper onClick={handleSearch}>
        <SearchIcon />
      </SearchIconWrapper>

      {/*  SUGGESTIONS */}
      {text && (
        <ListWrapper>
          {products
            ?.filter((product) =>
              (product.title?.longTitle || "")
                .toLowerCase()
                .includes(text.toLowerCase())
            )
            .slice(0, 8) //  limit results (better UX)
            .map((product) => (
              <ListItem key={product.id}>
                <Link
                  to={`/product/${product.id}`}
                  onClick={() => setText("")}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {product.title?.longTitle}
                </Link>
              </ListItem>
            ))}
        </ListWrapper>
      )}
    </SearchContainer>
  );
};

export default Search;