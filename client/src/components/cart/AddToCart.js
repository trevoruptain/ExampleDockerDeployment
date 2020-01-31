import React from "react";
import { Query, ApolloConsumer } from "react-apollo";

import Queries from "../../graphql/queries";
const { FETCH_CART_ITEMS } = Queries;

const AddToCart = props => {
  return (
    <ApolloConsumer>
      {cache => (
        <Query query={FETCH_CART_ITEMS} variables={{ productId: props.id }}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error</p>;

            if (data.cart.some(item => item.id === props.id)) {
              return (
                <button
                  onClick={e => {
                    e.preventDefault();
                    // first we read the query from the cache
                    const { cart } = cache.readQuery({
                      query: FETCH_CART_ITEMS
                    });
                    // filter out the item we want to remove
                    const data = {
                      cart: cart.filter(item => {
                        return item.id !== props.id;
                      })
                    };
                    // re-add to our cache with that removed item
                    cache.writeQuery({ query: FETCH_CART_ITEMS, data });
                  }}
                >
                  Remove from cart
                </button>
              );
            } else {
              return (
                <button
                  onClick={e => {
                    e.preventDefault();
                    // read from the cache
                    const { cart } = cache.readQuery({
                      query: FETCH_CART_ITEMS
                    });
                    // create our object with the id and cost from our props and add it to
                    // the array of cart items
                    const data = {
                      cart: [...cart, { id: props.id, cost: props.cost }]
                    };
                    // write to our cache with our new array of cart items!
                    cache.writeQuery({ query: FETCH_CART_ITEMS, data });
                  }}
                >
                  Add to cart
                </button>
              );
            }
          }}
        </Query>
      )}
    </ApolloConsumer>
  );
};

export default AddToCart;
