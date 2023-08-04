import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeBucket } from "../../store/reducers/mainPageSlice";

const MainPage = () => {
  const { dataProducts } = useSelector((state) => state.mainPageSlice);
  const dispatch = useDispatch();
  console.log(dataProducts, "dataProducts");
  const style = {
    width: "400px",
    height: "300px",
    backgroundColor: "red",
  };
  return (
    <div>
      {dataProducts.map((i) => (
        <div style={style} key={i.id}>
          <h2>{i.name}</h2>
          <span>{i.price}</span>
          <p>{i.description}</p>
          <button
            onClick={() =>
              dispatch(
                changeBucket({
                  id: i.id,
                  name: i.name,
                  price: i.price,
                  description: i.description,
                })
              )
            }
          >
            добавить в корзину
          </button>
        </div>
      ))}
    </div>
  );
};

export default MainPage;
