
import throttle from 'lodash.throttle';


//перебір . / роблю через конкретизацію елементів
const emailForm = document.querySelector("[name=email]");
const messageForm = document.querySelector("[name=message]");
const form = document.querySelector(".feedback-form");
 
const KEY = "feedback-form-state";



const storage = {
     'email': '',
    'message': '',
 };

// ключі

emailForm.addEventListener('input', throttle(onInput, 500));
messageForm.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);


//зберігаю
 storageContent();


//Очищую і виводжу в консоль, завантажую , відстежую 
function onSubmit(event) {
  event.preventDefault();
 
   console.log(`e-mail: ${emailForm.value}, message: ${messageForm.value}`);
    
    event.target.reset();
    localStorage.removeItem(KEY);
}


function onInput(event) {
  storage.email = emailForm.value;
  storage.message = messageForm.value;
    localStorage.setItem(KEY, JSON.stringify(storage));
}

function storageContent() {
  const saveData = JSON.parse(localStorage.getItem(KEY));
     if (saveData) {
    form.email.value = saveData.email || "";
    form.message.value = saveData.message || "";
  }
}


