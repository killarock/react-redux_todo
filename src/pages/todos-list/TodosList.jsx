import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodoAction, deleteTodoAction, editTodoAction } from '../actions';
import { Link } from 'react-router-dom';

import Modal from '../../components/Modal';

import './TodosList.scss';

class TodosList extends Component {
  static path = '/';

  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      id: null,
      todoTitle: ``,
      action: null,
    };
  }

  handleClose = () => {
    this.setState({ isModalOpen: false });
  };

  handleDelete = (todos, item) => () => {
    const { deleteTodo } = this.props;
    deleteTodo(todos, item);
  };

  handleAdd = () => {
    console.log(`add new todo`);
    const { addTodo } = this.props;
    this.setState({ isModalOpen: true, todoTitle: '', action: addTodo });
  };

  handleEdit = (item) => () => {
    const { editTodo } = this.props;
    this.setState({ isModalOpen: true, id: item.id, todoTitle: item.title, action: editTodo });
  };

  render() {
    const { isModalOpen, todoTitle, id } = this.state;
    const { todos } = this.props.todosReducer;

    const todosElements = todos.map((item) => {
      const { id, title } = item;
      return (
        <li key={id}>
          <Link to={`todos-list/${id}`}>{title}</Link>
          <div className='controls'>
            <button onClick={this.handleEdit(item)} className='btn btn-info'>
              Редактировать
            </button>
            <button onClick={this.handleDelete(todos, item)} className='btn btn-danger'>
              Удалить
            </button>
          </div>
        </li>
      );
    });

    const modalElement = isModalOpen && (
      <Modal todoId={id} title={todoTitle} action={this.state.action} onClose={this.handleClose} />
    );
    const listElements = todosElements.length > 0 ? todosElements : <b>Элементов нет!</b>;

    return (
      <div className='container'>
        <div className='col-xs-12'>
          <h3 className='todos-list-caption'>Список</h3>
          <ul className='todos-list'>{listElements}</ul>
          <button onClick={this.handleAdd} className='btn btn-secondary'>
            Add new todo
          </button>
          {modalElement}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todosReducer: state.todosReducer,
  };
}

function mapDispathToProps(dispatch) {
  return {
    deleteTodo: (todos, item) => dispatch(deleteTodoAction(todos, item)),
    editTodo: (todos, item, id) => dispatch(editTodoAction(todos, item, id)),
    addTodo: (todos, item) => dispatch(addTodoAction(todos, item)),
  };
}

export default connect(mapStateToProps, mapDispathToProps)(TodosList);
