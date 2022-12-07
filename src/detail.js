import details from "./details";
import React from "react";
import { useParams } from "react-router-dom";

let Detail = () => {
  const params = useParams();
  let detailscopy = [...details];

  let transferdetails = detailscopy.filter((x) => {
  let a=params.productId;
 return (x.id == a)
  }
   ).map((x) => (x.Details))
console.log(transferdetails)
  return (
    <>
      <p>Welcome</p>
      {transferdetails.map((x,i) => {
        const{ category , glass , info , ingredients , instructions ,name} =x;
        return (
          <article key={i}>
                <section>
                  <h1>{name}</h1>
                  <h2>{category}</h2>
                  <h2>{glass}</h2>
                  <h2>{info}</h2>
                  <h2>{ingredients}</h2>
                  <h2>{instructions}</h2>
                  
                </section>
          </article>
        )
      })}
    </>
  );
};
export default Detail;
