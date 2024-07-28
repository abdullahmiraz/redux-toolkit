import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";
import { Alert } from "react-bootstrap";

const Product = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  console.log(products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading ...</div>;
  }
  if (status === "error") {
    return (
      <Alert key={"danger"} variant={"danger"}>
        Something Went Wrong ...
      </Alert>
    );
  }
  if (status === "loading") {
    return <div>Loading ...</div>;
  }
  const addToCart = (product) => {
    // dispatch as add action
    dispatch(add(product));
  };

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
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
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
