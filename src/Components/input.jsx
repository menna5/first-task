import React from "react";

export const Input = ({type, placeholder, value, onChange}) => {
    if(type == 'textarea'){
        return (
            <textarea className='input' placeholder={placeholder} value={value} onChange={onChange} />
        )
    }
    return (
        <input className='input' type={type} placeholder={placeholder} value={value} onChange={onChange} />
    )
}

