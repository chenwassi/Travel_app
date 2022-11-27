import axios from "axios";
import React from "react";
import './Comments.jsx'
import { FaTrash } from 'react-icons/fa';
import { GrEdit } from 'react-icons/gr';
// import { format } from "timeago.js";

export default function Comments({ id,name,text,date,pic}) {
 
const nameFromLocal = localStorage.getItem('userName')
  const deleteComment = async ()=>{
 if(name == nameFromLocal){
  const data  = await axios.delete(`http://localhost:8800/comments/${id}`)
  return data
 }
}

  return (
      <div className="container mt-5">
        <div className="row  d-flex justify-content-center">
          <div className="col-md-8">
            <div className="headings d-flex justify-content-between align-items-center mb-3">

            
            </div>
            <div className="card p-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="user d-flex flex-row align-items-center">
                  <img
                    src={pic}
                    width="30"
                    className="user-img rounded-circle mr-2"
                  />
                  <span>
                    <small className="font-weight-bold text-primary">
                      {name}
                    </small>{" "}
                    <small className="font-weight-bold">
                      {text}
                    </small>
                  </span>
                </div>

                {/* <small><span className="date">{format()}</span></small> */}
              </div>

              <div className="action ">
                <div className="reply px-4 d-flex ">
                  <button className="m-2" onClick={()=>deleteComment()}>{name==nameFromLocal?<FaTrash/>:null}</button>
                  <button className="m-2">{name==nameFromLocal?<GrEdit/>:null}</button>
                </div>

                {/* <div className="icons align-items-center">
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-check-circle-o check-icon"></i>
                </div> */}

              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
