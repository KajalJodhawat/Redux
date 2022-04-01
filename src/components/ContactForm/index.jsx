import React from 'react'
import { useState } from 'react'
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { AddContact } from '../../Redux/Action/ContactAction';
import shortid from "shortid";

export default function ContactForm() {
  let history = useHistory();
  const dispatch = useDispatch()
  const [Email, setEmail] = useState('');
  const [number, setnumber] = useState('');

  const submithandler = () => {

    const formdata = {
      id: shortid.generate(),
      Email: Email,
      Number: number
    }


    dispatch(AddContact(formdata));
    console.log("formdata" + JSON.stringify(formdata));
    history.push("/ShowContact");
  }
  return (
    
    <div className="container-fluid">
      <h1 className="text-center text-dark py-3 display-2" style={{fontSize:40, fontWeight:"bold"}}>Contact Form</h1>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
          <form >
            <div className="form-group">
              <input
                className="form-control my-2"
                type="email"
                placeholder="Email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Phone"
                value={number}
                onChange={(e) => setnumber(e.target.value)}
              />
            </div>
            <div className="form-group my-3">
              <input
                className="btn btn-block btn-dark"
                type="submit"
                onClick={submithandler}
                value="Add Contact"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
