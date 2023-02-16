use std::iter::repeat_with;

use crate::{Artist, StoreArtist};

/// Creates 10 characters long identifier
pub fn generate_id() -> String {
    let s: String = repeat_with(fastrand::alphanumeric).take(10).collect();
    s
}

pub fn populate_app(){
  let artists = populate_artists_store();
}

/// Populates artist store with 10 dummy artists
fn populate_artists_store() -> StoreArtist{
    let genres = vec!["pop", "metal", "house"];
    let mut store = StoreArtist::new();
    for _n in 1..11 {
        let mut name: String = String::from("Artist-");
        let num: String = fastrand::i16(..).to_string();
        name.push_str(&num.as_str());
        let artist = Artist::new(name, genres[fastrand::usize(..genres.len())].to_string());
        store.add_artist(artist);
    }

    println!("{:?}", store);

    store
}
