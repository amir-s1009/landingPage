import './App.css';

import {} from './jsx/components';
import {Header, PlanContainer} from './jsx/containers';

function App() {
  
  return (
    <div className='mainContainer'>
      <Header />
      <h1 className='heading'>Select The Best Plan For Your Needs</h1>
      <PlanContainer />
    </div>
  );
}

export default App;