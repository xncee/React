import { useState } from 'react';
import Axios from 'axios';
import styles from './App.module.css';

// Docs for this API: https://excuser-three.vercel.app/
// Get a random excuse for a specific category
// https://excuser-three.vercel.app/v1/excuse/office
/*
[
  {
    "id": 111,
    "excuse": "I have a dentist appointment and I cannot reschedule it.",
    "category": "office"
  }
]
*/
function GenerateExcuse() {
    const [excuse, setExcuse] = useState('');

    const fetchExcuse = (category) => {
        Axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}`)
        .then((res) => {
            setExcuse(res.data[0].excuse || { excuse: "No excuse found." });
            
        })
    };

    return (
        <div className={styles.container}>
            <h1 style={{textAlign: "center"}}>
                Excuse Generator
            </h1>
            <h3>Select Category: </h3>
            <button onClick={() => { fetchExcuse("family") }}>Family</button>
            <button onClick={() => { fetchExcuse("office") }}>Office</button>
            <button onClick={() => { fetchExcuse("children") }}>Children</button>
            <button onClick={() => { fetchExcuse("college") }}>College</button>
            <button onClick={() => { fetchExcuse("party") }}>Party</button>
            <button onClick={() => { fetchExcuse("funny") }}>Funny</button>
            <button onClick={() => { fetchExcuse("unbelievable") }}>Unbelievable</button>
            <button onClick={() => { fetchExcuse("developers") }}>Developers</button>
            <button onClick={() => { fetchExcuse("gaming") }}>Gaming</button>

            <p><b>Excuse:</b> {excuse}</p>
        </div>
    );
}

export default GenerateExcuse;