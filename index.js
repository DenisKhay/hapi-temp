const hapi = require('hapi');
const mongoose = require('mongoose');
const Painting = require('./models/Painting');
const DB_URL = 'mongodb://localhost:27017/test-db';

const server = hapi.server({
    port: 4000,
    host: 'localhost'
});

const init = async () => {

    server.route([
        {
            method: 'GET',
            path: '/',
            handler(request, reply) {
                return `<h1>My modern hapi server</h1>`;
            }
        },
        {
            method: 'GET',
            path: '/api/v1/paintings',
            handler (request, reply) {
                return Painting.find();
            }
        },
        {
            method: 'POST',
            path: '/api/v1/paintings',
            handler(request, reply){
                const { name, url, techniques } = request.payload;
                const painting = new Painting({
                    name,
                    url,
                    techniques
                });
                return painting.save();
            }
        }
    ]);

    await server.start();
    console.log('server started at', server.info.uri);
};

init();


mongoose.connect(DB_URL, {useNewUrlParser: true});
mongoose.connection.once('open', (...args) => {
    console.log('connected to db', args);
});