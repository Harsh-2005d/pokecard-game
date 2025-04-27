import { useState } from "react";
import Pokecard from "./components/pokecard";
import { Pokemon, shufflearr } from "./components/pokemon";

export default function App() {
  
  const [score,setScore]=useState(0);
  const [bestsc,setBestsc]=useState(0);
  const [clicked,setClicked]=useState([])
  const [pokemon,setPokemon]=useState(()=>shufflearr([...Pokemon]))
    
  
    function Handler(name){
      if(!clicked.includes(name)){
          const newsc=score+1;
          setScore(newsc)
          if(bestsc<newsc){
              setBestsc(newsc);
          }
          setClicked([...clicked,name])
          setPokemon(shufflearr([...Pokemon]));
      }
      else{
          setScore(0);
          setClicked([]);
          setPokemon(shufflearr([...Pokemon]));
      }
    }
  return (
    <>
      <div className="text-center">
      <h1>Score: {score}</h1>
      <h2>Best Score: {bestsc}</h2>
      <div className=" flex flex-row flex-wrap  justify-evenly">
        {pokemon.map((poke) => (
          <Pokecard key={crypto.randomUUID()} name={poke} click={()=>Handler(poke)} />
        ))}
      </div>
      </div>
    </>
  );
}