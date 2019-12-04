import React from 'react';

export default class TodoCreate extends React.Component {

    // här skapas input fältet för nya inmatning todo list som onsubmit går till
    //metoden handleCreate

    render() {
        return (
            <form className="create form-horizontal" onSubmit={this.handleCreate.bind(this) }>
                <div className="form-group">
                    <div className="col-md-10">
                        <input className="form-control" type="text" ref="createInput" placeholder="Todo ..." />
                    </div>
                    <div className="col-md-2 text-right">
                        <button type="submit" className="btn btn-default">Add</button>
                    </div>
                </div>
            </form>
        )
    }

    // Add knappen:den metoden tar in input texten och kollar om är inte tomt så skapas en ny


    handleCreate(event) {
        event.preventDefault();

        const createInput = this.refs.createInput;
        const task = createInput.value;

        // om värdet i från input är inte tomt så lägger namnet till listan
        if (task.valueOf('')) {
            this.props.createTask(task);
        }
        // den här tömmer input värdet efter inmatningen
        createInput.value = '';
    }

}