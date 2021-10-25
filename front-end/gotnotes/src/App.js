import { ListItem } from './components/Mobile/ListItem';
import './default.scss';

import {mockUniData} from './assets/mocks/mockData'


function App() {
  return (
    <div className="App"> 
    {mockUniData.map(({itemID, itemName, itemLogoPath, itemType}) => (
      <ListItem props={{itemID, itemName, itemLogoPath, itemType}}/>
    ))}
    
    
    </div>
  );
}

export default App;
