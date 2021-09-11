import React from 'react';
import './Header.scss';

const header = () => {
    return (
        <div className="header-bg">
            <div className="nav-bg">
                <div className="header">
                    <div>
                        <h2>rbshoriful</h2>
                    </div>
                    <div className="menu">
                        <a href="/home">Home</a>
                        <a href="/about">About</a>
                        <a href="/work">Works</a>
                        <a href="/contact">Contact US</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default header;