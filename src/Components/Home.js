import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="App">
        <p className="notification">Til þess að stofna sendingu þarf að <br></br>
        skrá sig inn! </p>
      
        <nav>
        <React.Fragment>
          <Link className="signin" to="/signin"><button>Innskrá</button></Link>
          <br></br>
          <Link className="signup" to="/signup"><button>Nýskrá</button></Link>
                    
        </React.Fragment>
      </nav>
    </div>
  );
}

export default Home;
