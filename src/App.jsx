import "./App.css";
import { Counter } from "./components/Counter";
import { SingleLight } from "./components/SingleLight";
import { useState } from "react";
import {Grid} from "./components/Grid";

function App() {
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);

  const increaseRow = () => {
    setRows(prevCount => prevCount + 1);
  };

  const increaseColumn = () => { 
    setColumns(prevCount => prevCount == 9 ? 9: prevCount + 1);
  }

  const decreaseRow = () => {
    setRows(prevCount => prevCount > 0 ? prevCount - 1 : 0);
  };

  const decreaseColumn = () => { 
    setColumns(prevCount => prevCount > 0 ? prevCount - 1 : 0);
  }

  const totalBulbs = rows * columns;

  const lights = Array.from({ length: totalBulbs });

  return(
  <div>
    <nav className='nav'>
        <p className='counter'>{totalBulbs} bulbs</p>
        <Counter className='counter' count={rows} onIncrement={increaseRow} onDecrement={decreaseRow} text={'rows'} />
        <Counter className='counter' count={columns} onIncrement={increaseColumn} onDecrement={decreaseColumn} text={'columns'} />
      </nav>
      <Grid columns={columns}>
        {lights.map((light, index) => <SingleLight key={index} />)}
      </Grid>
    </div>
  );
}

export default App;
