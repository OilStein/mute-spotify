import { Component, createSignal, Accessor, Setter } from "solid-js";
import Header from "./Header"
import Popup from "./Popup"
import AlbumForm from "./AlbumForm"

type BodyProps = {
  state: Accessor<number>,
  setState: Setter<number>
}

const Body: Component<BodyProps> = (props) => {
  
  return (
    <div class="flex flex-col px-7 py-3">
    </div>
  )
};

export default Body;