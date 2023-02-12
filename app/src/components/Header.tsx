import { Component } from "solid-js"
import { OcSearch2 } from "solid-icons/oc";

const Header: Component<{}> = (props) => {  
  return (
  <div>
    <div class="flex m-0 px-2 py-1 items-center rounded-full bg-white">
      <OcSearch2 class="mr-2"/>
      <input
        class="focus:outline-none"
        placeholder="Search for Artists, Songs or Albums" 
        type="text">
        </input>
    </div>  
  </div>
  )
};

export default Header;