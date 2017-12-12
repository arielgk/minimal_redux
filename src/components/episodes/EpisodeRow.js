import React from "react";
import PropTypes from "prop-types";


const EpisodeRow = ({id,title,parentId})=>{
  return (
    <div className="episodes">---- {title}</div>
  )
}

EpisodeRow.propTypes = {
  id:PropTypes.number.isRequired,
  title:PropTypes.string.isRequired,
  parentId:PropTypes.number.isRequired
}

export default EpisodeRow;