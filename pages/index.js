import {useState} from 'react';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-186746497-1', {
    debug: true});
ReactGA.pageview('Home');

function Contador(){
    const [contador,setContador] = useState(0);

    function add1(){
        setContador(contador +1);
        ReactGA.event({
            category: 'navegacao',
            label: 'App1',
            value: 3
        });
    }

    function add2(){
        setContador(contador +1);
        ReactGA.event({
            category: 'navegacao',
            label: 'App3',
            value: 2
        });
    }

    function add3(){
        setContador(contador +1);
        ReactGA.event({
            category: 'navegacao',
            label: 'App2',
            value: 2
        });
    }

    function add4(){
        setContador(contador +1);
        ReactGA.event({
            category: 'navegacao',
            label: 'App1',
            value: 2
        });
    }

    function add5(){
        setContador(contador +1);
        ReactGA.event({
            category: 'navegacao',
            label: 'App3',
            value: 1
        });
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={add1}>[1]</button>
            <button onClick={add2}>[2]</button>
            <button onClick={add3}>[3]</button>
            <button onClick={add4}>[4]</button>
            <button onClick={add5}>[5]</button>
        </div>
    )
}

function Home() {
    return (
        <div>
            <div>Home 2</div>
            <Contador />
        </div>
    )
}

export default Home