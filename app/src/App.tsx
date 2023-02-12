import { createSignal } from "solid-js"
import Body from "./components/Body"
import Sidebar from "./components/Sidebar"

const App = () => {

  const [bodyState, setBodyState] = createSignal(0);

  return (
    <div class="min-h-screen bg-zinc-900 flex">
      <Sidebar state={bodyState} setState={setBodyState}/>
      <Body state={bodyState} setState={setBodyState}/>
    </div>
    
);
}

export default App;
