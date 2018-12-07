import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPublicDragons } from "../actions/publicDragons";
import { Link } from "react-router-dom";
import PublicDragonRow from "./PublicDragonRow";

class PublicDragons extends Component {
  componentDidMount() {
    this.props.fetchPublicDragons();
  }

  render() {
    return (
      <div>
        <h3>PublicDragons</h3>
        {this.props.publicDragons.dragon.map(dragon => {
          return (
            <div key={dragon.dragonId}>
              <PublicDragonRow dragon={dragon} />
              <hr />
            </div>
          );
        })}
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default connect(
  ({ publicDragons }) => ({ publicDragons }),
  { fetchPublicDragons }
)(PublicDragons);
