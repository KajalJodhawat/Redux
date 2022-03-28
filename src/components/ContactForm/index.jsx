import React from 'react'
import { useState } from 'react'
import { useDispatch } from "react-redux";
import { AddContact, ContactAction } from '../../Redux/Action/ContactAction';

export default function ContactForm() {
  const dispatch = useDispatch()
  const [Email,setEmail] = useState('');
  const [number,setnumber] = useState('');

  const submithandler = () => {
    
    const formdata = {
        Email: Email,
        number: number
    }
    dispatch(AddContact(formdata));
    console.log("formdata"+JSON.stringify(formdata));
  }
  return (
    <div className='container'>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">Email</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter email" 
           onChange={(e) => setEmail(e.target.value)} />
         
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">Mobile Number</label>
          <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter Mobile number" 
          onChange={
            (e)=> setnumber(e.target.value)
          } />
          
        </div>
        <div>
          <button type='submit' onClick={submithandler}>Submit</button>
        </div>
      </div>
  )
}
