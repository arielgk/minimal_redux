import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as itemsAction from "../../actions/itemsAction";
import ItemList from "./ItemList";
import AddItem from "./AddItem";

const Items = ({ state, actions }) => {
  return (
    <div>
      <AddItem
        onSave={item => {
          actions.addItem(item);
        }}
      />
      <ItemList items={state.items} />
    </div>
  );
};

Items.propTypes = {
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
    actions: bindActionCreators(itemsAction, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Items);
