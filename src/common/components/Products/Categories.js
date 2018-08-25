import React from 'react';
import Products from './Products';

const prods = [
  {
    img: '/assets/jcnh2.png',
    name: 'Острый уголОК',
    description1: 'Важная вещь в доме во время ремонта и не только',
    description2: 'Станет помощником в любом деле. Способна помочь в любом месте в любой ситуации.Осталось только выбрать материал',
    description3: 'Осталось только выбрать материал',
    description4: 'acute',
  }, {
    img: '/assets/ghzv2.png',
    name: 'Прямой уголОК',
    description1: 'Самая незаменимая вещь в доме во время ремонта и не только',
    description2: 'Станет помощником в любом деле. Способна помочь в любом месте в любой ситуации.Осталось только выбрать материал',
    description3: 'Осталось только выбрать материал',
    description4: 'contacts',
  }, {
    img: '/assets/neg2.png',
    name: 'Тупой уголОК',
    description1: 'Важная вещь в доме во время ремонта и не только',
    description2: 'Станет помощником в любом деле. Способна помочь в любом месте в любой ситуации.Осталось только выбрать материал',
    description3: 'Осталось только выбрать материал',
    description4: 'acute',
  }, {
    img: '/assets/hfpd2.png',
    name: 'Развернутый уголОК',
    description1: 'Может стать эксклюзивным подарком другу, кто это действительно оценит',
    description3: 'Осталось только выбрать материал',
    description4: 'acute',
  },
];
const Categories = () => (
  <div>
    {prods.map(products => (<Products
      img={products.img}
      name={products.name}
      description1={products.description1}
      description2={products.description2}
      description3={products.description3}
      description4={products.description4}
    />))}
  </div>
);
export default Categories;
