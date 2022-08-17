import './App.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {saveFleetKey} from './redux/slices/fleet-slice'
function App() {
 

  const dispatch = useDispatch();
  useEffect(()=>{
  },[])
  const [fleetData,setFleetData] = useState([])

  const Data = {
    Fleet1: ["v1", "v2", "v3"],
    Fleet2: ["v4", "v5", "v6"],
    Fleet3: ["v7", "v8", "v9"],
    }
  
  const changeFleet = (e) =>{
    dispatch(saveFleetKey(e.target.value))
    if(e.target.value === "Fleet1" ){
      setFleetData(Data.Fleet1);
    }
    if(e.target.value === "Fleet2" ){
      setFleetData(Data.Fleet2);
    }
    if(e.target.value === "Fleet3" ){
      setFleetData(Data.Fleet3);
    }
  }
  return (
    <div className="App">
      <label>Choose Fleet:</label>
      <select name="fleets" onChange={(e)=>{changeFleet(e)}}>
        <option value="Fleet1">Fleet1</option>
        <option value="Fleet2">Fleet2</option>
        <option value="Fleet3">Fleet3</option>
      </select>
      <br/>
      <label>Choose Fleet Option:</label>
      <select name="fleets" >
      {
        fleetData.map((data)=>{
          return(<option value={data}>{data}</option>)
        })
      }
      </select>
    <h2>Saved Key From Redux Store <h2 className='store-data'>{useSelector((state) => state.fleet.fleetKey)}</h2></h2>
    </div>
  );
}

export default App;
