import { useState } from "react";


export default function Handler(name){
    const [score,setScore]=useState(0);
    const [bestsc,setBestsc]=useState(0);
    const [clicked,setClicked]=useState([])

    if(!clicked.includes(name)){
        const newsc=score+1;
        setScore(newsc)
        if(bestsc<newsc){
            setBestsc(newsc);
        }
        setClicked([...clicked,name])
    }
    else{
        setScore(0);
        setClicked([]);
    }

}