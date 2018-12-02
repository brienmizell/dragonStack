import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchGeneration } from "../actions/generation";
// import { fetchGeneration } from "../actions/generation";
// import fetchStates from "../reducers/fetchStates";

const MINIMUM_DELAY = 3000;

class Generation extends Component {
  timer = null; //object that has not been set yet

  componentDidMount() {
    this.fetchNextGeneration();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  fetchNextGeneration = () => {
    this.props.fetchGeneration();

    let delay =
      new Date(this.props.generation.expiration).getTime() -
      new Date().getTime();

    if (delay < MINIMUM_DELAY) {
      delay = MINIMUM_DELAY;
    }

    this.timer = setTimeout(() => this.fetchNextGeneration(), delay);
  };

  render() {
    console.log("this.props", this.props);
    const { generation } = this.props;

    return (
      <div>
        <h3>Generation {generation.generationId}. Expires on:</h3>
        <h4>{new Date(generation.expiration).toString()}</h4>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const generation = state.generation;

  return {
    generation
  };
};

// const fetchGeneration = () => dispatch => {
//   return fetch("http://localhost:3000/generation")
//     .then(response => response.json())
//     .then(json => {
//       dispatch(generationActionCreator(json.generation));
//     })
//     .catch(error => console.error("error", error));
// };

const componentConnector = connect(
  mapStateToProps,
  { fetchGeneration }
);

export default componentConnector(Generation);
//takes entire component class as its argument above, wraps around it
