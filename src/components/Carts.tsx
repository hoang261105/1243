import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface Carts {
  id: number;
  name: string;
  img: string;
  price: number;
  quantity: number;
  describe: string;
}

export default function Carts() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const stateCart: any = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  return (
    <>
      <div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <div className="panel panel-danger">
            <div className="panel-heading">
              <h1 className="panel-title">Your Cart</h1>
            </div>
            <div className="panel-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody id="my-cart-body">
                  {stateCart.reducerCarts.map((item: Carts, index: number) => (
                    <tr>
                      <th scope="row">1</th>
                      <td>{item.name}</td>
                      <td>{item.price} USD</td>
                      <td>
                        <input
                          name="cart-item-quantity-1"
                          type="number"
                          defaultValue={item.quantity}
                          min={1}
                        />
                      </td>
                      <td>
                        <a
                          className="label label-info update-cart-item"
                          data-product=""
                        >
                          Update
                        </a>
                        <a
                          className="label label-danger delete-cart-item"
                          data-product=""
                        >
                          Delete
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot id="my-cart-footer">
                  <tr>
                    <td colSpan={4}>
                      There are <b>2</b> items in your shopping cart.
                    </td>
                    <td colSpan={2} className="total-price text-left">
                      630 USD
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          <div className="alert alert-success" role="alert" id="mnotification">
            Add to cart successfully
          </div>
        </div>
      </div>
      {/* Model xóa */}
      {showModal && (
        <div className="overlay">
          <div className="modal-custom">
            <div className="modal-header-custom">
              <h5>Xác nhận</h5>
              <i
                className="fas fa-xmark"
                onClick={() => setShowModal(false)}
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="modal-body-custom">
              <p>Bạn chắc chắn muốn xóa công việc này?</p>
            </div>
            <div className="modal-footer-footer">
              <button
                onClick={() => setShowModal(false)}
                className="btn btn-light"
              >
                Hủy
              </button>
              <button className="btn btn-danger">Xóa</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
