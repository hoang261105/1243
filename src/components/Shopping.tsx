import React from "react";
import { useDispatch, useSelector } from "react-redux";

interface Shopping {
  id: number;
  name: string;
  img: string;
  price: number;
  quantity: number;
  describe: string;
}

export default function Shopping() {
  //lấy dữ liệu trong kho ra
  const stateShopping: any = useSelector((state) => {
    return state;
  });

  console.log(stateShopping);

  //tương tác hành động
  const dispatch = useDispatch();

  return (
    <div>
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h1 className="panel-title">List Products</h1>
          </div>
          <div className="panel-body" id="list-product">
            {stateShopping.reducerShopping.map(
              (item: Shopping, index: number) => (
                <div>
                  <div className="media product">
                    <div className="media-left">
                      <a href="#">
                        <img
                          className="media-object"
                          src={item.img}
                          alt="pizza"
                        />
                      </a>
                    </div>
                    <div className="media-body">
                      <h4 className="media-heading">{item.name}</h4>
                      <p>{item.describe}</p>
                      <input
                        name="quantity-product-1"
                        type="number"
                        defaultValue={item.quantity}
                        min={1}
                        readOnly
                      />
                      <span className="price"> {item.price} USD</span>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <div>123</div>
    </div>
  );
}
