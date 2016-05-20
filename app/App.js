import React from 'react';
import {render} from 'react-dom';
import KanbanBoard from './KanbanBoard';

let cardsList = [
    {
        id: 1,
        title: "Read the Book",
        description: "I should read the **whole** book",
        color: "#bd8d31",
        status: "in-progress",
        tasks: []
    },
    {
        id: 2,
        title: "Write some code",
        description: "Code along with the samples in the book. Found source code at [github](https://google.com)",
        color: "red",
        status: "todo",
        tasks: [
            {
                id: 1,
                name: "ContactList Example",
                done: true
            },
            {
                id: 2,
                name: "Kanban Example",
                done: false
            },
            {
                id: 3,
                name: "My own experiments",
                done: false
            }
        ]
    },

    {
        id: 3,
        title: "Something done",
        description: "DONE",
        color: "green",
        status: "done",
        tasks: []
    }
];

render(<KanbanBoard cards={cardsList} />, document.getElementById('root'));
