import React,{ useState,useEffect } from 'react';
import { animals } from '../assests/data/AnimalsDb';
import '../assests/css/compo.css';

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

    const handleAnimalClick=(selectedAnimal)=>{
        if(selectedAnimal === randomAnimal.name){
            setResult('WIN');
        }
        else{
            setResult('LOSE');
        }
    }

    return(
        <div className="gameContainer">
            <table className="game_table">
                <thead>
                    <tr>
                        <th colSpan={3}><h1>ANIMAL MATCHING GAME</h1></th>
                    </tr>
                    <tr>
                        <th><h2>Result</h2></th>
                        <th><h2>Animal Name</h2></th>
                        <th><h2>Select the Animal</h2></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><h3>{result}</h3></td>
                        <td><h3>{randomAnimal.name.toUpperCase()}</h3></td>
                        <td>
                            <div>
                                <div>
                                    {
                                        animals.map((animal)=>(
                                         <div key={animal.name} onClick={()=>handleAnimalClick(animal.name)}>
                                            <img src={require('../assests/img/$(animal.name)')} alt= {animal.name}/>
                                         </div>   
                                        ))
                                    }
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}