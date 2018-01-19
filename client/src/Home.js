import React from 'react';
import './home.css';
import Sidebar from './sidebar.js'
import Projects from './projects.js';


const Home = () => (
  	<section className="home">
    	<Sidebar />
    	<Projects />
    </section>
)

export default Home;