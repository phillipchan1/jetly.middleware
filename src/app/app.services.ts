import { JetlyApp } from './app.types'

import { configureTodos } from '../todos/todos.configure'

export const configureServices = () => {
    return (app: JetlyApp) => {
        configureTodos(app)
    }
}
