import './App.css';
import Header from './mycomponent/Header';
import Footer from './mycomponent/Footer';
import Todos from './mycomponent/Todos';
import Addtodo from './mycomponent/Addtodo';
import About from './mycomponent/About';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  let init_todo;
  if (localStorage.getItem('todos') === null) {
    init_todo = [];
  } else {
    init_todo = JSON.parse(localStorage.getItem('todos'));
  }

  const addtodo = (title, desc) => {
    let sno;
    console.log('title== ', title, ' description== ', desc);
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const mytodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, mytodo]);
  };

  const ondelete = (todo) => {
    console.log('hello', todo);
    setTodos(todos.filter((e) => e !== todo));
  };

  const [todos, setTodos] = useState(init_todo);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="Todo_Manager" searchbar={false} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Addtodo addtodo={addtodo} />
                <Todos todos={todos} btndelete={ondelete} />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
