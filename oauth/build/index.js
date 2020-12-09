"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var app = express_1.default();
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use('/bootstrap', express_1.default.static(__dirname + '/node_modules/bootstrap/dist/css/'));
app.set('views', path_1.default.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    res.render('home');
});
app.get('/test', function (req, res) {
    res.render('test');
});
app.listen(3000, function () {
    console.log('Listening at port 3000');
});
