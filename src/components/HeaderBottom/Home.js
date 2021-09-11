import React from 'react';
import draw from '../../images/wk12.jpg';
import './Home.scss';
import { Link } from 'react-router-dom';

const home = () => {
    return (
        <div className="home-bg">
            <section className="home">
                <div className="content">
                    <h5>I'm a Web Developer</h5>
                    <h1>Mst. Reba Khatun</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt asperiores accusamus ut non blanditiis, laborum maiores magni corrupti illo laboriosam cumque veritatis reiciendis perferendis quisquam! Quas harum excepturi facere nulla.</p>
                    <Link to="/about"><button className="btn btn-primary m-1">About</button></Link>
                    <Link to="/contact"><button className="btn btn-primary m-1">Teacth Me</button></Link>
                </div>
                <div className="img-container">
                    <img src={draw} alt="" />
                </div>
            </section>
            <footer className="footer">
                <p>&copy; Design By - Reba Khatun</p>
            </footer>
        </div>
    );
};

export default home;