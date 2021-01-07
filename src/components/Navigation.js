import { NavLink } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
const Navigation = () => (
    <nav>
      <ul>
        <li><LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer></li>
        <li><LinkContainer to="/about"><Nav.Link to='/about'>About</Nav.Link></LinkContainer></li>
        <li><Nav.Link to='/contact'>Contact</Nav.Link></li>
        
      </ul>
    </nav>
  );
  export default Navigation