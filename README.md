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
POST    : /items/

//update item
PUT     : /items/:name

//update item
DELETE  : /items/:name

```
node modules
```
[https://www.mongodb.org](Link URL)
[https://robomongo.org](Link URL)
[http://expressjs.com](Link URL)
[http://mongoosejs.com](Link URL)
```
