
pub struct StorePlaylist {
  list: Vec<Playlist>
}

impl StorePlaylist {
    pub fn new_playlist(&mut self, name: String) {
      let playlist = Playlist::new(name);
      self.add_playlist(playlist);
    }

    pub fn add_playlist(&mut self, l: Playlist) {
      self.list.push(l);
    }
}
pub struct Playlist {
  name: String,
  list: Vec<Song>
}

impl Playlist {
    pub fn new(n: String,) -> Playlist{
      Playlist { name: n, list: Vec::new() }
    }

    pub fn add_song(&mut self, song: Song) {
      self.list.push(song);
    }

    pub fn remove_song(&mut self, song: Song){
      if let Some(position) = self.list.iter().position(|x| *x == song) {
        self.list.remove(position);
      }

    }
}


pub struct Artist {
  name: String,
  releases: Vec<Album>
}


pub struct Album {
  name: String,
  album_type: String,
  tracks: Vec<Song>
}
#[derive(PartialEq)]
pub struct Song {
  name: String,
  length: i32
}

