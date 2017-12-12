import React from "react";
import PropTypes from "prop-types";
import shortId from "shortid";

const AddSeason = ({ onSave }) => {
  let input;
  return (
    <div>
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
          onSave({ id: shortId.generate(), title: input.value });
          input.value = "";
        }}
      />
    </div>
  );
};

export default AddSeason;
