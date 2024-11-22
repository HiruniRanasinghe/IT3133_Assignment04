import React,{ useState,useEffect } from 'react';
import { animals } from '../assests/data/AnimalsDb';
import '../assests/css/compo.csss';

export default function AnimalTable(props){
    const [randomAnimal,setRandomAnimal] = useState(null);
    const [result,setResult] = useState('');
    useEffect(()=>{
        generateRandomAnimal();
    },[]);

    const generateRandomAnimal = () =>{
        randomIndex = Math.floor(Math.random() * 10) + 1;
        setRandomAnimal(animals[randomIndex]);
        setResult('');
    }

    return();
}