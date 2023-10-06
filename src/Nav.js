import {Link} from 'react-router-dom'
import './Nav.css';
function Nav(){
    return(
        <>
        <h1 style={{color:'blue',backgroundColor:'yellow'}}>Hello</h1>
       <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/about'><li>About</li></Link>
        <Link to='/contact'><li>Contact</li></Link>
        <Link to='/ecommerce'><li>Ecommerce</li></Link>
        <Link to='/myapi'><li>MyApi</li></Link>
        <Link to='/counter'><li>Counter</li></Link>
       </ul>
       </>
    );
}
export default Nav;