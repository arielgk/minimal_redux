import React from "react";
import PropTypes from "prop-types";
import EpisodeRow from './EpisodeRow';
import AddEpisode from './AddEpisode';


const EpisodeList = ({ episodes, parentId,addEpisode}) => {
  return (
    <div>
      <h4>Episodes</h4>  

      {episodes.map(episode =>
          <EpisodeRow {...episode}/>
      )
      }
      <AddEpisode addEpisode={addEpisode } parentId={parentId}/>
    </div>
  );
};

EpisodeList.propTypes = {
  episodes:PropTypes.array.isRequired,
  addEpisode:PropTypes.func.isRequired,
};

export default EpisodeList;
