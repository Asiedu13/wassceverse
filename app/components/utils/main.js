export function saveDataInLocalStorage(storageName, value) {
    if ( storageName.length > 0 && value.length > 0 ) {
        localStorage.setItem( storageName, value );
    }
}

function resetDataValues() {
    // do something
}