// ===================================
//      Начало тут
// ===================================

// В jsx нужно закрывать все теги, возвращает только 1 тег

// В jsx css-классы объявляются через className

// В jsx можно писать js в {...}

// В jsx можно js в атрибутах src={user.imgUrl}

// В атрибутах можно объекты style={{width: user.imageSize, height: user.imageSize}}

// Можно применять if \ ?

// Для отрисовки списков: цикл for \ метод массива .map()


const products = [                            // Создали массив
  { title: 'Капуста', id: 1 },
  { title: 'Чеснок', id: 2 },
  { title: 'Яблоко', id: 3 },
];

const listItems = products.map(product =>     // Перебрали массив
  <li key={products.id}>
    {products.title}
  </li>                                       // У li атрибут key
);

return (                                    // Вернули список
  <ul>{listItems}</ul>
);

// Можно объявлять функ обработчиков событий


function MyButton() {
  function handleClick() { alert('жопа'); }

  return (                                     // у handleClick не нужны ()
    <button onClick={handleClick}>
      Click me
    </button>
  );
}


// Состояние

import { useState } from 'react';

function MyButton() {
  const [count, setCount] = useState(0);
  // ...
}

// useState Возвращает текущее состояние something и функ setSomething

// хуки - функ начинающиеся c use. (useState)

// Пропсы - информация передаваемая вниз или вверх компонентам

import { useState } from 'react';

export default function MyApp() {

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton(count, onClick) {
  return (
    <button onClick={onClick}></button>
  )
}

// ===================================
//      Ваш первый компонент
// ===================================

// React компоненты - js функ., возвращают разметку. Пишуться с большой буквы

// export default - имеет главный компонент файла

export default function Хуй() {
  // return <img src="..." alt="Писюняра" />;
  // или 
  return (
    <img
      src="..."
      alt="Писюняра"
    />
  )
}

// Далее можем использовать компонент

export default function Галера() {
  return (
    <section>
      <h1>Замечательные писюлинки</h1>
      <Хуй />
      <Хуй />
      <Хуй />
    </section>
  );
}

// ===================================
//      Импорт и экспорт компонентов
// ===================================

// Три шага:
// 1. Создать файл
// 2. Экспортировать компонент из файла
// 3. Импортировать компонент в нужный файл

import Хуй from './components';

// В файле может быть только один экспорт по умолчанию, но несколько именованных экспортов
// Лучше либо по умолчанию либо именованные.

export function Хуй() {
  //...
}

// Затем в нужном файле:

import { Хуй } from './какой-то_путь'

// ===================================
//      Условный рендеринг
// ===================================

function Item({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name} ✅</li>;
    // return null; Eсли ничего не хотим возвращать. Исключение
  }
  return <li className="item">{name}</li>;
}

export default function PackingList() {
  return (
    <ul>
      <Item
        isPacked={true}
        name="Пипка"
      />
      <Item
        isPacked={false}
        name="Попка"
      />
    </ul>
  );
}

// DRY - Don't repeat yourself

// Тернарный оператор ? :

return (
  <li className="item">
    {isPacked ? name + ' ✅' : name}
  </li>
);

// И &&

return (
  <li className="item">
    {name} {isPacked && '✅'}
  </li>
);

// С переменными

function Item({ name, isPacked }) {
  let itemContent = name;

  if (isPacked) {
    itemContent = name + ' ✅';
  }

  return (
    <li className="item">
      {itemContent}
    </li>
  );
}

// В React вы управляете логикой ветвления с помощью JavaScript.
// Вы можете условно сохранить JSX в переменную и затем включить её в другой JSX с помощью фигурных скобок.


// ===================================
//      Рендер списков
// ===================================

// 1. Массив данных

const people = [
  'Креола Кэтрин Джонсон (Creola Katherine Johnson): математик',
  'Марио Молина (Mario José Molina-Pasquel Henríquez): химик',
  'Мухаммад Абдус Салам (Mohammad Abdus Salam): физик',
  'Перси Джулиан (Percy Lavon Julian): химик',
  'Субраманьян Чандрасекар (Subrahmanyan Chandrasekhar): астрофизик'
];

// 2. Преобразуем в новый массив JSX-узлов

const listItems = people.map(person => <li>{person}</li>);

// 3. Возвращаем компонент

// Фильтрация массивов

const people = [{
  id: 0,  // Используется в JSX в качестве ключа. Об этом далее.
  name: 'Креола Кэтрин Джонсон (Creola Katherine Johnson)',
  profession: 'математик',
}, {
  id: 1,
  name: 'Марио Молина (Mario José Molina-Pasquel Henríquez)',
  profession: 'химик',
}, {
  id: 2,
  name: 'Мухаммад Абдус Салам (Mohammad Abdus Salam)',
  profession: 'физик',
}, {
  id: 3,
  name: 'Перси Джулиан (Percy Lavon Julian)',
  profession: 'химик',
}, {
  id: 4,
  name: 'Субраманьян Чандрасекар (Subrahmanyan Chandrasekhar)',
  profession: 'астрофизик',
}];

// 1. Новый фильтрованный массив

const химики = people.filter(person =>
  person.profession === 'химик'
);

// 2. Преобразуем эл.

const listItems = химики.map(person =>
  <li>
    <img
      src={getImageUrl(person)}
      alt={person.name}
    />
    <p>
      <b>{person.name}:</b>
      {' ' + person.profession}.
      Достижение: {person.accomplishment}
    </p>
  </li>
);

// 3. Возвращаем компонент

// Сохранение порядка элементов списка с помощью key
// JSX-элементы, созданные внутри map() всегда должны иметь ключи!

<li key={person.id}>...</li>

// 1. Ключи должны быть уникальны
// 2. Ключи не должны меняться

// ?Почитать про Crypto: randomUUID() method

// тяжелый день...

// Я в тильте...

// Все еще...