import { ListItem } from './components/Mobile/ListItem';
import './default.scss';

import {
  mockUniData, 
  mockClassData, 
  mockFileData, 
  mockUserData
} from './assets/mocks/mockData'


function App() {
  //ANCHOR: for now we are using the mock data imported above to test our designs
  //let's focus on overall functionality of individual components, 
  //before we tie everything together and code up the app logic
  
  return (
    <div className="App"> 
    {mockUniData.map(({itemID, itemName, itemLogoPath, itemType}) => (
      <ListItem props={{itemID, itemName, itemLogoPath, itemType}}/>
    ))}
    
    
    </div>
  );
}

export default App;
