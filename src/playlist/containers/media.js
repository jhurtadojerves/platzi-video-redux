import React, { Component } from 'react'
import Media from '../components/media'
import { connect } from 'react-redux'
import { openModal } from "../../actions";
import { bindActionCreators } from "redux";
import * as actions from "../../actions";

class MediaContainer extends Component{
  openModal = id => {
    this.props.actions.openModal(id)
  }

  render() {
    return <Media openModal={ this.openModal } { ...this.props.data.toJS() }/>
  }
}

const mapStateToProps = (state,  props) => {
  return {
    data: state.get('data').get('entities').get('media').get(props.id)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MediaContainer)