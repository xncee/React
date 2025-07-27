import { useState, useEffect } from 'react';
import Axios from 'axios';

const RANDOM_QUOTE_API = 'https://api.gameofthronesquotes.xyz/v1/random';
// {
//   "sentence": "You love your children. It's why you'll never win.",
//   "character": {
//     "name": "Cersei Lannister",
//     "slug": "cersei",
//     "house": {
//       "name": "House Lannister of Casterly Rock",
//       "slug": "lannister"
//     }
//   }
// }
function RandomQuote() {
    const [quote, setQuote] = useState('');

    const fetchQuote = () => {
        Axios.get(RANDOM_QUOTE_API)
        .then((res) => {
            setQuote(res.data.sentence);
        })
    };
    
    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        <div>
            <h1>{quote}</h1>
        </div>
    );
}

export default RandomQuote;