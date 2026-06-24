import { useEffect, useState } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilterProducts] = useState([]);

  //fetch data from dummy API

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      // console.log(response.data.products);
      setProducts(response.data.products);
      setFilterProducts(response.data.products);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProducts();
  }, []);

  const handleFilter = (e) => {
    let input = e.target.value;
    input = input.toLowerCase();
    const presentFilteredProducts = products.filter((item) =>
      item.brand?.toLowerCase().includes(input),
    );
    console.log(presentFilteredProducts);
    setFilterProducts(presentFilteredProducts);
  };

  return (
    <div className="p-5">
      <div className="row bg-amber-400 rounded-3xl mx-5 px-80 flex justify-center items-center">
        <div className="col ">
          <h3 htmlFor="">Search Products Brand: </h3>
        </div>
        <div className="col ">
          <input
            type="search"
            onChange={handleFilter}
            placeholder="search Product"
            className="form-control"
          />
        </div>
      </div>

      <Row className="row m-3" md={3}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div className="col">
              <div className="card">
                <img src={item.thumbnail} alt="product image" />
                <div className="card-body">
                  <h3 className="card-text">{item.brand}</h3>
                  <p className="card-text">{item.description}</p>
                  <h4 className="card-text">Price: ₹{item.price}</h4>
                  <h4 className="card-text">Ratings: {item.rating}</h4>

                  <div>
                    <div className="btn btn-success">Buy</div>
                    <div className="btn btn-warning mx-2">Cart</div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>
            <h2 className="text-center">Products Not Found</h2>
          </div>
        )}
      </Row>
    </div>
  );
};

export default Products;
