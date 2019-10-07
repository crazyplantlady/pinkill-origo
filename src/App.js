import React, { useState } from 'react';
import './App.css';
import firebase from './initFirebase';
import Home from './Components/Home';
import History from './Components/History'; 
import SignIn from './Components/SignIn';
import NotFound from './Components/NotFound';
import DeliveryForm from './Components/DeliveryForm';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Barcode from 'react-barcode';


 class Header extends React.PureComponent {
    render() {
      return (
        <div className="header">
          <div className="bounds">
            <h1 className="header--logo">Pinkill</h1>
          </div>
        </div>
      );
    }
  };

const App = () => {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({}); 
  const [businessKey, setBusinessKey] = useState(""); 

  const login = ()=>{
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user=>{
        console.log("User is logged in");
        if(user){
            setIsLoggedIn(true); 
            fetch('http://localhost:3003/users') 
            .then(r=>r.json())
            .then((res)=>{
            res.forEach((FireUser)=>{
              if(FireUser.email === user.user.email){
                setUser(FireUser)
                }
              })
            })
            .catch(err=>console.log(err));
        }
    })
    .catch(function(error) {
        console.log(error);
    });
  }
  const logout = ()=>{
    firebase.auth().signOut()
    .then(function() {
      setIsLoggedIn(false);
    })
    .catch(function(error) {
    });
    
  }
    return (
      <Router>
        <div>
          <Header />

          <Switch>
            <Route exact path="/"><Home/></Route>
            <Route path="/signIn"><SignIn login={login} /></Route>
            <Route path="/deliveryform"><DeliveryForm logout={logout} setBusinessKey={setBusinessKey}/></Route>
            <Route path="/history"><History logout={logout} businessKey={businessKey}/></Route>

            <Route component={NotFound}/>            
          </Switch>

        </div>                  
      </Router>
    )}     


export default App;
