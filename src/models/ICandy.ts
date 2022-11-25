export interface ICandy {
    id: string
    title: string
    weight: number // Масса в наборе
    weightSingle: number // Масса одной позиции
    weightBox: number // Масса блока (коробки)
    price: number // Стоимость
    priceBox: number // Стоимость коробки
    priceCandy: number // Цена одной конфеты
    image: string
    comment: string
    structure: string // Состав
    period: number // Срок годности
    count: number 
}