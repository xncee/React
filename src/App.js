
import ToDoList from './6.0 CRUD (ToDo)/ToDoList';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from '@vercel/analytics/react';

function App() {
	return (
        <div>
            <Analytics />
            <SpeedInsights />
            <ToDoList />
        </div>
    );
}

export default App;
