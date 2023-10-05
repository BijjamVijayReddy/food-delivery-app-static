import React from 'react';
import "./Cart.css"
import Helmet from '../../components/helmet/Helmet'
import CommonSection from '../../components/commonSection/CommonSection'
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <Helmet title="cart">
            <CommonSection title="Your Cart">
                <section>
                    <Container>
                        <Row>
                            <Col lg="12">
                                <h5 className="text-center">Your cart is empty</h5>
                                <div className="mt-4">
                                    <h6>
                                        Subtotal: $
                                        <span className="cart__subtotal">26</span>
                                    </h6>
                                    <p>Taxes and shipping will calculate at checkout</p>
                                    <div className="cart__page-btn">
                                        <button className="addTOCart__btn me-4">
                                            <Link to="/foods">Continue Shopping</Link>
                                        </button>
                                        <button className="addTOCart__btn">
                                            <Link to="/checkout">Proceed to checkout</Link>
                                        </button>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <h6>
                                        Subtotal: $
                                        <span className="cart__subtotal">25</span>
                                    </h6>
                                    <p>Taxes and shipping will calculate at checkout</p>
                                    <div className="cart__page-btn">
                                        <button className="addTOCart__btn me-4">
                                            <Link to="/foods">Continue Shopping</Link>
                                        </button>
                                        <button className="addTOCart__btn">
                                            <Link to="/checkout">Proceed to checkout</Link>
                                        </button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </CommonSection>
        </Helmet>
    )
}

const Tr = (props) => {
    const { id, image01, title, price, quantity } = props.item;
    // const dispatch = useDispatch();
  
    const deleteItem = () => {
    //   dispatch(cartActions.deleteItem(id));
    };
    return (
      <tr>
        <td className="text-center cart__img-box">
          <img src={image01} alt="" />
        </td>
        <td className="text-center">Burger</td>
        <td className="text-center">$254</td>
        <td className="text-center">47px</td>
        <td className="text-center cart__item-del">
          <i class="ri-delete-bin-line" onClick={deleteItem}></i>
        </td>
      </tr>
    );
  };

export default Cart
