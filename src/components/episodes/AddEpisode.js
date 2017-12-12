import React from "react";
import PropTypes from "prop-types";
import shortId from "shortid";

const AddEpisode = ({ parentId, addEpisode }) => {
  let input;
  return (
    <div className="add-episode">
    <span>Add Episode:</span><br/>
      <input
        type="text"
        ref={node => {
          input = node;
        }}
      />
      <input
        type="submit"
        value="send"
        onClick={() => {
          addEpisode({ id: shortId.generate(), title: input.value, parentId: parentId });
          input.value = "";
        }}
      />
    </div>
  );
};


AddEpisode.propTypes= {
  parentId:PropTypes.string.isRequired,
  addEpisode:PropTypes.func.isRequired,
}

export default AddEpisode;
