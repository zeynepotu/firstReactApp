import React,{Fragment, useEffect, useState} from 'react';
import "./App.css";
import "./Input.js";
import Input from './Input.js';
function HelloWorld(props){
const[isTrue,setIsTrue] = useState(true);
const[crowd,setCrowd] = useState([]);

const[firstName,setFirstName] = useState("");
const[lastName,setLastname] = useState("");
const[dob,setDob] = useState("");



const toggleTrue = () => {
    if(isTrue) {
        setIsTrue(false)
        return
    }
    setIsTrue(true)
};

useEffect(() =>{
    console.log("useEffect fired!")

    let people= [
        {
            id:1,
            firstName:"Jack",
            lastName: "Smith",
            dob:"1997-07-01",
        },
        {
            id:2,
            firstName:"Elysa",
            lastName: "Madison",
            dob:"2000-04-05",
        }
    ]
setCrowd(people);
},[])
  // for the last parameter []:
  // 1) when not there, useEffect runs on every render
  // 2) when an empty array, runs only on first render
  // 3) you can pass props or state values

const handleSubmit = (event) => {
    event.preventDefault();

    if(lastName !== ""){
        addPerson(firstName,lastName,dob);
        }
    }

    const addPerson = (newFirst, newLast, newDob) =>{
        //create the object
        let newPerson={
            id: crowd.length +1,
            firstName:newFirst,
            lastName: newLast,
            dob:newDob,
    }
    const newList = crowd.concat(newPerson);

    const sorted = newList.sort((a,b)=>{
        if(a.firstName< b.firstName){
            return -1;
        }else if(a.firstName>b.firstName){
            return 1;
        }
        return 0;
    })
    setCrowd(sorted);
    setFirstName("");
    setLastname("");
    setDob("");
    }
    return(
        <Fragment>        
            <hr/>
            <h1 className='h1-red'>{props.msg}</h1>
            <hr/>
            {isTrue &&
                <Fragment>
                    <p>The current value is isTrue is true</p>
                    <hr />
                </Fragment>
            }
            {isTrue 
            ?<p>True</p>
            :<p>False</p>
            }
            <a  href="#!" className='btn btn-primary' onClick={toggleTrue}>Click!</a>
            <hr/>
            <form autoComplete='off' onSubmit={handleSubmit}>
                <div className='mb-3' >
                    <label className='form-label' htmlFor='first-name'>First Name:</label>
                    <input 
                    className= 'form-control'
                    type='text'
                    name='first-name'
                    id='first-name'
                    autoComplete='first-name-new'
                    onChange={(event)=>setFirstName(event.target.value)}
                    ></input>
                    <label className='form-label' htmlFor='last-name'>Last Name:</label>
                    <input 
                    className= 'form-control'
                    type='text'
                    name='last-name'
                    id='last-name'
                    autoComplete='last-name-new'
                    onChange={(event)=>setLastname(event.target.value)}
                    ></input>
                    </div>
                    <Input
                    title="Date Of Birth:"
                    type="date"
                    name="dob"
                    autoComplete="dob-new"
                    className="form-control"
                    onChange={(event)=>setDob(event.target.value)}
                    ></Input>
                    <br/>
                    <input type='submit' value='Submit' className='btn btn-primary'></input>
            </form>

            <div>
                <hr/>
                FirstName: {firstName}<br/>
                LastName: {lastName}<br/>
                Date of Birth: {dob}<br/>
            </div>

            <hr/>
            <h3>People</h3>
            <div className='list-group'>
                {crowd.map((m) => (
                    <li key={m.id} className='list-group-item'>{m.firstName} {m.lastName}</li>
                ))}
            </div>
        </Fragment>
    )
}
export default HelloWorld;