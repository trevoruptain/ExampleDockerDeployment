import React from "react";
import { Query } from "react-apollo";

import Queries from "../../graphql/queries";
const { FETCH_PRODUCT } = Queries;

const CartItem = props => {
  return (
    <Query query={FETCH_PRODUCT} variables={{ productId: props.id }}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error</p>;
        return (
          <div>
            <p>Name: {data.product.name}</p>
            <p>Weight: {data.product.weight} lbs.</p>
            <p>Description: {data.product.description}</p>
            <p>Price: ${data.product.cost}</p>
            <hr />
          </div>
        );
      }}
    </Query>
  );
};

export default CartItem;
