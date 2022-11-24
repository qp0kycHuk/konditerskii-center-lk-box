import { ISetItem } from "../models/ISetItem";

export function fakeSetItem(): ISetItem {
    const titles = [
        'Тебе и Мне', 'Zlota Wisnia Солидарность', 'Nutty Cake с арахисом Новогодний', 'Chocolate Taste Bar', 'La Suissa cocoa cream',
        'Конфета Алёнка (Вафельная)', 'Конфета Ура Пятница', 'Конфета Осенний Вальс', 'Батончик Рот Фронт',
    ]

    const images = ['img/test.jpg', 'img/fake/1.jpg', 'img/fake/2.jpg', 'img/fake/3.jpg', 'img/fake/4.jpg', 'img/fake/5.jpg',]
    const comments = ['Премиум Класс', 'Производитель Атаг', 'Премиум', 'Кубанская Кормилица Вес сильно гуляет от 23 до 28гр',]



    return {
        id: Math.floor(Math.random() * 1000) + '-' + Math.floor(Math.random() * 1000),
        title: titles[Math.floor(Math.random() * titles.length)],
        weight: Math.floor(Math.random() * 10),
        weightSingle: Math.floor(Math.random() * 10),
        weightBox: Math.floor(Math.random() * 5000),
        price: Math.floor(Math.random() * 10),
        priceBox: Math.floor(Math.random() * 1000),
        priceCandy: Math.floor(Math.random() * 5),
        image: images[Math.floor(Math.random() * images.length)],
        comment: comments[Math.floor(Math.random() * images.length)],
        structure: '',
        period: Math.floor(Math.random() * 5),
        count: Math.floor(Math.random() * 10),
    }

}