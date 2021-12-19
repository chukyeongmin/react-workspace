import {useState, useEffect} from "react";


function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    console.log(event.target.value);
    setToDo(event.target.value);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === "") {
      return;
    } else {
      setToDos((currentArray) => [toDo, ...currentArray]);
      setToDo("");
    }
    console.log(toDos);
  };
  return (
    <div className="App">
    <h1>My To Do List ({toDo.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange} 
          value={toDo}
          type="text" 
          placeholder="Write yout to do...">
        </input>
        <button>Add To Do List</button>
      </form>
      <hr/>
      <ul>
        {toDos.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
