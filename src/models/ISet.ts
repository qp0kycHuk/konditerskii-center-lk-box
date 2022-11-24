import { ISetComponent } from "./ISetComponent"
import { ISetItem } from "./ISetItem"

export interface ISet {
    id: string
    title: string
    weight: number
    purchasePrice: number
    image: string
    comment: string
    items: ISetItem[]
    components?: ISetComponent[] 
}