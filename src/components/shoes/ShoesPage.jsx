import { useSelector } from "react-redux";
import ProductCard from "../product/ProductCard";

const ShoesPage = () => {
  const { products } = useSelector((state) => state.getProducts);

  const shoes = products.filter((x) => x.category === "shoes");

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>Shoes Collection</h1>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px"
      }}>
        {shoes.map((shoe) => (
          <ProductCard key={shoe.id} product={shoe} />
        ))}
      </div>
    </div>
  );
};

export default ShoesPage;
