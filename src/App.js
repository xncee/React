import ComponentExample from './1.0 Components and Props/ComponentExample';
import CssExample from './2.0 CSS/CssExample'
import ConditionalRender from './3.0 Conditional Rendering/ConditionalRender';
import { useState } from 'react';
import ViewList from './4.0 Lists/ViewList';
import UserCard from './4.0 Lists/UserCard';
import Planet from './4.0 Lists/Planet';

function App() {
  const planets = [ 
  { name: "Mercury", isGasPlanet: false }, 
  { name: "Venus", isGasPlanet: false }, 
  { name: "Earth", isGasPlanet: false }, 
  { name: "Mars", isGasPlanet: false }, 
  { name: "Jupiter", isGasPlanet: true }, 
  { name: "Saturn", isGasPlanet: true }, 
  { name: "Uranus", isGasPlanet: true }, 
  { name: "Neptune", isGasPlanet: true } 
];

  return ( 
    <div className="App">
      {/* <ComponentExample /> */}
      {/* <CssExample /> */}
      {
        planets.map((planet, index) => (
          planet.isGasPlanet && <Planet key={index} name={planet.name}/>
        ))
      }
    </div>
  );
}

export default App;
