import React from 'react';
import rbshoriful from '../../images/shoriful.png';
import './About.scss';

const About = () => {
    return (
        <div className="about-bg">
            <section className="about">
                <div className="image">
                    <div className="images">
                         <img src={rbshoriful} alt="" />
                    </div>
                    <div className="contents">
                        <h1>Md. Shoriful Islam</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta nam possimus mollitia explicabo nesciunt dolore atque repellat suscipit quod, optio ullam obcaecati a est facere voluptatem debitis. Velit, veritatis quibusdam?</p>
                    </div>
                </div>
                <div className="skills">
                    <div className="myScills">
                        <h2>My Skills Set</h2>
                        <div className="list-items">
                            <li>javaScript</li>
                            <li>es6</li>
                            <li>React.js</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>MongoDb.js</li>
                            <li>firebase</li>
                            <li>Redux</li>
                            <li>Rest API</li>
                            <li>NPM</li>
                            <li>php</li>
                            <li>jQuery</li>
                            <li>VS Code</li>
                            <li>Git</li>
                            <li>HTML/HTML5</li>
                            <li>CSS/CSS3</li>
                        </div>
                    </div>
                    <div className="myScills">
                        <h2>I want to work with</h2>
                        <div className="list-items">
                            <li>javaScript</li>
                             <li>React</li>
                            <li>firebase</li>
                            <li>Rest API</li>
         
                        </div>
                    </div>
                    <div className="myScills">
                        <h2>I prefer not to work with</h2>
                        <div className="list-items">
                            <li>php</li>
                            <li>jQuery</li>
                            <li>Wordpress</li>
                            <li>Laravel</li>
                            <li>MySQL</li>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <p>&copy; Design By - Md. Shoriful Islam</p>
            </footer>
        </div>
    );
};

export default About;