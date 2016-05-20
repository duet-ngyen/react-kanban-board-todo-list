import React, {Component, PropTypes} from 'react';


class CheckList extends Component {
    handleClick() {
        this.refs.myTextInput.focus();
    }

    render() {
        let tasks = this.props.tasks.map((task) => (
            <li className="checklist__task" key={task.id}>
                <input type="checkbox" defaultChecked={task.done}/>
                {task.name}
                <a href="#" className="checklist__task--remove"/>
            </li>
        ));

        return (
            <div className="checklist">
                <ul>{tasks}</ul>
                <input type="text"
                       className="checklist--add-task"
                       placeholder="Type then hit enter to add a task"
                       ref="myTextInput"/>
                <input type="button"
                       value="Forcus to input"
                       onClick={this.handleClick.bind(this)}/>
            </div>
        );
    }
}

CheckList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object)
}

export default CheckList;
