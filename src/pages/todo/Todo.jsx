import React, { Component } from 'react';
import { store } from '../../index';
import { connect } from 'react-redux';
import { deleteTodoAction, editTodoAction } from '../actions';

//components
import Modal from '../../components/Modal';

class TodoPage extends Component {
    static path = '/todos-list/';

    constructor(props) {
        super(props);

        this.actualStore = store.getState();

        this.state = {
            isModalOpen: false,
            id: '',
            title: '',
            date: ''
        };
    }

    handleClose = () => {
        const { id, title, date } = this.getCurrentItemFromStore();
        this.setState({
            isModalOpen: false,
            id: id,
            title: title,
            date: date
        });
    };

    handleEdit = () => {
        const { editTodo } = this.props;
        this.setState({
            isModalOpen: true,
            // title: this.state.title,
            // id: this.state.id,
            action: editTodo
        });
    };

    handleDelete = () => {
        this.props.deleteTodo(this.todos, this.todo);
        this.setState({
            title: 'Задача удалена',
            date: ''
        });
    };

    getCurrentItemFromStore = () => {
        this.id = Number(this.props.match.params.id);
        this.todos = this.actualStore.todosReducer.todos || [];
        this.todo = this.todos.filter(item => item.id === this.id)[0] || '';
        return this.todo;
    };

    componentDidMount() {
        const { id, title, date } = this.getCurrentItemFromStore();
        this.setState({
            // isModalOpen: false,
            id: id,
            title: title,
            date: date
        });
    }

    render() {
        const { id, title, date, isModalOpen } = this.state;

        const jumbotron = (
            <div className="jumbotron">
                <h1>{title}</h1>
                <span>{date}</span>
                <div className="btns-controls">
                    <button onClick={this.handleEdit} className="btn btn-success">
                        edit
                    </button>
                    <button onClick={this.handleDelete} className="btn btn-success">
                        del
                    </button>
                </div>
            </div>
        );

        const modalElement = isModalOpen && <Modal todoId={id} title={title} action={this.props.editTodo} onClose={this.handleClose} />;
        const content = !title ? <b>Все задачи удалены</b> : jumbotron;

        return (
            <div className="container">
                {content}
                {modalElement}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        todosReducer: state.todosReducer
    };
}

function mapDispathToProps(dispatch) {
    return {
        deleteTodo: (todos, item) => dispatch(deleteTodoAction(todos, item)),
        editTodo: (todos, item, id) => dispatch(editTodoAction(todos, item, id))
    };
}

export default connect(mapStateToProps, mapDispathToProps)(TodoPage);
