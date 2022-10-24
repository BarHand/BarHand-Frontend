import axios from 'axios';
//API runs in port 3000, consider this for all services.js
export default axios.create({
    baseURL: 'https://my-json-server.typicode.com/BarHand/Bar-Hand-db.json',
    headers: { 'Content-type': 'application/json' }
})