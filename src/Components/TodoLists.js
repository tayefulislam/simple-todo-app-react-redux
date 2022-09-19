import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';


const TodoLists = () => {

    const todos = useSelector((state) => state.todoReducer);
    console.log(todos)

    const filters = useSelector((state) => state.filterReducer);
    console.log(filters)
    return (
        <div
            class="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto"
        >
            {/* <!-- todo --> */}

            {
                todos
                    .filter(todo => {
                        const { status } = filters;
                        switch (status) {
                            case 'Complete':

                                return todo.completed;
                            case 'Incomplete':
                                return !todo.completed;

                            default:
                                return true;
                        }

                    })
                    .filter((todo) => {
                        const { color: colors } = filters;
                        if (colors.length > 0) {

                            return colors.includes(todo.color)

                        }
                        else return true;
                    })
                    .map((todo, index) => <Todo
                        todo={todo}
                        key={index}
                    ></Todo>)
            }





        </div>
    );
};

export default TodoLists;