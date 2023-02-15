#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use std::sync::{Arc, Mutex};

use tauri::State;

#[derive(Default)]
struct WindowState(Arc<Mutex<String>>);


fn main() {
    tauri::Builder::default()
        .manage(WindowState(Default::default()))
        .invoke_handler(tauri::generate_handler![window_state, call])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[tauri::command]
/// Takes a string as parameter and changes state to that
fn window_state(name: String, state: State<'_, WindowState>) -> String {
    let mut val = state.0.lock().unwrap();
    *val = name;
    println!("{val}");
    format!("{val}")
}

#[tauri::command]
fn call() {
  println!("CAlling");
}