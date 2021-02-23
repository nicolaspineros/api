const app = require('./app');
const {createConnection} = require('./routes/database');

createConnection();
async function main() {
    await app.listen(app.get('port'));
    console.log('Server on port', app.get('port'))
}

main();
