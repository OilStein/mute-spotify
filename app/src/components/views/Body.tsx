import { invoke } from "@tauri-apps/api"
import { Component, createSignal, Accessor, Setter, Switch, Match } from "solid-js";
import HomeView from "./HomeView"
import SearchView from "./SearchView"
import YourLibraryView from "./YourLibraryView"

type BodyProps = {
  state?: Accessor<number>,
  setState?: Setter<number>
}

/// main view component
const Body: Component<BodyProps> = (props) => {

  const [x] = createSignal("search");

  // Figure out how match view state with playlist in backend
  return (
    <Switch fallback={<HomeView/>}>
      <Match when={x()== "search"}><SearchView/></Match>
      <Match when={x()== "lib"}><YourLibraryView/></Match>
    </Switch>
      
  )
};

export default Body;