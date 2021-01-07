import { NavLink, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Courses from './Courses';
import Carosuel from './Carosuel';
import Flow from './Flow';

 

const Main = () => (
    <div>
        <Carosuel />
        <Flow />
    </div>
    

  );
export default Main