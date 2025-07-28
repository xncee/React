
import ToDoList from './6.0 CRUD (ToDo)/ToDoList';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';

function App() {
	return (
        <div>
            <Analytics />
            <SpeedInsights />
            <Router>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/todoapp' element={<ToDoList />}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
