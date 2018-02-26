import React from 'react';
import './home.css';
import Sidebar from './sidebar.js'
import Projects from './projects.js';


const Home = ({teamProps}) => (
  	<section className="home">
    	<Sidebar teamProps={teamProps} />
    	<Projects />
    </section>
)

export default Home;