import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`

    background-color: blueviolet;
    padding: 0 60px;
    display: flex;
    justify-content: space-between;
    font-family: Arial, Helvetica, sans-serif;
    & h1{
        color: #ffffffff;
    }
    & nav ul{
        display: flex;
        gap: 36px;
        list-style: none;
        & li a{
            color: #ffffff80;
            text-decoration: none;
            font-size: 18px;
            &:hover, &.active  {
                color: #ffffffff;
            }
        }
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            
                <h1>Logo</h1>
                <nav>
                    <ul>
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li> <NavLink to={"/produtos"}>Produtos</NavLink></li>
                    </ul>
                </nav>
            
        </HeaderContainer>
      );
}
 
export default Header;