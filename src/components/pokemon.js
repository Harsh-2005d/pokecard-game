export const Pokemon = [
    "bulbasaur", "pikachu", "venusaur",
    "gengar", "snorlax", "charizard",
    "squirtle", "jigglypuff", "psyduck",
    "onix", "mewtwo", "butterfree"
  ];
export function shufflearr(arr){
      for(let i=arr.length-1;i>0;i--){
        let index=Math.floor(Math.random()*i);
        [arr[i],arr[index]]=[arr[index],arr[i]]
      }
      return arr;
    };
