import { dialog } from "@tauri-apps/api";

async function handleClickAskDialog() {
    const result = await dialog.ask('Are you sure?', 'Ask Dialog');
    document.querySelector('.message').innerHTML = `ask dialog result: ${result}`;
}

async function handleClickConfirmDialog() {
    const result = await dialog.confirm('Are you sure?', 'Confirm Dialog');
    document.querySelector('.message').innerHTML = `confirm dialog result: ${result}`;
}

async function handleClickMessageDialog() {
    await dialog.message('This is a message dialog.');
    document.querySelector('.message').innerHTML = `The message dialog has been dismissed.`;
}

async function handleClickOpenDialog() {
    // https://tauri.studio/docs/api/js/interfaces/dialog.opendialogoptions/
    const options: dialog.OpenDialogOptions = {
        filters: [
            {
                extensions: ["txt", "png", "jpeg"],
                name: "*",
            },
        ],
        title: 'Open Dialog Demo',
    };
    const result = await dialog.open(options);
    document.querySelector('.message').innerHTML = `open dialog result: ${result}`;
}

async function handleClickSaveDialog() {
    // https://tauri.studio/docs/api/js/interfaces/dialog.opendialogoptions/
    const options: dialog.SaveDialogOptions = {
        title: 'Save Dialog Demo'
    };
    const result = await dialog.save(options);
    document.querySelector('.message').innerHTML = `save dialog result: ${result}`;
}

function init() {
    document.querySelector(".btn-ask").addEventListener('click', handleClickAskDialog);
    document.querySelector(".btn-confirm").addEventListener('click', handleClickConfirmDialog);
    document.querySelector(".btn-message").addEventListener('click', handleClickMessageDialog);
    document.querySelector(".btn-open").addEventListener('click', handleClickOpenDialog);
    document.querySelector(".btn-save").addEventListener('click', handleClickSaveDialog);
}

init();
