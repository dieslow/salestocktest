# salestocktest
Test SaleStock (Tanzah Abe)

Install depedensi module
```
npm install --save
```

Run
```
DEBUG=abe:* bin/www
```

Port
```
3000
```

Buka file App.js
```
Setting host + dbname mongo
```

Crud Item Collections
```
METHOD  : RESOURCES

//get all
GET     : /items/

//find by name
GET     : /items/:name

//find by description like
GET     : /items/description/:description

//find by stock
GET     : /items/stock/:stock

//find by id category
GET     : /items/category/:type_cat

//insert item 
//header : Content-Type , value : application/x-www-form-urlencoded
POST    : /items/

//update item
PUT     : /items/:name

//update item
DELETE  : /items/:name

```
node modules
```
https://www.mongodb.org
https://robomongo.org
http://expressjs.com
http://mongoosejs.com
```

Test : 
```
cloud  : https://whispering-anchorage-15723.herokuapp.com 
tool : POSTMAN - [http://www.getpostman.com/](http://www.getpostman.com/)
````
