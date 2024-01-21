export function saveDataInLocalStorage(storageName, value) {
  if (storageName.length > 0 && value.length > 0) {
    localStorage.setItem(storageName, value);
  }
  console.log(localStorage.getItem(storageName));
}

function resetDataValues() {
  // do something
}

export function getAndVerifyData(event, inputLabel, inputValue) {
  event.preventDefault();

  if (inputValue !== "" && inputValue != undefined) {
    console.log(`${inputLabel}`);
    saveDataInLocalStorage(inputLabel, inputValue);
    return true;
  }
  return false;
}
