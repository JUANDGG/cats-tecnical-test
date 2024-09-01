//hooks
import {useEffect, useState } from "react";

//services
import fetchService from "../services/fetchService.js";



function useFact() {
    const [fact, setFact] = useState("");

    //get enviroment uri api fact 
    const uriApiFact =import.meta.env.VITE_URI_API_FACT;


    useEffect(()=>{
        refrestFact()
    },[])


    const refrestFact = ()=>{
        fetchService(uriApiFact).then(res => {
            const {fact} =res     
            setFact(fact);
        });
    }

   

    return { fact ,refrestFact };
}


export default useFact;