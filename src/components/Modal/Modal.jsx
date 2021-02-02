import React, { Component } from 'react';
import { connect } from 'react-redux';
import { todosActionTypes, ERROR_MESSAGE } from '../../constants/todos';

import Input from '../ui/input';
import './Modal.scss';

import ReactDom from 'react-dom';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.todoId,
      title: this.props.title,
      error: ''
    };

    this.root = document.createElement('div');
    document.body.appendChild(this.root);
  }

  componentWillUnmount() {
    document.body.removeChild(this.root);
    this.root = null;
  }

  handleChangeTodo = title => {
    this.setState({ title });
  };

  handleSave = () => {
    const {
      action,
      onClose,
      todosReducer: { todos }
    } = this.props;
    const { title, id } = this.state;

    if (!title) {
      this.setState({ error: ERROR_MESSAGE });
    } else {
      action(todos, title, id);
      onClose();
    }
  };

  handleClose = () => {
    this.props.onClose();
  };

  render() {
    const { title, error } = this.state;

    return ReactDom.createPortal(
      <div className="modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <Input onInputChange={this.handleChangeTodo} value={title} error={error} />
            </div>
            <div className="modal-footer">
              <button onClick={this.handleSave} type="submit" className="btn btn-primary">
                Save changes
              </button>
              <button onClick={this.handleClose} type="button" className="btn btn-secondary">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>,
      this.root
    );
  }
}

function mapStateToProps(state) {
  return {
    todosReducer: state.todosReducer
  };
}

export default connect(mapStateToProps, null)(Modal);
