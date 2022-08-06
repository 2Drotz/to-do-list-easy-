const input = document.querySelector('#input'),
   allList = document.querySelector('.allList'),
   eraser = document.querySelector('#eraser');



eraser.addEventListener('click', () => {
   allList.textContent = '';
   input.value = '';
});

input.addEventListener('keydown', (e) => {
   if (e.key == 'Enter') {
      addList();
   }
});

function addList() {
   let h2 = document.createElement('h2');
   h2.textContent = '- ' + input.value;
   input.value = '';

   allList.insertAdjacentElement('beforeend', h2);

   h2.addEventListener('click', () => {
      h2.classList.toggle('active');
   });
}


