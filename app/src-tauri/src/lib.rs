
pub mod utils;

pub struct StorePlaylist {
    list: Vec<Playlist>,
}

impl StorePlaylist {
    /// Creates a new playlist and adds it to the StorePlaylist list vector
    pub fn new_playlist(&mut self, name: String) {
        let playlist = Playlist::new(name);
        self.add_playlist(playlist);
    }
    /// add a playlist to the list vector
    pub fn add_playlist(&mut self, l: Playlist) {
        self.list.push(l);
    }
}
#[derive(PartialEq)]
pub struct Playlist {
    id: String,
    name: String,
    list: Vec<Song>,
}

impl Playlist {
    /// Creates a new playlist
    pub fn new(n: String) -> Playlist {
        Playlist {
            id: utils::generate_id(),
            name: n,
            list: Vec::new(),
        }
    }

    /// Adds a song to playlist
    pub fn add_song(&mut self, song: Song) {
        self.list.push(song);
    }

    /// Removes a song from the playlist
    pub fn remove_song(&mut self, song: Song) {
        if let Some(position) = self.list.iter().position(|x| *x == song) {
            self.list.remove(position);
        }
    }
}

#[derive(Debug)]
/// Stores Artists to HashMap where Artist is the key and vector of albums are value
pub struct StoreArtist {
    list: Vec<Artist>
}

impl StoreArtist {
    pub fn new() -> Self { Self { list: vec![] } }

    pub fn add_artist(&mut self, artist: Artist){
      self.list.push(artist);
    }
}

#[derive(Eq, PartialEq, Hash, Debug)]
pub struct Artist {
    id: String,
    name: String,
    genre: String,
    albums: Vec<Album>,
}

impl Artist {
    pub fn new(name: String, genre: String) -> Self { Self { id: utils::generate_id(), name, genre, albums: vec![] } }

  
}

#[derive(Debug, PartialEq, Eq, Hash)]
pub enum AlbumType {
  EP,
  Single,
  Album,
}

#[derive(PartialEq, Eq, Hash, Debug)]
pub struct Album {
    id: String,
    artist_id: String,
    title: String,
    album_type: AlbumType,
    songs: Vec<Song>,
}

impl Album {
    pub fn new(title: String, artist_id: String, album_type: AlbumType) -> Album {
        Album {
            id: utils::generate_id(),
            artist_id,
            title,
            album_type,
            songs: vec![],
        }
    }
}
#[derive(Eq, Hash, PartialEq, Debug)]
pub struct Song {
    id: String,
    artist_id: String,
    album_id: String,
    name: String,
    length: i32,
}
