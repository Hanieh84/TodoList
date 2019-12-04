import React from 'react';
//Edit och Delete

export default class TodoListItem extends React.Component {

    constructor(props) {
        super(props);

        // skapas en boolean som isEditing med värdet false
        this.state = {
            isEditing: false
        };
    }

    // metoden säger om knappen Edit aktiveras så går fokusen på input fältet
    componentDidUpdate() {
        if (this.state.isEditing) {
            this.refs.editInput.focus();
        }
    }

    // aktiveras Edit knappen
    onEditClick() {
        this.setState({isEditing: true});
    }


    // här kommer nya värdet som ska ersättas till den gamla och uppdatera den,
    // till slut skickas värdet till saveTask() method som finns i App.js klassen
    onSaveClick(event) {
        event.preventDefault();

        const oldTask = this.props.task;
        const newTask = this.refs.editInput.value;
        this.props.saveTask(oldTask, newTask);
        this.setState({isEditing: false});
    }

    // render aktiveras två methoder:renderTaskSection,renderActionSection
    
    render() {
        return (
            <div className="form-group">
                {this.renderTaskSection()}
                {this.renderActionSection()}
            </div>
        )
    }
    // den här methoden skapas endast två knappar Edit/Delete
    renderActionSection() {
        return (
            <div className="col-md-3 text-right">
                <button className="btn btn-primary btn-xs" onClick={this.onEditClick.bind(this) }>Edit</button>
                &nbsp; &nbsp; &nbsp;
                <button className="btn btn-primary btn-xs" onClick={this.props.deleteTask.bind(this, this.props.task) }>Delete</button>
            </div>
        )
    }
    //Den här metoden ändras färg på list item och skapas en ny input för att ändra item

    renderTaskSection() {
        const {task, isCompleted} = this.props;

        const taskStyle = {
            color: isCompleted ? '#b82014' : '#1e61d9',
            cursor: 'pointer'
        };

        /*
         skapas input fält ovanpå texten för att ändra värdet
         defaultValue={task} task är gamla värdet som skickas till input fältet som default
         så ändras väret isEditing: false till True
         till slut skickas nya värdet till methoden onSaveClick()
         */
        if (this.state.isEditing) {
            return (
                <label className="col-md-7 text-left">
                    <form onSubmit={this.onSaveClick.bind(this) }>
                        <input className="form-control input-sm" defaultValue={task} ref="editInput" type="text"/>
                    </form>
                </label>
            )
        }

        /*
        Här ändras värdet till två olicka färger som läst eller oläst
         */
        return (
            <label className="col-md-7 text-left text" style={ taskStyle } onClick={this.props.toggleTask.bind(this, task) }>
                {task}
            </label>
        )
    }

}