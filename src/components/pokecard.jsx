import * as PokeAPI from "pokeapi-js-wrapper";
import { useEffect, useState } from "react";

const imageCache={}

export default function Pokecard( {name,click} ) {
  const [Poke, setPoke] = useState(null);
  const P = new PokeAPI.Pokedex();

  


  useEffect(() => {
    if(imageCache[name]){
      setPoke(imageCache[name])

    }else{
    P.getPokemonByName(name).then((response) =>{
      const imgurl=response.sprites.other["official-artwork"].front_default
      setPoke(imgurl);
      imageCache[name]=imgurl;})
    }
  }, [name]);

  return (
    <>
      <div className="m-9 border-solid border-2 border-black text-center">
        <div className="border-solid border-2 border-black p-2" onClick={click}>
          <img src={Poke} alt={name} className="w-50 h-50"/>
        </div>
        <span>{name.toUpperCase()}</span>
      </div>
    </>
  );
}
