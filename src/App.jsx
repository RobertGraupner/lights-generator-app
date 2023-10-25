import "./App.css";
import { Counter } from "./components/Counter";

function App() {
  return(
  <div>
    <nav className='nav'>
      <p className='counter'>0 bulbs</p>
        <Counter className='counter' count={0} text={'rows'} />
        <Counter className='counter' count={0} text={'columns'} />
    </nav>
    </div>
  );
}

export default App;
