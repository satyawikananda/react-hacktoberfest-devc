import React, {useState} from 'react';

function App() {

  const [isOn, setIsOn] = useState("on")

  function toggleLight(){
    if(isOn === "on"){
      setIsOn("off")
    }else{
      setIsOn("on")
    }
  }

  return (
    <div>
      <h2>Smart Remote</h2>
      <div style={{background:"#eaeaea",border:"1px solid black",padding:"1%"}}>
        <button onClick={toggleLight}>Turn {isOn} the light</button>
      </div>
    </div>
  );
}

export default App;
