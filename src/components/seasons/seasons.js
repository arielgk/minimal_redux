import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as seasonsActions from "../../actions/seasonsActions";
import SeasonList from "./SeasonList";
import AddSeason from "./AddSeason";
import './Seasons.css';

const Seasons = ({ state, actions }) => {

  return (
    <div >
     
      <SeasonList seasons={state.seasons} episodes={state.episodes} />
      <span>Add Season</span>  
      <AddSeason
        onSave={season => {
          actions.addItem(season);
        }}
      />
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
