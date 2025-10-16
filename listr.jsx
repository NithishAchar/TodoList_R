const { useState } = React;

function Listr() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  function addTask() {
    if (task.trim() === "") return;
    setList([{ id: Date.now(), text: task }, ...list]);
    setTask("");
  }

  function removeTask(id) {
    setList(list.filter((t) => t.id !== id));
  }

  function clearTasks() {
    setList([]);
  }

  return (
    <div className="container">
      <h1>Listr</h1>
      <div className="input-area" >
      
        <input
          type="text"
          value={task}
          placeholder="Enter a task..."
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
        <button className="add" onClick={addTask}>Add</button>
        <button className="clear" onClick={clearTasks}>Clear</button>
      </div>
      <div className="task-list">
        {list.length === 0 ? (
          <p style={{ textAlign: "center", opacity: 0.7 }}>No tasks yet.</p>
        ) : (
          list.map((t) => (
            <div key={t.id} className="task">
              <span>{t.text}</span>
              <button className="remove" onClick={() => removeTask(t.id)}>Remove</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Listr />);
 