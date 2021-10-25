import { ListItem } from './components/Mobile/ListItem';
import './default.scss';

import {
  mockUniData,
  mockClassData,
  mockFileData,
  //mockUserData
} from './assets/mocks/mockData'


function App() {
  //ANCHOR: for now we are using the mock data imported above to test our designs
  //let's focus on overall functionality of individual components, 
  //before we tie everything together and code up the app logic

  return (

    <div className="App">

      <p>List Items for Universities</p>

      {mockUniData.map(({ itemID, itemName, itemLogoPath, itemType, courseCount }) => (
        <ListItem key={itemID} props={{ itemID, itemName, itemLogoPath, itemType, courseCount }} />
      ))}

      <p>List Items for Courses</p>

      {mockClassData.map(({ itemID, itemName, itemLogoPath, itemType, enrolledStudents }) => (
        <ListItem key={itemID} props={{ itemID, itemName, itemLogoPath, itemType, enrolledStudents }} />
      ))}

      <p>List Items for Files</p>

      {mockFileData.map(({ itemID, itemName, itemLogoPath, itemType, fileType, likeCount, commentCount, dislikeCount }) => (
        <ListItem key={itemID} props={{ itemID, itemName, itemLogoPath, itemType, fileType, likeCount, commentCount, dislikeCount }} />
      ))}


    </div>
  );
}

export default App;
