// create a search bar for the mobile version
import "./styles.scss";
import Button from "../Button";
const Search = () => (
  <form action = "/" method = "get">
      <label htmlFor = "search"/>
        <input 
        type = "text" 
        name = "search" 
        placeholder = "Search"/>
        <Button text = "Search"/>

    </form>
);
export default Search;