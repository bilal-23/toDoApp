import React from 'react';

const TaskContext = React.createContext({
    tasks: [],
    addTask: (task) => { },
    deleteTask: (id) => { },
    completeTask: (id) => { }
})

export default TaskContext