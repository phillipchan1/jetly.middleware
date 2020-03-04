import feathers from '@feathersjs/feathers'
import compress from 'compression'
import helmet from 'helmet'
import cors from 'cors'
import express, { notFound, rest, urlencoded, json } from '@feathersjs/express'
import configuration from '@feathersjs/configuration'
import { JetlyApp } from './app.types'

export const configureJetly = (): JetlyApp => {
    const app = express(feathers())

    app.configure(configuration())

    app.use(helmet())
    app.use(cors())
    app.use(compress())
    app.use(json({ limit: '50mb' }))
    app.use(urlencoded({ extended: true, limit: '50mb' }))

    return app
}
