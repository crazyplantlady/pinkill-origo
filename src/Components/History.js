 import React from 'react'
 import { Link } from "react-router-dom";
 import Barcode from 'react-barcode';
 
 const History = (props) => {

  return (
      <div>
        <div>
          <Link to="/deliveryform">Til baka</Link>
          <Link to= "/"><button className="signout-btn" onClick={props.logout}>Útskráningarhnappur</button></Link>
        </div>   
        <div className="customer-feed">
          <h3>Sendingarsaga</h3>
          <br/>
          {props.businessKey}
          <Barcode value={props.businessKey} />
        </div>
      </div> 
  )
}

export default History;