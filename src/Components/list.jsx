import React from "react"

export const List = ({feedback})=> {
    if (feedback.name==='Name'){
        return (
            <ul className="list">
                <li className="list-item">
                    <div><strong>{feedback.name}</strong></div>
                    <div><strong>{feedback.comment}</strong></div>
                </li>
            </ul>
        )
    }
    return (
        <ul className="list">
            <li className="list-item">
                <div>{feedback.name}</div>
                <div>{feedback.comment}</div>
            </li>
        </ul>
    )
}