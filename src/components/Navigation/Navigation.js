import React from 'react';

import { NavLink } from 'react-router-dom';
import routes from '../../routes'


const Navigation = () => {
    return (
        <ul className="Link">
            <li><NavLink
                exact
                to={routes.home}
                className="NavLink"
                activeClassName="NavLink-active"
            >Home
         </NavLink></li>
            <li><NavLink
                to={routes.movie}
                className="NavLink"
                activeClassName="NavLink-active"
            >Movies
         </NavLink></li>
        </ul>
    );
}

export default Navigation;