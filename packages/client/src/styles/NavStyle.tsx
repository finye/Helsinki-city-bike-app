
import { Link } from "react-router-dom";
import styled from "styled-components";


export const NavbarContainer = styled.nav`
width: 100 %;
height: 50px;
background-color: white;
display: flex;
flex-direction: column;
align-items: center;
box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);

`

export const NavbarLinkContainer = styled.div`
display: flex;
`
export const NavbarLink = styled(Link)`
color: grey;
font-size: large;
font-family: Arial, Helvetica, sans-serif;
text-decoration: none;
margin: 10px;
&: hover{
    color: black;
}
`