import { useState, useEffect } from 'react';

export function Text() {
    const [text, setText] = useState('');
    
    useEffect(() => {
        console.log("Hello World");

        return () => {
            console.log("Unmounted, Bye");
        };
    }, [text]);

    return (
        <div>
            Enter Text:
            <input
                type='text'
                value={text}
                onChange={(e) => {setText(e.target.value)}}
            />
            <h1>{text}</h1>
        </div>
    );
}