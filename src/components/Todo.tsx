import React from 'react';

interface TodoProps {
    text: string;
}

function deleteHandler() {

}

function Todo({ text }: TodoProps) {
    return (
        <div className='card'>
            <h2>{text}</h2>
            <div className='actions'>
                <button className='btn' onClick={deleteHandler}>Delete</button>
            </div>
        </div>
    );
}

export default Todo;