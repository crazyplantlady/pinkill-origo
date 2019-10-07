import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DeliveryForm = (props) => {
    const [inputData, setInputData] = useState({name: "", email: "", phone: "", numberOfPackages: ""}); 
    
    const handleChange = (e) =>{
        setInputData({...inputData, [e.target.name]:e.target.value})
    }
    const handleSubmit = (e)=> {
        e.preventDefault()
        console.log(inputData)
        fetch('http://localhost:3003/post-order', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(inputData)
        }) 
        .then(r => {
            console.log("tókst!")
            return r.text()
        })
        .then(businessKey =>{
            console.log(businessKey)
            props.setBusinessKey(businessKey)  
        }
        ) .catch(r=> console.log(r))       
    }
    
      return (
        <div>
            <form onSubmit={handleSubmit}>
                 <label>
                    Dagsetning:<input type="date" name="date" value={inputData.date} onChange={handleChange}></input><br/>  
                </label>
                <label>
                    Viðskiptavinur:<input type="text" name="customer" value={inputData.customer} onChange={handleChange}></input><br/>  
                </label>               
                <label>
                    Heimilisfang:<input type="text" name="address" value={inputData.address} onChange={handleChange}></input><br/>  
                </label>
                <label>
                    Netfang:<input type="email" name="email" value={inputData.email} onChange={handleChange}></input><br/>
                </label>
                <label>
                    Sími:<input type="text" name="phoneNumber" value={inputData.phoneNumber} onChange={handleChange}></input><br/>
                </label>
                <label>
                    Pöntunarnúmer<input type="text" name="orderID" value={inputData.orderID} onChange={handleChange}></input><br/>
                </label>
                <label>  
                   Lýsing vöru:<input type="text" name="description" value={inputData.description} onChange={handleChange}></input><br/>                                      
                </label>
                <label>
                    Fjöldi pinkla:<input type="number" name="numberOfPackages" value={inputData.numberOfPackages} onChange={handleChange}></input><br/>   
                </label>

                <input type="submit" value="Submit" />
            </form>
            <Link to= "/"><button className="signout-btn" onClick={props.logout}>Útskráningarhnappur</button></Link>
            <Link to= "/history"><button >Sendingarsaga</button></Link>
        </div>  
        
      );
    }

  export default DeliveryForm;