import React from "react";
import PropTypes from "prop-types";


const EpisodeRow = ({id,title,parentId})=>{
  return (
    <div className="episodes">{title}</div>
  )
}

EpisodeRow.propTypes = {
  id:PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  parentId:PropTypes.string.isRequired
}

export default EpisodeRow;