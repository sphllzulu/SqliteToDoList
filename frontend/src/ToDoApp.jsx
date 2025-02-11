

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';

// const TodoApp = () => {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState('');
//   const [editingId, setEditingId] = useState(null);
//   const [editText, setEditText] = useState('');

//   // Fetch all to-dos
//   useEffect(() => {
//     axios.get('http://localhost:5000/todos')
//       .then(response => setTodos(response.data))
//       .catch(error => console.error(error));
//   }, []);

//   // Add a new to-do
//   const addTodo = () => {
//     axios.post('http://localhost:5000/todos', { text: newTodo })
//       .then(response => {
//         setTodos([...todos, { id: response.data.id, text: newTodo, completed: false }]);
//         setNewTodo('');
//       })
//       .catch(error => console.error(error));
//   };

//   // Update a to-do's text
//   const updateTodoText = (id, newText) => {
//     axios.put(`http://localhost:5000/todos/${id}`, { text: newText })
//       .then(() => {
//         setTodos(todos.map(todo =>
//           todo.id === id ? { ...todo, text: newText } : todo
//         ));
//         setEditingId(null);
//       })
//       .catch(error => console.error(error));
//   };

//   // Toggle a to-do's completion status
//   const toggleComplete = (id, completed) => {
//     axios.put(`http://localhost:5000/todos/${id}`, { completed: !completed })
//       .then(() => {
//         setTodos(todos.map(todo =>
//           todo.id === id ? { ...todo, completed: !completed } : todo
//         ));
//       })
//       .catch(error => console.error(error));
//   };

//   // Delete a to-do
//   const deleteTodo = (id) => {
//     axios.delete(`http://localhost:5000/todos/${id}`)
//       .then(() => {
//         setTodos(todos.filter(todo => todo.id !== id));
//       })
//       .catch(error => console.error(error));
//   };

//   return (
//     <div>
//       <h1>To-Do List</h1>
//       <input
//         type="text"
//         value={newTodo}
//         onChange={(e) => setNewTodo(e.target.value)}
//         placeholder="Add a new to-do"
//       />
//       <button onClick={addTodo}>Add</button>
//       <ul>
//         {todos.map(todo => (
//           <li key={todo.id}>
//             {editingId === todo.id ? (
//               <>
//                 <input
//                   type="text"
//                   value={editText}
//                   onChange={(e) => setEditText(e.target.value)}
//                 />
//                 <button onClick={() => updateTodoText(todo.id, editText)}>Save</button>
//                 <button onClick={() => setEditingId(null)}>Cancel</button>
//               </>
//             ) : (
//               <>
//                 <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
//                   {todo.text}
//                 </span>
//                 <button onClick={() => {
//                   setEditingId(todo.id);
//                   setEditText(todo.text);
//                 }}>
//                   Edit
//                 </button>
//               </>
//             )}
//             <button onClick={() => toggleComplete(todo.id, todo.completed)}>
//               {todo.completed ? 'Undo' : 'Complete'}
//             </button>
//             <button onClick={() => deleteTodo(todo.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoApp;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
`;

const Input = styled.input`
  width: calc(100% - 100px);
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const TodoList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const TodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
`;

const TodoText = styled.span`
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
  color: ${props => (props.completed ? '#888' : '#333')};
`;

const EditInput = styled.input`
  padding: 5px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ActionButton = styled.button`
  padding: 5px 10px;
  margin-left: 5px;
  border: none;
  border-radius: 4px;
  background-color: ${props => (props.danger ? '#dc3545' : '#6c757d')};
  color: white;
  cursor: pointer;

  &:hover {
    background-color: ${props => (props.danger ? '#c82333' : '#5a6268')};
  }
`;

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  // Fetch all to-dos
  useEffect(() => {
    axios.get('http://localhost:5000/todos')
      .then(response => setTodos(response.data))
      .catch(error => console.error(error));
  }, []);

  // Add a new to-do
  const addTodo = () => {
    axios.post('http://localhost:5000/todos', { text: newTodo })
      .then(response => {
        setTodos([...todos, { id: response.data.id, text: newTodo, completed: false }]);
        setNewTodo('');
      })
      .catch(error => console.error(error));
  };

  // Update a to-do's text
  const updateTodoText = (id, newText) => {
    axios.put(`http://localhost:5000/todos/${id}`, { text: newText })
      .then(() => {
        setTodos(todos.map(todo =>
          todo.id === id ? { ...todo, text: newText } : todo
        ));
        setEditingId(null);
      })
      .catch(error => console.error(error));
  };

  // Toggle a to-do's completion status
  const toggleComplete = (id, completed) => {
    axios.put(`http://localhost:5000/todos/${id}`, { completed: !completed })
      .then(() => {
        setTodos(todos.map(todo =>
          todo.id === id ? { ...todo, completed: !completed } : todo
        ));
      })
      .catch(error => console.error(error));
  };

  // Delete a to-do
  const deleteTodo = (id) => {
    axios.delete(`http://localhost:5000/todos/${id}`)
      .then(() => {
        setTodos(todos.filter(todo => todo.id !== id));
      })
      .catch(error => console.error(error));
  };

  return (
    <Container>
      <Title>To-Do List</Title>
      <div>
        <Input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new to-do"
        />
        <Button onClick={addTodo}>Add</Button>
      </div>
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.id}>
            {editingId === todo.id ? (
              <>
                <EditInput
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <ActionButton onClick={() => updateTodoText(todo.id, editText)}>Save</ActionButton>
                <ActionButton onClick={() => setEditingId(null)}>Cancel</ActionButton>
              </>
            ) : (
              <>
                <TodoText completed={todo.completed}>
                  {todo.text}
                </TodoText>
                <ActionButton onClick={() => {
                  setEditingId(todo.id);
                  setEditText(todo.text);
                }}>
                  Edit
                </ActionButton>
              </>
            )}
            {/* <ActionButton onClick={() => toggleComplete(todo.id, todo.completed)}>
              {todo.completed ? 'Undo' : 'Complete'}
            </ActionButton> */}
            <ActionButton danger onClick={() => deleteTodo(todo.id)}>Delete</ActionButton>
          </TodoItem>
        ))}
      </TodoList>
    </Container>
  );
};

export default TodoApp;