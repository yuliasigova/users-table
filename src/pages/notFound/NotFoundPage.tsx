import { Link } from "react-router-dom";

export function NotFoundPage () {
    return (
        <main className="main">
            <div className="container">
            <h1>404. Page not found</h1>
      <Link to="/">Вернуться на главную</Link>
            </div>
      
    </main>
  ); 
}