import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function MyVerticallyCenteredModal(props) {
    const name = localStorage.getItem('userName')
    const placeId = sessionStorage.getItem('placeId')
    const [dataComment,setDataComment]=useState({userName:name,placeId:placeId,text:''})
    const [btnAdd,setbtnADD]=useState(false)

    const addComment = async(obj)=>{
        const {data} =await axios.post('http://localhost:8800/comments',obj)
        setbtnADD(!btnAdd)
        return data
    }
    const handleInput=(e)=>{
        setDataComment({...dataComment,text:e.target.value})
    }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Add Comment
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
         <textarea onChange={handleInput} placeholder='text'></textarea>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={()=>addComment(dataComment)}><span onClick={props.onHide}>add</span></Button>
      </Modal.Footer>
    </Modal>
  );
}

