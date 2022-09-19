import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';


const TodoLists = () => {

    const todos = useSelector((state) => state.todoReducer);
    console.log(todos)
    return (
        <div
            class="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto"
        >
            {/* <!-- todo --> */}

            {
                todos.map((todo, index) => <Todo
                    todo={todo}
                    key={index}
                ></Todo>)
            }





        </div>
    );
};

export default TodoLists;