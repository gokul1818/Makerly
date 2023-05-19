import React, { useState, useEffect } from "react";
import Helmet from "../../components/helmet/helmet";
import CommonSection from "../../components/ui/Commonsection";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import "../../styles/checkout.css";
const Checkout = () => {
  const totalQt = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const [shippingfee, setshippingfee] = useState();
  useEffect(() => {
    if (totalAmount > 1000) {
      setshippingfee(0);
    } else {
      setshippingfee(49);
    }
  }, [setshippingfee]);

  return (
    <Helmet title="checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h1>Billing Information</h1>
              <Form>
                <FormGroup className="form_grp">
                  <input type="text" placeholder="Enter your Name" />
                </FormGroup>
                <FormGroup className="form_grp">
                  <input type="email" placeholder="Enter your email" />
                </FormGroup>
                <FormGroup className="form_grp">
                  <input type="number" placeholder="Enter your Number" />
                </FormGroup>
                <FormGroup className="form_grp">
                  <input type="text" placeholder="Address" />
                </FormGroup>
                <FormGroup className="form_grp">
                  <input type="Number" placeholder="Pin Code" />
                </FormGroup>
                <FormGroup className="form_grp">
                  <input type="text" placeholder="Country" />
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
              <div className="checkout_cart">
                <h6>
                  totalQuantity: <span>{totalQt} (Item)</span>
                </h6>
                <h6>
                  Subtotal: <span>₹{totalAmount}</span>
                </h6>
                <h6>
                  shipping fee:{" "}
                  <span>
                    {" "}
                    {totalAmount > 1000 ? (
                      <span className="text-success">Free</span>
                    ) : (
                      <span>₹{shippingfee}</span>
                    )}
                  </span>
                </h6>
                <hr></hr>
                <h5>
                  TotalCost: <span>₹ {totalAmount + shippingfee}</span>
                </h5>
                <motion.button
                  whileTap={{ scale: 0.1 }}
                  className="check_out_btn"
                >
                  place on order
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
export default Checkout;
