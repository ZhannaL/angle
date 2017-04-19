import React, { Component } from 'react';
import Products from './Products.js';


class Categories extends Component {
	render() {
		var prods = [
            {
                'img': '/assets/jcnh2.png',
				'name': 'Острый уголОК',
                'description1': 'Важная вещь в доме во время ремонта и не только',
				'description2': 'Станет помощником в любом деле. Способна помочь в любом месте в любой ситуации.Осталось только выбрать материал',
				'description3': 'Осталось только выбрать материал',
            }, {
				'img': '/assets/ghzv2.png',
				'name': 'Прямой уголОК',
				'description1': 'Самая незаменимая вещь в доме во время ремонта и не только',
				'description2': 'Станет помощником в любом деле. Способна помочь в любом месте в любой ситуации.Осталось только выбрать материал',
				'description3': 'Осталось только выбрать материал'
			}, {
				'img': '/assets/neg2.png',
				'name': 'Тупой уголОК',
				'description1': 'Важная вещь в доме во время ремонта и не только',
				'description2': 'Станет помощником в любом деле. Способна помочь в любом месте в любой ситуации.Осталось только выбрать материал',
				'description3': 'Осталось только выбрать материал'
			},{
				'img': '/assets/hfpd2.png',
				'name': 'Развернутый уголОК',
				'description1': 'Может стать эксклюзивным подарком другу, кто это действительно оценит',
				'description3': 'Осталось только выбрать материал'
			}
        ];
		return (
			<div>
                {prods.map(function(products, index) {
                    return <Products
                                key={index}
                                img={products.img}
								name={products.name}
                                description1={products.description1}
								description2={products.description2}
								description3={products.description3}/>
                })}
            </div>
		);
	}
}

export default Categories;
