import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Marywood Chess Club</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                
                <a class='nav-item nav-link'><Link to="/">Home</Link></a>
                <a class='nav-link'><Link to="/events">Events</Link></a>
                <a class='nav-link'><Link to="/about">About</Link></a>
                <a class='nav-link'><Link to="/contact">Contact</Link></a>
                <a class='nav-link'><Link to="/gotd">Game of the Day</Link></a>
                
                </ul>
            </div>
        </nav>
      <Outlet />
      </>
  )
};

export default Layout;