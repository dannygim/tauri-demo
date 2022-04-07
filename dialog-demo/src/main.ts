import { invoke } from "@tauri-apps/api";

const name = 'Tauri';

async function displayHello() {
    let message: string = await invoke("hello_command", { name });
    document.body.innerHTML = message;
}

displayHello();
