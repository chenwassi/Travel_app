import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import TextField from '@mui/material/TextField';
import {
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormHelperText,
  FormGroup,
  Checkbox,
} from '@mui/material';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';



export default function Register(props) {
  const navigate = useNavigate()
  const {register,handleSubmit,formState: { errors }} = useForm();
    const [newUser,setNewUser] = useState({firstName: '', lastName: '', userName: '', email: '',password:'',passwordConfirm:''})
    const [userData,setUserdate]=useState([])

    const dateUser = async ()=>{
        const {data} = await axios.get('http://localhost:8800/login')
        setUserdate(data)
    }
    const onSubmit = (data) => {
      console.log(data);
    };
    const addNewUser = async (obj)=>{
      const {data} = await axios.post('http://localhost:8800/login',obj)
      console.log(data);
      return data
    }

    const handleInput = (e)=>{
    setNewUser({...newUser,[e.target.name]:e.target.value})
  }
  const checkUserUnique = (obj)=>{
    const checkUserName = userData?.find(userName=> userName.userName == newUser.userName)
      if(newUser.password == newUser.passwordConfirm){
        if(checkUserName){
        }else{
          addNewUser(obj)
          navigate('/HomePage')  }
      }else{
        
        console.log('pass dont match');
      }
    
  }

    useEffect(()=>{
        dateUser()
    },[userData])
    return (
      <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
      <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
          </Modal.Title>
          </Modal.Header>
          <Modal.Body>
       
        <TextField 
        onChangeCapture={handleInput}
          id="outlined-basic" 
          name="firstName" 
          label="First Name" 
          variant="outlined" 
          fullWidth 
          {...register("firstName", { required: "First Name is required." })}
          error={Boolean(errors.firstName)}
          helperText={errors.firstName?.message}
        />
        <TextField 
        onChangeCapture={handleInput}
          id="outlined-basic"
          label="Last Name" 
          variant="outlined"
          fullWidth
          name="lastName"
          {...register("lastName", { required: "Last Name is required." })}
          error={Boolean(errors.lastName)}
          helperText={errors.lastName?.message}
        />
           <TextField
        onChangeCapture={handleInput}
          id="outlined-basic"
          label="User Name"
          variant="outlined"
          fullWidth
          name="userName"
          {...register("userName", { required: "userName is required." })}
          error={Boolean(errors.userName)}
          helperText={errors.userName?.message}
         
        />
     
        <TextField
        onChangeCapture={handleInput}
          id="outlined-basic"
          label="email"
          variant="outlined"
          fullWidth
          name="email"
          {...register("email", { required: "E-mail Address is required." })}
          error={Boolean(errors.email)}
          helperText={errors.email?.message}
        />

        <TextField onChangeCapture={handleInput}
          name="password"
          id="outlined-basic"
          label="password"
          variant="outlined"
          fullWidth
          type="password"
          {...register("password", { required: "password is required." })}
          error={Boolean(errors.password)}
          helperText={errors.password?.message}
        />
        <TextField
        onChangeCapture={handleInput}
          id="outlined-basic"
          label="Password Confirm"
          variant="outlined"
          fullWidth
          name='passwordConfirm'
          type="password"
          {...register("passwordConfirm",{required:"passwordConfirm is required."})}
          error={Boolean(errors.passwordConfirm)}
          helperText={errors.passwordConfirm?.message}
        />
     
        <FormControl error={Boolean(errors.gender)} >
          <FormLabel component="legend"> Choose Your Gender </FormLabel>
          <RadioGroup row aria-label="gender" name="gender">
            <FormControlLabel 
              value="female" 
              control={
                <Radio {...register("gender", { required: "Choose your gender" })} />
              } 
              label="Female"
             />
            <FormControlLabel 
              value="male" 
              control={
                <Radio {...register("gender", { required: "Choose your gender" })} />
              } 
              label="Male" 
              />
            <FormControlLabel 
              value="other" 
              control={
                <Radio {...register("gender", { required: "Choose your gender" })} />
              } 
              label="Other" 
            />
            
          </RadioGroup>
          <FormHelperText style={{color:'#d32f2f'}}>{errors.gender?.message}</FormHelperText>
        </FormControl>
        <div className="clearfix"></div>
        <FormGroup 
          error={Boolean(errors.tnc)}
          style={{ display: "block", marginTop: "17px" }}
        >
          <FormControlLabel 
            control={
              <Checkbox name="tnc" {...register("tnc", { required: "please aggre our terms and condtions" })} />
            } 
            label="I aggree all terms and conditions" 
          />
        </FormGroup>
        <FormHelperText style={{color:'#d32f2f'}}>{errors.tnc?.message}</FormHelperText>
        <div className="clearfix"></div>
        </Modal.Body>
          <Modal.Footer>
        <Button onClick={()=>{checkUserUnique(newUser)}} variant="contained" color="primary" type="submit" className="btns">
            create new account
          </Button>
          </Modal.Footer>
          </form>
          </Modal>
        
        
        
      
      );
    }
         
    
    
   