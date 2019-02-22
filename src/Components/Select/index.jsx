import React from 'react'
import {Form} from 'react-bootstrap'

export default function TimeSelect (props) {
  return (
    <Form.Control 
      as="select"
      value={props.value || null}
      onChange={props.onChange}
      {...props}
    >
      {props.data.map((obj, i)=><option value={obj.value}>{obj.text}</option>)}
    </Form.Control>

    
  )
}