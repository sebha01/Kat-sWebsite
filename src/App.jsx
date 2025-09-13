import './App.css'
import { useEffect, useState } from 'react'
import { client } from './sanityClient'

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "Product"]{
        ProductName,
        "id": ID.current,
        Price,
        Size,
        body,
        "imageUrl": Images.asset->url
      }`)
      .then((data) => setProducts(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Kat’s Clothing Store</h1>

      {products.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        <ul>
          {products.map((p) => (
            <li key={p.id}>
              <h2>{p.ProductName}</h2>
              <p>£{p.Price}</p>
              <p>Size: {p.Size}</p>
              {p.imageUrl && (
                <img
                  src={p.imageUrl}
                  alt={p.ProductName}
                  width="150"
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
