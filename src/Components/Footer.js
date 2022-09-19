import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { colorChanged, statusChanged } from '../redux/filters/actions';
const numberOfTodos = (no_of_todos) => {
    switch (no_of_todos) {
        case 0:

            return 'No Task'
        case 1:
            return " 1  Task"

        default:
            return `${no_of_todos} Tasks`;
    }

}


const Footer = () => {

    const todos = useSelector((state) => state.todoReducer);
    const filters = useSelector((state) => state.filterReducer);

    const { status, color } = filters;
    console.log(status)

    const dispatch = useDispatch()

    const remainignTask = todos.filter(todo => !todo.completed).length;

    const handleStatusChange = (status) => {
        dispatch(statusChanged(status))
    };

    const handleColorChange = (colors) => {
        if (color.includes(colors)) {
            dispatch(colorChanged(colors, 'removed'))
        } else {
            dispatch(colorChanged(colors, 'added'))
        }
    }

    console.log(color.includes('red'))

    return (
        <div class="mt-4 flex justify-between text-xs text-gray-500">
            <p>{numberOfTodos(remainignTask)} Left</p>
            <ul class="flex space-x-1 items-center text-xs">
                <li
                    onClick={() => handleStatusChange('All')}

                    class={`cursor-pointer ${status === 'All' && 'font-bold'}`}

                >All</li>
                <li>|</li>
                <li
                    onClick={() => handleStatusChange('Incomplete')}
                    class={`cursor-pointer ${status === 'Incomplete' && 'font-bold'}`}
                >Incomplete</li>
                <li>|</li>
                <li
                    onClick={() => handleStatusChange('Complete')}
                    class={`cursor-pointer ${status === 'Complete' && 'font-bold'}`}
                >Complete</li>
                <li></li>
                <li></li>
                <li
                    onClick={() => handleColorChange('green')}
                    class={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${color.includes("green") && 'bg-green-500'}`}

                ></li>
                <li
                    onClick={() => handleColorChange('red')}
                    class={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${color.includes("red") && 'bg-red-500'}`}
                ></li>
                <li
                    onClick={() => handleColorChange('yellow')}

                    class={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer  ${color.includes("yellow") && 'bg-yellow-500'}`}
                ></li>
            </ul>
        </div>
    );
};

export default Footer;