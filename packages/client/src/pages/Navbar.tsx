import React from "react";
import { NavbarContainer, NavbarLinkContainer, NavbarLink } from '../styles/NavStyle';
export interface NavbarProps { }

const Navbar: React.FC<NavbarProps> = (props) => {
    return (
        <NavbarContainer>
            <NavbarLinkContainer>
                <NavbarLink to="/">
                    Stations
                </NavbarLink>
                <NavbarLink to="journeys">
                    Journeys
                </NavbarLink>
            </NavbarLinkContainer>
        </NavbarContainer>
    )
}
export default Navbar;