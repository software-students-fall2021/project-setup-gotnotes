import logo from './assets/logo.svg';
import { ListItem } from './components/Mobile/ListItem';
import './default.scss';

import {mockUniData} from './assets/mocks/mockData'


function App() {
  return (
    <div className="App"> 
    {mockUniData.map(({itemID, itemName, itemLogoPath, itemtype}) => (
      <ListItem props={{}}/>
    ))}
    
    
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
