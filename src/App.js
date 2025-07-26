import ComponentExample from './1.0 Components and Props/ComponentExample';
import CssExample from './2.0 CSS/CssExample'
import ConditionalRender from './3.0 Conditional Rendering/ConditionalRender';
import { useState } from 'react';
import ViewList from './4.0 Lists/ViewList';
import UserCard from './4.0 Lists/UserCard';
import Planet from './4.0 Lists/Planet';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div style={{
        margin: "0 auto", 
        textAlign: "center"
    }}>
			<h1>
        {count}
      </h1>

      <button
				onClick={() => {setCount(count+1)}}
			>
				Increase
			</button>
      <button
				onClick={() => {setCount(count-1)}}
			>
				Decrease
			</button>
      <button
				onClick={() => {setCount(0)}}
			>
				Set to zero
			</button>
		</div>
	);
}

export default App;
