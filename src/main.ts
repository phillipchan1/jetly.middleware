import app from './jetly'

const port = app.get('port')
console.log(`port`, port)

// @ts-ignore
const server = app.listen(port)

server.on('listening', () => {
    console.info(`${app.get('name')} listening on ${app.get('url')}`)
})
