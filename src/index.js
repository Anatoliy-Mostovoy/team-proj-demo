import './sass/main.scss';

// try {
//   console.log('до ошибки');
//   myVar;
//   console.log('после ошибки');
// } catch (error) {
//   console.dir(error.stack);
//   console.log('ОШИБКА!!');
// }

// console.log('после трай');

// const validJson = '{ "name": "Mango", "age": 3 }';
// const inValidJson = '{ бек вернул такое}';

// try {
//   console.log('1');
//   console.log(JSON.parse(inValidJson));
//   console.log('2');
// } catch (error) {
//   console.log(error);
//   if (error.name === 'SyntaxError') {
//     console.log('ERROR');
//   }
// }

// console.log('all Ok');
// //todo async асинхронная функция всегда возвращает промис!!!
// function getFruit(name) {
//   const fruits = {
//     strawberry: 1,
//     kiwi: 2,
//     apple: 3,
//   };
//   return Promise.resolve(fruits[name]); //! метод возвращает значение промиса
// }

// async function asyncMakeSmoothie() {
//   const apple = await getFruit('apple'); //todo await всегда ставиться перед резулттатом возврата просима
//   console.log(apple);

//   const kiwi = await getFruit('kiwi');
//   console.log(kiwi);
// }
// asyncMakeSmoothie();

// function makeSmoothie() {
//   getFruit('apple').then(apple => {
//     console.log(apple);

//     getFruit('kiwi').then(kiwi => console.log(kiwi));
//   });
// }
const ref = {
  btn: document.querySelector('.button')
}

ref.btn.addEventListener('click', onBtnClick)

function onBtnClick(){
  if(!ref.btn.classList.contains('marck')){
    ref.btn.textContent = 'Night',
    ref.btn.classList.add('marck')
    localStorage.setItem('click', 'true')
    return  
  }  ref.btn.classList.remove('marck'),
  ref.btn.textContent = 'Day'
  localStorage.removeItem('click')
}

if(localStorage.getItem('click')==='true'){
  ref.btn.classList.add('marck'),
  ref.btn.textContent = 'Night'

}
