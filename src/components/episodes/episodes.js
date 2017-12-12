import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as episodesActions from '../../actions/episodesActions';
import EpisodeList from './EpisodeList';
import './Episodes.css';

const Episodes = ({ state, actions }) => {
  console.log(actions);
  return(
    <div className="episodes">

      <EpisodeList episodes={state.episodes} parentId={state.parentId} 
        addEpisode={item => {
          actions.addItem(item);

        }
      }/>
    </div>
  )
};

Episodes.propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => {

  return {
    state:{
      episodes: state.episodes.filter(e => (e.parentId === ownProps.parentId)),
      parentId: ownProps.parentId,
    }
   
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(episodesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Episodes);
