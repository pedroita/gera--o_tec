import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header>
                <h1>Logo</h1>
                <nav>
                    <ul>
                        <li><Link to={"/"}>Home</Link></li>
                        <li> <Link to={"/Abount"}>Abount</Link></li>
                        <li> <Link to={"/Contact"}>Contact</Link></li>

                    </ul>
                </nav>
            </header>
        </>
      );
}
 
export default Header;