import throttle from 'lodash.throttle';


 const form = document.querySelector(".feedback-form");
 const KEY = "feedback-form-state";
 const storage = {};


form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

 storageContent();

function onSubmit(event) {
  event.preventDefault();
 
    if (localStorage.getItem(KEY)) {

        console.log(JSON.parse(localStorage.getItem(KEY)));
    }
    event.currentTarget.reset();
    localStorage.removeItem(KEY);
}
function onInput(event) {
    storage[event.target.name] = event.target.value;
    localStorage.setItem(KEY, JSON.stringify(storage));
}

function storageContent() {
    const saveData = JSON.parse(localStorage.getItem(KEY));
     if (saveData) {
    form.email.value = saveData.email;
    form.message.value = saveData.message;
  }
}