//hooks
import { useEffect, useState } from 'react';

//utiles
import recoveryWord from '../util/recoveryWord.js';



function useImageCat( fact ) {
  const [imageCatUri, setImageCatUri] = useState("");

  const uriApiImageCat = import.meta.env.VITE_URI_API_IMAGE_CAT;

  
  const word = recoveryWord(fact);
  
    useEffect(()=>{
      const NEW_URI =uriApiImageCat + word    

      setImageCatUri(NEW_URI)
    },[fact])
    
    //get word fact
   

  

  return { imageCatUri };
}

export default useImageCat;
