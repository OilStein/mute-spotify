import { Component } from "solid-js"
import SidebarOption from "./SidebarOption"
import {OcHomefill3, OcSearch3} from "solid-icons/oc"
import { SiLibrariesdotio } from 'solid-icons/si'
import {IoHeart} from 'solid-icons/io'
import { AiFillPlusSquare } from 'solid-icons/ai'
import { BsThreeDots } from 'solid-icons/bs'

const Sidebar: Component<{}> = (props) => {

  const playlists = ["Rock" , "Pop", "Indie", "Bar", "Lobby"]
  
  return (
    <div class="min-h-screen px-3 flex-col items-center w-52 bg-black pt-2">
      <SidebarOption title={""} Icon={BsThreeDots}/>
      <SidebarOption title={"Home"} Icon={OcHomefill3}/>
      <SidebarOption title={"Search"} Icon={OcSearch3}/>
      <SidebarOption title={"Your Library"} Icon={SiLibrariesdotio}/>

      <br />

      <SidebarOption title={"Create Playlist"} Icon={AiFillPlusSquare}/>
      <SidebarOption title={"Liked Songs"} Icon={IoHeart}/>

      <hr class="my-2"/>

      {playlists.map(item => <SidebarOption title={item}/>)}

    </div>
  )
  
};


export default Sidebar;