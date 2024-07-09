import { useEffect } from 'react';
import useApi from './Helpers/Api';
import './Styles/Global.css';

function App() {
  const api = useApi();

  useEffect(() => {
    api.getExample1().then((res) => {
      console.log(res.data);
    })

    api.postExample2("Hi there").then((res) => {
      console.log(res.data)
    })
  }, [])

  return (
    <div className='mainAppContainer'>
      <h1>Hello There</h1>
      <p>Welcome to my vite-express app template.</p>
    </div>
  )
}

export default App
