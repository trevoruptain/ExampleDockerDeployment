import React from "react";
import { Query } from "react-apollo";
import AddToCart from "../cart/AddToCart";

import Queries from "../../graphql/queries";
const { FETCH_PRODUCT } = Queries;

const ProductDetail = props => {
  return (
    <div>
      <Query
        query={FETCH_PRODUCT}
        variables={{ productId: props.match.params.productId }}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error</p>;
          // set up our category in case we don't have one
          let category = "None";
          if (data.product.category) {
            category = data.product.category.name;
          }
          return (
            <div>
              <p>Name: {data.product.name}</p>
              <p>Weight: {data.product.weight} lbs.</p>
              <p>Description: {data.product.description}</p>
              <p>Price: ${data.product.cost}</p>
              <p>Category: {category}</p>
              <AddToCart id={data.product._id} cost={data.product.cost} />
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default ProductDetail;
