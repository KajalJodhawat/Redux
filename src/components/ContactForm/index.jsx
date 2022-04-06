import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { AddContact, getContact, updateContact } from '../../Redux/Action/ContactAction';

import shortid from "shortid";

export default function ContactForm() {

  let { id } = useParams();
  console.log("id", id);
  let history = useHistory();
  const dispatch = useDispatch()
  const [Email, setEmail] = useState('');
  const [number, setnumber] = useState('');
  const getcontactSelector = useSelector((state) => state.contacts.contact)
  console.log("getcongetcontactSelector", getcontactSelector);

  const submithandler = (e) => {
     e.preventDefault()

    const formdata = {
      id: shortid.generate(),
      Email: Email,
      Number: number
    }
    if (id) {
      const formdata = {
        id: id,
        Email: Email,
        Number: number
      }
      dispatch(updateContact(formdata));
      history.push("/ShowContact");
    }

    else {
      dispatch(getContact(""));
      dispatch(AddContact(formdata));
      console.log("formdata" + JSON.stringify(formdata));
      history.push("/ShowContact");
    }
  }
  useEffect(() => {
    if (id) {
      dispatch(getContact(id));
    }
  }, [id]);

  useEffect(() => {
    console.log("getcontactSelector", getcontactSelector);
    if (getcontactSelector != null) {
      setEmail(getcontactSelector.Email)
      setnumber(getcontactSelector.Number)

    }
  }, [getcontactSelector]);

  return (

    <div className="container-fluid">
      <h1 className="text-center text-dark py-3 display-2" style={{ fontSize: 40, fontWeight: "bold" }}>Contact Form</h1>
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
              <button
                type="submit"
                onClick={submithandler}
                className="btn btn-block btn-dark"
              >
                {id ? "Update Contact" : "Add Contact"}
              </button>
            </div>

          </form>

        </div>
      </div>

    </div>
  )
}
