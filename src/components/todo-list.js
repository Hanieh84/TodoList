import React from 'react';
// det är en biblotek från react som finns typ allt som man behöver för att kunna skapa/hitta/delete
import lodash from 'lodash';
import TodoListItem from './todo-list-item';

/*
 den här klassen visar upp värdet av listan som tar in andra klassen
 todo-list-item for att lägger in flera items i en map i klassen.
 render vissar upp hela listan på sidan.
 index är position i listan och todo är själva todos namn
 */

export default class TodoList extends React.Component {

    renderTodoItems() {
        const props = lodash.omit(this.props, 'todos');
        return lodash.map(this.props.todos,
            (todo, index) => <TodoListItem key={index} {...todo} {...props} />);
    }

    render() {
        return (
            <div className="list form-horizontal">
                {this.renderTodoItems()}
            </div>
        )
    }
}