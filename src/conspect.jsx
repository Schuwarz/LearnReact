// ===================================
//      Начало тут
// ===================================

// Компоненты - js функции, возвращают разметку. Пишуться с большой буквы

// export default - имеет главный компонент файла

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
  function handleClick() {alert('жопа');}

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
    ...
  }

// useState Возвращает текущее состояние something и функ setSomething

// хуки - функ начинающиеся c use. (useState)

// Пропсы - информация передаваемая вниз или вверх компонентам

import {useState} from 'react';

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