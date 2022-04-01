import React from 'react'
import { useState } from 'react'
import { useHistory } from "react-router-dom";

export default function UpdateContact() {
    const history = useHistory();
    const [Email, setEmail] = useState('');
    const [number, setnumber] = useState('');
    const submithandler = () => {

        const formdata = {
            //   id: shortid.generate(),
            Email: Email,
            Number: number
        }


        // dispatch(updateContact(formdata));
        // console.log("formdata" + JSON.stringify(formdata));
        history.push("/ShowContact");
    }
    return (
        <>
            <div className="container-fluid">
                <h5 className="text-center text-dark py-2 display-2" style={{fontSize:40, fontWeight:"bold"}}>Update Form</h5>
                <div className="row d-flex flex-column">

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
                            <div className="form-group d-flex align-items-center justify-content-between my-2">
                                <button type="submit" className="btn btn-primary">
                                    Update Contact
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
                
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button class="btn btn-outline-dark me-md-2" type="button" onClick={() => history.push("/ShowContact")}>Go Back</button>
            </div>



        </>
    )
}
