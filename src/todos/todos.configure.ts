import { JetlyApp } from '../app/app.types'

export const configureTodos = (app: JetlyApp) => {
    app.use('/todos', {
        async find(body) {
            return 'get todos'
        },
    })
}
