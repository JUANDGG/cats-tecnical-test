import useFact from "../hooks/useFact.js";
import useImageCat from "../hooks/useImageCat.js";


function App() {
  
  const {fact,refrestFact} =useFact()
  const {imageCatUri} = useImageCat(fact)
  
  
  
  const handleClick =()=>{
    refrestFact();
  }

  return (
    <div className="root">
  
      {fact && <h1 className='titleFact'>{fact}</h1>}
      <div >
        <button onClick={handleClick} className="btnRefresh">Refresf </button>
      </div>
    
    
       <img src={imageCatUri} alt="" />
    
    </div>
  );
}

export default App;
