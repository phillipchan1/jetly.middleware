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
    const db = knex(sqlConfig)

    app.set('mysql', db)

    db.select()
        .from('knex_migrations')
        .then(() => {
            console.info('Successfully connected to SQL DB!')
        })
        .catch(err => {
            console.error('Error connecting to SQL DB', err)
        })
}
