const TodoInput = ({ text, setText, addTodo }) => {
    return (
                <div className='input_wrapper'>
            <input
                type='text'
                name='text'
                value={text}
                placeholder='Create a new todo'
                onChange={(e) => {
                    setText(e.target.value);
                }}
            />
            <button className='add_buttom' onClick={addTodo}><img src="https://cdn-icons-png.flaticon.com/512/117/117885.png" alt="" /></button>
        </div>
    )
}

export default TodoInput