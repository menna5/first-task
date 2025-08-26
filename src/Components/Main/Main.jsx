import "./Main.css";
import React, { useState, useEffect } from "react";
import { Input } from "../input";
import { Button } from "../btn";
import { List } from "../list";

function Main() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem("items")) ?? []
  );

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const onSubmit = (name, comment) => {
    if (!name || !comment) {
      alert("Please fill in all fields");
    } else {
      setItems([...items, { id: Date.now(), name, comment }]);
      setName("");
      setComment("");
    }
  };

  const toDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const editItem = (item) => {
    setName(item.name);
    setComment(item.comment);
    setItems(items.filter((i) => i.id !== item.id));
  };

  const clearAll = () => {
    setItems([]);
    localStorage.clear();
  };

  return (
    <div className="app">
      <div className="inputs">
        <h3>Feedback Form</h3>
        <div>
          <label>Name: </label>
          <Input
            type="text"
            placeholder="Enter Name .."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Comment: </label>
          <Input
            type="textarea"
            placeholder="Enter Comment .."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <Button onClick={() => onSubmit(name, comment)} label="Submit" />
      </div>
      <div className="header">
        <List
          className="header"
          feedback={{ name: "Name", comment: "Comment" }}
        />
      </div>
      <div className="list-container">
        {items.length === 0 && (
          <p style={{ textAlign: "center" }}>No Items in the list</p>
        )}
        {items.map((item) => {
          return (
            <List
              feedback={item}
              key={item.id}
              toDelete={() => toDelete(item.id)}
              editItem={() => {
                editItem(item);
              }}
            />
          );
        })}
      </div>
      <Button onClick={() => clearAll()} label="Clear All" />
    </div>
  );
}

export default Main;
