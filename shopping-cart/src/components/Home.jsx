// import { cartState } from "../context/Context";
import { CartContext } from "../context/Context";
import { useContext } from "react";
import SingleProduct from "./SingleProduct";
import "../App.css";
import Filters from "./Filters";

const Home = () => {
  const cartState = useContext(CartContext);
  // console.log(cartState);

  const {
    state: { products },
    productState: { byStock, byFastDelivery, sort, byRating, searchQuery },
  } = cartState;

  const transformProducts = () => {
    let sortedProducts = products;
    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh"
          ? Number(a.price) - Number(b.price)
          : Number(b.price) - Number(a.price)
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((product) => product.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((product) => product.fastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (product) => product.rating >= byRating
      );
    }

    if(searchQuery) {
      sortedProducts = sortedProducts.filter((product) => product.name.toLowerCase().includes(searchQuery));
    }

    // console.log(sortedProducts);
    return sortedProducts;
  };
  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {transformProducts().map((product) => {
          return <SingleProduct key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Home;
