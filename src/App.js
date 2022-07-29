import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from './component/Box';
function App() {
  const count=useSelector(state=>state.count)//store에서  count값 가져오기.
  const id=useSelector(state=>state.id)
  const password=useSelector(state=>state.password)
  const dispatch =useDispatch();
  
  const Plus =() =>{
    dispatch({type:'INCREMENT',payload:{num:5}})
  }
  const Decrese =() =>{
    dispatch({type:'DECRESE',payload:{num:5}})
  }
  const login =() =>{
    dispatch({type:'LOGIN',payload:{id:'id',password:'123'}})
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <h1>{id}</h1>
      <h1>{password}</h1>
      <button onClick={Plus}>Plus</button><br/><br/>
      <button onClick={Decrese}>Decrese</button><br/><br/>
      <button onClick={login}>Login</button>
      <Box/>
    </div>
  );
}

export default App;
