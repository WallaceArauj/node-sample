// Express
import * as express from 'express';

const app = express();
const port = 3000;

// CODE HERE
app.get('/', (request, response) => {
    response.send('Hello World!');

});
app.get('/partipantes', (request, response) => {
    response.send('Hello partipante!');
    
});

app.listen(port, () => {
    console.log(`SERVER IS RUNNING AT PORT ${port}!`);
});