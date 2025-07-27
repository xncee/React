import { useState } from 'react';
import { Text } from './Text'

function ComponentLifeCycle() {
    const [displayed, setDisplayed] = useState(false);

    return (
        <div>
            <button
                onClick={() => {setDisplayed(!displayed)}}
            >
                Display Text
            </button>
            {displayed && <Text />}
        </div>
    );
}

export default ComponentLifeCycle;