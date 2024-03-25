const TodoList = ({ list, remove, edit, checked, onChange }) => {
    return (
      <>
        {list?.length > 0 ? (
          <ul className='todo_list'>
            {list.map((entry, index) => (
              <div className='todo' key={index}>
                <li>{entry}</li>
                <input
                  type="checkbox"
                  id="check"
                  checked={checked[index]}
                  onChange={() => onChange(index)}
                />
                <button className="edit_button" onClick={() => { edit(index) }}>
                  <img id="edit" src="https://cdn-icons-png.flaticon.com/512/4400/4400433.png"  alt="" />
                </button>
                <button
                  className='delete_button'
                  onClick={() => { remove(index) }}
                >
                  <img id="del" src="https://cdn-icons-png.flaticon.com/256/219/219300.png"    alt="" />
                </button>
              </div>
            ))}
          </ul>
        ) : (
          <div className='empty'>
            <p>No task found</p>
          </div>
        )}
      </>
    );
  };
  
  export default TodoList;