import React, { Component } from "react";
import { Mutation } from "react-apollo";

import Mutations from "../../graphql/mutations";
import Queries from "../../graphql/queries";
const { CREATE_PRODUCT } = Mutations;
const { FETCH_PRODUCTS } = Queries;

class CreateProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      name: "",
      weight: "",
      description: ""
    };
  }

  handleUpdate(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  updateCache(cache, { data }) {
    console.log("here");
    let products;
    try {
      products = cache.readQuery({ query: FETCH_PRODUCTS });
    } catch (err) {
      return;
    }

    if (products) {
      let productArray = products.products;
      let newProduct = data.newProduct;
      cache.writeQuery({
        query: FETCH_PRODUCTS,
        data: { products: productArray.concat(newProduct) }
      });
    }
  }

  handleSubmit(e, newProduct) {
    e.preventDefault();
    let name = this.state.name;
    newProduct({
      variables: {
        name: name,
        description: this.state.description,
        weight: parseInt(this.state.weight)
      }
    });
  }

  render() {
    return (
      <Mutation
        mutation={CREATE_PRODUCT}
        onError={err => this.setState({ message: err.message })}
        update={(cache, data) => this.updateCache(cache, data)}
        onCompleted={data => {
          const { name } = data.newProduct;
          this.setState({
            message: `New product ${name} created successfully`
          });
        }}
      >
        {(newProduct, { data }) => (
          <div>
            <form onSubmit={e => this.handleSubmit(e, newProduct)}>
              <input
                onChange={this.update("name")}
                value={this.state.name}
                placeholder="Name"
              />
              <textarea
                onChange={this.update("description")}
                value={this.state.description}
                placeholder="description"
              />
              <input
                onChange={this.update("weight")}
                value={this.state.weight}
                placeholder="Weight"
                type="number"
              />
              <button type="submit">Create Product</button>
            </form>
            <p>{this.state.message}</p>
          </div>
        )}
      </Mutation>
    );
  }
}

export default CreateProduct;
