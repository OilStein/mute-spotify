import { Accessor, Component, Setter } from "solid-js";
import SidebarOption from "./SidebarOption";
import { OcHomefill3, OcSearch3 } from "solid-icons/oc";
import { SiLibrariesdotio } from "solid-icons/si";
import { IoHeart } from "solid-icons/io";
import { AiFillPlusCircle, AiFillPlusSquare } from "solid-icons/ai";
import { BsThreeDots } from "solid-icons/bs";
import { invoke } from "@tauri-apps/api"

type SidebarProps = { 
  state?: Accessor<number>,
  setState?: Setter<number>
}

const Sidebar: Component<SidebarProps> = (props) => {
  const playlists = ["Rock", "Pop", "Indie", "Bar", "Lobby"];



  return (
    <div class="min-h-screen px-3 flex-col items-center w-52 bg-black pt-2">
      <SidebarOption title={""} Icon={BsThreeDots} />
      <SidebarOption title={"Home"} Icon={OcHomefill3} onClick={() => invoke("window_state", {name: "home"})}/>
      <SidebarOption title={"Search"} Icon={OcSearch3} />
      <SidebarOption title={"Your Library"} Icon={SiLibrariesdotio} />

      <br />

      <SidebarOption title={"Create Playlist"} Icon={AiFillPlusSquare} />
      <SidebarOption title={"Liked Songs"} Icon={IoHeart} />

      <hr class="my-2" />

      {playlists.map((item) => (
        <SidebarOption title={item} />
      ))}

      <hr class="my-2" />

      <SidebarOption title={"Add Album"} Icon={AiFillPlusCircle}/>
    </div>
  );
};

export default Sidebar;
