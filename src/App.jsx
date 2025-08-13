import './App.css'
import React, { useState } from 'react';
import { Input } from './Components/input';
import { Button } from './Components/btn';
import { List } from './Components/list';


function App() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [items, setItems] = useState([]);
  const onSubmit = (name, comment) => {
    if (name == "" && comment == "") {
      alert('Please fill in all fields')
    }
    else if (name === '') {
      alert('Enter your name first')
    }
    else if (comment === '') {
      alert('Enter the comment first')
    }
    else {
      setItems([...items, { name, comment }]);
      setName("");
      setComment("");
    }
  }

  const clearAll = () => {
    setItems([]);
  }

  return (
    <div className="app">
      <div className='inputs'>
        <h3>Feedback Form</h3>
        <label>Name: </label>
        <Input type="text" placeholder="Enter Name .." value={name} onChange={(e) => setName(e.target.value)} />
        <label>Comment: </label>
        <Input type="textarea" placeholder="Enter Comment .." value={comment} onChange={(e) => setComment(e.target.value)} />
        <Button onSubmit={() => onSubmit(name, comment)} label="Submit" />
      </div>
      <div className='list-container'>
        <List feedback={{ name: 'Name', comment: 'Comment' }} />
        {items.map((item, index) => {
          return (
            <List feedback={item} key={index} />
          )
        })}
      </div>
      <Button onSubmit={() => clearAll()} label='Clear All' />
    </div>
  )
}


export default App
