import { React, useEffect, useState } from 'react';
import WorkDetail from '../WorkDetail/WorkDetail';
import mySite from './../Data/FakeData.json';
import './Work.scss';

const Work = () => {
    const [works, setWork] = useState([]);
    useEffect(() => {
        setWork(mySite);
        console.log(mySite);
    }, [])
    return (
        <div className="work-bg">
            <section className="work">
                {
                    works.map(work => <WorkDetail work={work}></WorkDetail>)
                }
            </section>
            <footer className="footer">
                <p>&copy; Design By - Reba Khatun</p>
            </footer>
        </div>
    );
};

export default Work;