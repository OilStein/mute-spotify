import { createSignal } from "solid-js"
import {Event as TauriEvent, listen} from "@tauri-apps/api/event"

import Body from "./components/views/Body"
import Sidebar from "./components/sidebar/Sidebar"

const App = () => {

  // Contains two main components sidebar and body.
  // Sidebar contains reactive buttons that sets view in body component 
  return (
    <div class="min-h-screen bg-zinc-900 flex">
      <Sidebar/>
      <Body/>
    </div>
    
);
}

export default App;
