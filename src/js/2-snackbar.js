import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delayValue => {
      iziToast.show({
        message: `✅ Fulfilled promise in ${delayValue}ms`,
        position: 'topRight',
        backgroundColor: '#59a10d',
        messageColor: '#ffffff',
      });
    })
    .catch(delayValue => {
      iziToast.show({
        message: `❌ Rejected promise in ${delayValue}ms`,
        position: 'topRight',
        backgroundColor: '#ef4040',
        messageColor: '#ffffff',
      });
    });

  form.reset();
});
