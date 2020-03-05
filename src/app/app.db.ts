import { JetlyApp } from './app.types'
import knex from 'knex'
import service from 'feathers-knex'

export const configureDBConnections = () => {
    return (app: JetlyApp) => {
        configureSQL(app)
    }
}

const configureSQL = (app: JetlyApp): void => {
    const sqlConfig = app.get('mysql')
    console.log(`sqlConfig`, sqlConfig)
    const db = knex(sqlConfig)

    app.set('mysql', db)
}
