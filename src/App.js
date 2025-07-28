
import ToDoList from './6.0 CRUD (ToDo)/ToDoList';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { PageNotFound } from './pages/PageNotFound';
import { NavBar } from './components/NavBar';

function App() {
	return (
        <div>
            <Analytics />
            <SpeedInsights />
            <Router>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/todoapp' element={<ToDoList />}/>
                    <Route path='*' element={<PageNotFound />}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
