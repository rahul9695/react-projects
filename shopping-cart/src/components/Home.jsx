import { cartState } from "../context/Context";
import SingleProduct from "./SingleProduct";
import '../App.css'
import Filters from "./Filters";

const Home = () => {
  const {
    state: { products },
  } = cartState();

//   console.log(products);
  return <div className="home">
    <Filters />
    <div className="productContainer">
        {products.map((product) => {
            return <SingleProduct key={product.id} product={product} />
        })}
    </div>
  </div>;
};

export default Home;
