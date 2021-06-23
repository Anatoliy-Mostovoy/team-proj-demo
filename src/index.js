import './sass/main.scss';

try {
  console.log('до ошибки');
  myVar;
  console.log('после ошибки');
} catch (error) {
  console.dir(error.stack);
  console.log('ОШИБКА!!');
}

console.log('после трай');
