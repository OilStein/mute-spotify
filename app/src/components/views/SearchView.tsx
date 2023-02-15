import { Component } from "solid-js";
import Searchbar from "../utils/Searchbar"

/// View where user can search by typing in searchbar or browse by genres
const SearchView: Component<{}> = (props) => {
  
  return (
    <div>
      <Searchbar/>
      <h3>Recently searched</h3>
      <hr/>
      <h3>Browse by genres</h3>

    </div>
  );
};

export default SearchView;