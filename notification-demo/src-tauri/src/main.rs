#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use tauri::{Menu, MenuItem, Submenu};

fn create_menu() -> Menu {
  let submenu = Submenu::new("App", Menu::new().add_native_item(MenuItem::Quit));
  let menu = Menu::new()
    .add_submenu(submenu);
  return menu;
}

fn main() {
  tauri::Builder::default()
    .menu(create_menu())
    .invoke_handler(tauri::generate_handler![hello_command])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

#[tauri::command]
fn hello_command(name: String) -> String {
  return format!("Hello {}!", name).into()
}
