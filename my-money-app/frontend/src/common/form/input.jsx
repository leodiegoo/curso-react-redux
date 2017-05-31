import React from 'react'

export default props => (
    <input {...props.input} 
        className='form-control'
        placeholder={props.placeholder}
        readOnly={props.readonly}
        type={props.type} />
)