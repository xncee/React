import { Link } from 'react-router-dom';

export function NavBar() {
    return (
        <div style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Link to={"/"}>Home</Link>
            <Link to={"/todoapp"}>ToDo</Link>
        </div>
    );
}