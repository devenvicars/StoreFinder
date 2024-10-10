import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {

    const { pageTitle } = props;

    return (
        <header>
            <h1>{pageTitle}</h1>
            <nav>
                {pageTitle != "Store Finder" ? <button>
                    <Link to="/">go back home</Link>
                </button> : null}
            </nav>
        </header>
    );
};

export default Header;