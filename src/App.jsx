import { useState, useEffect } from "react";
import "./App.css";

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");

  const [price, setPrice] = useState("");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);

      const data = await res.json();

      setProducts(data);
    }

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    const res = await fetch(url, {
      method: "Post",
    });
  };

  return (
    <div className="App">
      <h1>Lista de produtos </h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - R$: {product.price}
          </li>
        ))}
      </ul>
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            nome:
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.valuse)}
            />
          </label>
          <label>
            preço:
            <input
              type="number"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <input type="submit" value="criar" />
        </form>
      </div>
    </div>
  );
}

export default App;
