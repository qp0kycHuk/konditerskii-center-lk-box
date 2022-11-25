import { ISet } from "@src/models/ISet"


export const SetApi = {
    async get(id?: any) {
        if (id) {
            return fetch('http://localhost:3000/set/' + id)
        } else {
            return fetch('http://localhost:3000/set/')
        }
    },
    async update(id: any, data: ISet) {
        return fetch('http://localhost:3000/set/' + id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    },

}