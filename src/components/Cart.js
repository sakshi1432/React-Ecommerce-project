import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cart.css";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { connect } from "react-redux";

const Cart = (props) => {
  return (
    <>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-10 col-11 mx-auto">
            <div class="row mt-5 gx-3">
              <div class="col-md-12 col-lg-8 col-11 mx-auto main_cart mb-lg-0 mb-5 shadow">
                <div class="card p-4">
                  <h2 class="py-4 font-weight-bold">Cart ({props.cartData.length} items)</h2>

                  {props.cartData.map((item, i) => {
                    return <div class="row">
                      <div class="col-md-5 col-11 mx-auto bg-light d-flex justify-content-center align-items-center shadow product_img">
                       <img src={item.image}/>
                      </div>

                      <div class="col-md-7 col-11 mx-auto px-4 mt-2">
                        <div class="row">
                          <div class="col-6 card-title">
                            <h1 class="mb-4 product_name">{item.title}</h1>
                            <p class="mb-2">SHIRT - BLUE</p>
                            <p class="mb-2">COLOR: BLUE</p>
                            <p class="mb-3">SIZE: M</p>
                          </div>

                          <div class="col-6">
                            <ul class="pagination justify-content-end set_quantity">
                              <li class="page-item">
                                <button
                                  class="page-link"
                                  onclick="decreaseNumber('textbox','itemval')"
                                >
                                  {<RemoveIcon />}
                                </button>
                              </li>
                              <li class="page-item">
                                <input
                                  type="text"
                                  name=""
                                  class="page-link"
                                  value="1"
                                  id="textbox"
                                />
                              </li>
                              <li class="page-item">
                                <button class="page-link">
                                  {" "}
                                  {<AddIcon />}
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-8 d-flex justify-content-between remove_wish">
                            <p>{<DeleteForeverIcon />} REMOVE ITEM</p>
                            <p>{<FavoriteIcon />}MOVE TO WISH LIST </p>
                          </div>
                          <div class="col-4 d-flex justify-content-end price_money">
                            <h3>
                              $<span id="itemval">{item.detail}</span>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>;
                  })}
                </div>
                <hr />
              </div>

              <div class="col-md-12 col-lg-4 col-11 mx-auto mt-lg-0 mt-md-5">
                <div class="right_side p-3 shadow bg-white">
                  <h2 class="product_name mb-5">The Total Amount Of</h2>
                  <div class="price_indiv d-flex justify-content-between">
                    <p>Product amount</p>
                    <p>
                      $<span id="product_total_amt">0.00</span>
                    </p>
                  </div>
                  <div class="price_indiv d-flex justify-content-between">
                    <p>Shipping Charge</p>
                    <p>
                      $<span id="shipping_charge">50.0</span>
                    </p>
                  </div>
                  <hr />
                  <div class="total-amt d-flex justify-content-between font-weight-bold">
                    <p>The total amount of (including VAT)</p>
                    <p>
                      $<span id="total_cart_amt">0.00</span>
                    </p>
                  </div>
                  <button class="btn btn-primary text-uppercase">
                    Checkout
                  </button>
                </div>

                <div class="discount_code mt-3 shadow">
                  <div class="card">
                    <div class="card-body">
                      <a
                        class="d-flex justify-content-between"
                        data-toggle="collapse"
                        href="#collapseExample"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      >
                        Add a discount code (optional)
                        <span>
                          <i class="fas fa-chevron-down pt-1"></i>
                        </span>
                      </a>
                      <div class="collapse" id="collapseExample">
                        <div class="mt-3">
                          <input
                            type="text"
                            name=""
                            id="discount_code1"
                            class="form-control font-weight-bold"
                            placeholder="Enter the discount code"
                          />
                          <small id="error_trw" class="text-dark mt-3">
                            code is thapa
                          </small>
                        </div>
                        <button
                          class="btn btn-primary btn-sm mt-3"
                          onclick="discount_code()"
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mt-3 shadow p-3 bg-white">
                  <div class="pt-4">
                    <h5 class="mb-4">Expected delivery date</h5>
                    <p>July 27th 2020 - July 29th 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
function mapStateToProps(state) {
  const { cartItems } = state;
  return { cartData: cartItems.cartData };
}

export default connect(mapStateToProps)(Cart);
