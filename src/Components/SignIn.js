import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase'


const SignIn = ()=> {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const signIn = ()=> {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user=>{
        console.log(user);
        if(user){
          fetch('http://localhost:3003/users')
          .then(r=>r.json())
          .then((res)=>{
            console.log(res);
          })
          .catch(err=>console.log(err));
        }
      })
      .catch(function(error) {     
        console.log(error)      
      });
    }

    return (
      <div className="App">
       email: <input onChange={e=>setEmail(e.target.value)} name="email" palceholder ="email"></input><br></br>
       password: <input onChange={e=>setPassword(e.target.value)} name="password" type="password"></input>
       <Link to="/deliveryform"><button onClick={signIn}>Log in</button></Link>
      </div>
    )
  };

  export default SignIn;