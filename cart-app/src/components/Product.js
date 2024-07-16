import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const allProducts = async () => {
      try {
        await fetch(`https://fakestoreapi.com/products`)
          .then((res) => res.json())
          .then((data) => {
            setProducts(data);
            console.log(products);
          });
      } catch (error) {
        console.log(error);
      }
    };
    allProducts();
  }, []);

  const cards = products.map((product, index) => (
    <div key={index} className="m-2 p-2 " style={{ width: "auto" }}>
      <Card
        style={{
          width: "12rem",
          height: "280px",
        }}
      >
        <Card.Img
          variant="top"
          src={product.image}
          style={{
            width: "120px",
            height: "140px",
            objectFit: "cover",
            margin: "0 auto",
          }}
        />
        <Card.Body
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Card.Subtitle>{product.title.slice(0, 40)}...</Card.Subtitle>
          <Card.Text>{Card.description}</Card.Text>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    </div>
  ));

  return (
    <div className="p-4">
      <h3 className="text-center text-decoration-underline">
        Product Dashboard
      </h3>
      <div className="d-flex flex-wrap justify-content-center">{cards}</div>
    </div>
  );
};

export default Product;
