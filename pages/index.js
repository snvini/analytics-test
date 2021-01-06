import {useState} from 'react';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-186746497-1', {
    debug: true});
ReactGA.pageview('Home');

function Contador(){
    const [contador,setContador] = useState(0);

    function adiciona(){
        setContador(contador +1);
        ReactGA.event({
            category: 'User',
            action: 'Created an Account'
        });

        ReactGA.event({
            category: 'Social',
            action: 'Rated an App',
            value: 3
        });
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adiciona}>Contar</button>
        </div>
    )
}

function Home() {
    return (
        <div>
            <div>Home</div>
            <Contador />
        </div>
    )
}

export default Home