import React from "react"
import { Button } from "./btn"

export const List = ({feedback, toDelete, editItem})=> {
    if (feedback.name==='Name'){
        return (
          <ul className="list">
            <li className="list-item">
              <div>
                <strong>{feedback.name}</strong>
              </div>
              <div>
                <strong>{feedback.comment}</strong>
              </div>
              <div>
                <strong>Setting</strong>
              </div>
            </li>
          </ul>
        );
    }
    return (
      <ul className="list">
        <li className="list-item">
          <div>{feedback.name}</div>
          <div>{feedback.comment}</div>
          <Button onClick={toDelete} label="🗑️" />
          <Button onClick={editItem} label="✏️" />
        </li>
      </ul>
    );
}