function showToast() {
  $toast.classList.add('show-toast');
}

function closeToast() {
  $toast.classList.remove('show-toast');
}

function setToastMessage(message) {
  const $toastMessage = document.querySelector('[data-toast="message"]');
  $toastMessage.innerText = message;
}

function addToast(event) {
  // Prevent the default behavior of reload page on submit.
  event.preventDefault();

  const $toastInput = document.querySelector('[data-form="toast-input"]');
  const toastMessage = String($toastInput.value).trim();

  // Check if the input is empty and return an alert.
  if (toastMessage.length === 0) {
    window.alert(new Error('Empty Input!'));
    return;
  }

  // Check if the toast are showing or not.
  if ($toast.classList.contains('show-toast')) {
    window.alert(new Error('Toast is already in the screen!'));
    $toastInput.value = '';
    return;
  }

  setToastMessage(toastMessage);
  showToast();

  // Clean the input field.
  $toastInput.value = '';
}

const $toast = document.querySelector('[data-toast="body"]');

const $form = document.querySelector('[data-form="toast-message-input"]');
$form.addEventListener('submit', addToast);

const $toastCloseButton = document.querySelector('[data-toast="close-button"]');
$toastCloseButton.addEventListener('click', closeToast);
