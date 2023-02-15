import { Component } from "solid-js";

type songRow = {
  track: any,
}

const SongRow: Component<songRow> = ({track}) => {  
  return (
    <div class="ml-5 p-5 flex items-center z-10 hover:cursor-pointer hover:bg-black hover:opacity-80">
      <img class="h-10 w-10" alt="kuva" ></img>
      <div class="ml-5">
        <h1 class="text-base">{track.name}</h1>
        <p class="mt-1 text-gray-600 text-sm">
          {track.artists.name}
          {track.album.name}
        </p>
      </div>
    </div>
  )
};

export default SongRow