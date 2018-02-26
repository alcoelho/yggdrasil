import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './home.js';
import registerServiceWorker from './registerServiceWorker';

const teamProps = {teamName: "Wildcats", teamEmail: "emaildotime@corp.globo.com", teamDescription: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI."}

ReactDOM.render(<Home teamProps={teamProps}/>, document.getElementById('root'));
registerServiceWorker();


// const hocaCaixas = (Componente) => {
//   <div><Componente /></div>
// } 

// const caixa1 = hocaCaixas(glubglub)