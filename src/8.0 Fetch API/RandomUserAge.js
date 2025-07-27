import { useState } from 'react';
import Axios from 'axios';
import styles from './App.module.css';

/*
{
  "name": "John",
  "age": 32,
  "count": 500
}
*/
function RandomUserAge() {
    const [name, setName] = useState('');
    const [data, setData] = useState(null);

    const fetchInfo = () => {
        Axios.get(`https://api.agify.io/?name=${name}`)
        .then((res) => {
            setData(res.data);
        })
    };

    return (
        <div className={styles.container}>
            <h1 style={{textAlign: "center"}}>
                Age Prediction
            </h1>
            Enter a name:
            <input
                type='text'
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}
            />
            <button
                onClick={fetchInfo}
            >
                Predict Age
            </button>

            <div>
                <h3>Name: {data?.name}</h3>
                <h3>Predicted Age: {data?.age}</h3>
                <h3>Count: {data?.count}</h3>
            </div>
        </div>
    );
}

export default RandomUserAge;