import { JetlyApp } from '../app/app.types'
import { v4 as uuidv4 } from 'uuid'

export const configureTodos = (app: JetlyApp) => {
    const db = app.get('mysql')

    db('todos')
        .insert({
            title: 'another item',
            id: uuidv4(),
        })
        .then(result => console.log('success'))
        .catch(e => console.error(`Error: ${e}`))

    app.use('/todos', {
        async find(body) {
            return 'get todos?'
        },
    })
}
