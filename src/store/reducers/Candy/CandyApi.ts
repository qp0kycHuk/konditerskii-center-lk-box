import { ICandy } from "@src/models/ICandy"


export const CandyApi = {
    async get(id?: any) {
        if (id) {
            return fetch('http://localhost:3000/candy/' + id)
        } else {
            return fetch('http://localhost:3000/candy/')
        }
    },
    async update(id: any, data: ICandy) {
        return fetch('http://localhost:3000/candy/' + id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    },

}