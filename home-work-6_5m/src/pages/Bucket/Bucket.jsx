import React from "react";
import { useSelector } from "react-redux";

const Bucket = () => {
  const { bucket } = useSelector((state) => state.mainPageSlice);
  console.log(bucket, "bucket");
  const style = {
    width: "400px",
    height: "300px",
    backgroundColor: "red",
  };
  return (
    <div>
      {bucket.map((i) => (
        <div style={style} key={i.id}>
          <h2>{i.name}</h2>
          <span>{i.price}</span>
          <p>{i.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Bucket;
