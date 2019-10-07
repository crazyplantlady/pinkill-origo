const express = require('express');
const cors = require('cors');
const authInfo = require('../src/secret.js');
const axios = require('axios');
const port = 3003;
const app = express();
const bodyParser = require ('body-parser');
const fetch = require ('isomorphic-fetch')


app.use(cors());
app.use(bodyParser.json());


app.get('/users', (req, res)=>{
    axios('https://ssb-dev-fep-01.azurewebsites.net/api/Sender', {
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Basic '+Buffer.from(authInfo).toString('base64')
        }
    }).then(r=>{
        res.send(r.data)
    })
})

app.post('/post-order', (req, res) => {
    fetch("https://ssb-dev-fep-01.azurewebsites.net/api/Delivery", {
        body: JSON.stringify({

                    "senderOrderID": "2357433",
                    "description": "lysing",
                    "senderId": 7,
                    "numberOfPackages": req.body.numberOfPackages,
                    "pickupAtDeliveryBranch": true,
                    "box": false,
                    "location": "hilla",
                    "recipient": {
                        "email": req.body.email,
                        "phone": req.body.phone,
                        "name": req.body.name
                    }
                }),
        headers: {
            Accept: "application/json",
            Authorization: "Basic dmVmc2tvbGk6Q1l3YzZsNEkyZg==",
            "Content-Type": "application/json"
        },
        method: "POST"
    })
        .then(r =>
            r.json()
        )
        .then(businessKey =>
            {console.log(businessKey) 
           res.send(businessKey)}
        )
    })

app.listen(port, () => {
    console.log("listening to port", port)
}); 
