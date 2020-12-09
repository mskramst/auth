/*

interface Taco {
  name: string;
  value: number;
}

const newTaco: Taco = {
  name: 'Howdy',
  value: 2
}


console.log(newTaco);
*/


import express, { Request, Response } from 'express';
import path from 'path';
import { Button } from 'bootstrap';

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/css/'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req: Request, res: Response) => {
  res.render('home');
});


app.get('/test', (req: Request, res: Response) => {
  res.render('test');
});


app.listen(3000, () => {
  console.log('Listening at port 3000');
})



