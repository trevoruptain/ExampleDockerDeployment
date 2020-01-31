import React from "react";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import Queries from "../../graphql/queries";
const { FETCH_PRODUCTS } = Queries;

const ProductIndex = () => {
  return (
    <div>
      <ul>
        <Query query={FETCH_PRODUCTS}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error</p>;
            return data.products.map(({ _id, name, cost, description }) => (
              <li key={_id}>
                <Link to={`/products/${_id}`}>
                  <h4>{name}</h4>
                </Link>
                <p className="cost">Cost: {cost}</p>
                <p className="cost">Description: {description}</p>
              </li>
            ));
          }}
        </Query>
      </ul>
    </div>
  );
};

export default ProductIndex;
