import { Link } from "react-router-dom"

const Navbar=()=>{
    return <div className="nav">
        <h1 className="company-name">Buggy</h1>
        <ul>  
            <Link className="remove"  to="/"><li className="link">Home</li></Link>
            <Link className="remove"  to="/offers"> <li className="link">Offers</li></Link>
            <Link className="remove"  to="/help"><li className="link">Help</li></Link>
            <Link className="remove"  to="/about"> <li className="link">About</li></Link>
            <Link className="remove" to="/contact"><li className="link">Contact</li></Link>
            <Link  className="remove" to="/search"><li className="link">Search</li></Link>
            <Link className="remove"  to="/account"><li className="link">Account</li></Link>
        </ul>
    </div>
}

export default Navbar