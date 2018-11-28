import React, { Component } from "react";
import { connect } from "react-redux";
// import {generationActionCreator} from '../actions/generation';

const MINIMUM_DELAY = 3000;

class Generation extends Component {
  timer = null; //object that has not been set yet

  componentDidMount() {
    this.fetchGeneration();
  }
  componentWillUnMount() {
    clearTimeout(this.timer);
  }

  fetchGeneration = () => {
    fetch("http://localhost:1234/generation")
      .then(response => response.json())
      .then(json => {
        this.props.dispatch(generationActionCreator(json.generation));
      })
      .catch(error => console.error("error", error));
  };

  fetchNextGeneration = () => {
    this.fetchGeneration();

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
        {" "}
        <h3> Generation {generation.generationId}.Expires on : </h3>{" "}
        <h4> {new Date(generation.expiration).toString()} </h4>{" "}
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

const componentConnector = connect(mapStateToProps);

export default componentConnector(Generation);
//takes entire component class as its argument above, wraps around it
