export function saveDataInLocalStorage(storageName, value) {
    if ( storageName.length > 0 && value.length > 0 ) {
        localStorage.setItem( storageName, value );
    }
    console.log( localStorage.getItem( storageName ) );
}

function resetDataValues() {
    // do something
}