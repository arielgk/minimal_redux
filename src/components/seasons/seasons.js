import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as seasonsActions from "../../actions/seasonsActions";
import SeasonList from "./SeasonList";
import AddSeason from "./AddSeason";

const Seasons = ({ state, actions }) => {
  console.log(actions);

  return (
    <div>
      <AddSeason
        onSave={season => {
          actions.addItem(season);
        }}
      />
      <SeasonList seasons={state.seasons} episodes={state.episodes} />
    </div>
  );
};

Seasons.propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    state: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(seasonsActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Seasons);
