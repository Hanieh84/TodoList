import React from 'react';
// lodash är ett modarn javaScript-bibliotek
import lodash from 'lodash';
import TodoCreate from './todo-create';
import TodoList from './todo-list';

/*export default is used to export a single class*/

export default class App extends React.Component {
    constructor(props) {
        super(props);

        // här skapas en tom Array för att lägga in en list av namn todo och andra
        //  klassen kan komma åt till den arryen
        this.state = {
            todos: []
        }
    }
// när man lägger en ny task eftersom den är inte klart som får ett värde false.
    //task:första värde

    createTask(task) {
        this.state.todos.push({
            task,
            isCompleted: false
        });
        this.setState({todos: this.state.todos});
    }

    // tar bort items från listan
    deleteTask(taskToDelete) {
        lodash.remove(this.state.todos, todo => todo.task === taskToDelete);
        this.setState({todos: this.state.todos});
    }

    // hittar todolist från listan
    // sparas och ersättas gamla värdet till den nya.
    // den här metoden är för efter att man trycker på knappen o ändra värde så trycker man på enter.
    saveTask(oldTask, newTask) {
        const foundTodo = lodash.find(this.state.todos, todo => todo.task === oldTask);
        foundTodo.task = newTask;
        this.setState({todos: this.state.todos});
    }

    // ändras värdet
    //här skappas variable foundTodo som med hjälp av
    // lodash.bibkiotek försöker hitta det radet en Arreyen todos.
    // den metoden för att ändra färg på list item

    toggleTask(task) {
        const foundTodo = lodash.find(this.state.todos, todo => todo.task === task);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({todos: this.state.todos});
    }
    /*
    Här returnerar todo-create och todo-list
   TodoCreate som skickar array todos och metoden create new task
   TodoList är en klass som kopplar in Array av todos och save/delete/edit
    */
    render() {
        return (
            <div>
                <h1>Todo-list</h1>
                <div className="td-list-con">

                    <TodoCreate
                        todos={this.state.todos}
                        createTask={this.createTask.bind(this)}
                    />

                    <TodoList
                        todos={this.state.todos}
                        saveTask={this.saveTask.bind(this)}
                        deleteTask={this.deleteTask.bind(this)}
                        toggleTask={this.toggleTask.bind(this)}
                    />
                </div>
            </div>
        )
    }
}

