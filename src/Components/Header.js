import React, { useState } from 'react';
import noteImage from '../assets/images/notes.png';
import tickImage from '../assets/images/double-tick.png';
import plusImage from '../assets/images/plus.png';
import { useDispatch } from 'react-redux';
import { added, allCompleted, clearCompleted } from '../redux/todos/actions';

const Header = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState('');

    const handleInput = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(added(input))
        setInput('')
    }

    const handleComplete = () => {
        dispatch(allCompleted())
    }
    const handleCelarCompleted = () => {
        dispatch(clearCompleted())
    }

    console.log(input)
    return (
        <div>
            <form onSubmit={handleSubmit}
                class="flex items-center bg-gray-100 px-4 py-4 rounded-md"
            >
                <img
                    src={noteImage}
                    class="w-6 h-6"
                    alt="Add todo"
                />
                <input
                    type="text"
                    placeholder="Type your todo"
                    class="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                    value={input}
                    onChange={handleInput}
                />
                <button
                    type="submit"
                    class={`appearance-none w-8 h-8 bg-[url(${plusImage})] bg-no-repeat bg-contain`}
                ></button>
            </form>

            <ul class="flex justify-between my-4 text-xs text-gray-500">
                <li
                    onClick={handleComplete} class="flex space-x-1 cursor-pointer">
                    <img
                        class="w-4 h-4"
                        src={tickImage}
                        alt="Complete"
                    />
                    <span>Complete All Tasks</span>
                </li>
                <li onClick={handleCelarCompleted} class="cursor-pointer">Clear completed</li>
            </ul>
        </div>
    );
};

export default Header;