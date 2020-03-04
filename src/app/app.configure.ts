import feathers from '@feathersjs/feathers'
import compress from 'compression'
import helmet from 'helmet'
import cors from 'cors'
import express, { notFound, rest, urlencoded, json } from '@feathersjs/express'
import configuration from '@feathersjs/configuration'
import { JetlyApp } from './app.types'
import { configureDBConnections } from './app.db'
import { configureServices } from './app.services'

export const configureJetly = (): JetlyApp => {
    const app = express(feathers())

    app.configure(configuration())

    app.use(helmet())
    app.use(cors())
    app.use(compress())
    app.use(json({ limit: '50mb' }))
    app.use(urlencoded({ extended: true, limit: '50mb' }))
    app.configure(rest())
    app.use((req, res, next) => {
        // @ts-ignore
        req.feathers.headers = req.headers
        next()
    })
    app.configure(configureDBConnections())
    app.configure(configureServices())

    app.use(notFound())

    return app
}
