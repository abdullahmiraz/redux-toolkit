import { default as React } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const productCart = useSelector((state) => state?.cart);
  console.log(productCart);

  const removeToCart = (id) => {
    dispatch(remove(id));
  };

  const cards = productCart.map((product, index) => (
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
          <Button variant="danger" onClick={() => removeToCart(product.id)}>
            Remove Product
          </Button>
        </Card.Body>
      </Card>
    </div>
  ));
  return (
    <div>
      <div className="d-flex justify-content-center flex-wrap">{cards}</div>
    </div>
  );
};

export default Cart;
