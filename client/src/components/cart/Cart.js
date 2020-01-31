import React from "react";
import { Query } from "react-apollo";
import CartItem from "./CartItem";

import Queries from "../../graphql/queries";
const { FETCH_CART_ITEMS } = Queries;

export default function Cart() {
  return (
    <Query query={FETCH_CART_ITEMS}>
      {({ data, loading, error }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error.message}</p>;

        let cost = 0;

        return (
          <div>
            <h3>Shopping Cart</h3>
            {!data.cart || !data.cart.length ? (
              <p>The cart is empty</p>
            ) : (
              <div>
                {data.cart.map(product => {
                  cost += product.cost;
                  return <CartItem key={product.id} id={product.id} />;
                })}
                <b>Total: ${cost}</b>
              </div>
            )}
          </div>
        );
      }}
    </Query>
  );
}
