import { useState, useEffect } from "react";
import "./App.css";

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const res = await fetch(url);

    const data = await res.json();

    setProducts(data);
  }, []);

  console.log(products);

  return (
    <div className="App">
      <h1>Lista de produtos </h1>
    </div>
  );
}

export default App;
