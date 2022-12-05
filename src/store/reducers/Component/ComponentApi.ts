import { ISetComponent } from "@src/models/ISetComponent"


export const ComponentApi = {
    async get(id?: any) {
        if (id) {
            return fetch('http://localhost:3000/component/' + id)
        } else {
            return fetch('http://localhost:3000/component/')
        }
    },
    async update(id: any, data: ISetComponent) {
        return fetch('http://localhost:3000/component/' + id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    },

}