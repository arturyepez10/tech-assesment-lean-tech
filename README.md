# TECH ASSESSMENT - LEAN TECH

This is a web app to manipulate data from purchase and sale orders for the company that hired the developer.

The company makes purchase orders for the products required in its operation and sales orders for the products sold to its customers. Both the purchase orders and the sales orders are being filled manually by the accounting area and they manually by the accounting area and they want to create a system that facilitates this management.

## DETAILS OF IMPLEMENTATION

It was a requisite to have the following routes:
-  `/registrar-compra`, where you can add a purchase order of a product.
- `/registrar-venta`, where you can add a sale order of a product.

In both routes, they receive the next parameters in the body of the request:
- `id`: Identification code of the purchase/sale.
- `fecha`: Date in format YYYY-MM-DD of the purchase/sale.
- `cantidad`: Quantity of product in the purchase/sale.
- `idProducto`: Identification of the product with the ID created by the DB.
- `nombreProducto`: Identification of the product with the name.

But, considering the nature of this routes. The implementation required a complex approach, where the manipulation of the orders and products could be done by other routes. 

To fulfill this requirements a **CRUD** architecture approach was chosen. This would allow -like the name says- to apply the objects the operations of:
- Create.
- Read.
- Update.
- Delete.

Where the objects are: products, sales and purchase orders.

## AVAILABLE ROUTES

Here, is a list of the available routes and their respective methods in the project:

- `/registrar-compra` - **POST** { body: { fecha: < dateonly >, cantidad: < int >, id: < int >, idProducto: < int >, nombreProducto: < string > } }
- `/registrar-venta` - **POST** { body: { fecha: < dateonly >, cantidad: < int >, id: < int >, idProducto: < int >, nombreProducto: < string > } }
- `/compras`
    * `/` - **GET**
    * `/:id` - **GET** { params: id < int > }
    * `/:id` - **PUT** { params: id < int >, body: { fecha: < dateonly >, cantidad: < int >, id: < int >, idProducto: < int >, nombreProducto: < string > } }
    * `/:id` - **DELETE** { params: id < int > }
- `/ventas`
    * `/` - **GET**
    * `/:id` - **GET** { params: id < int > }
    * `/:id` - **PUT** { params: id < int >, body: { fecha: < dateonly >, cantidad: < int >, id: < int >, idProducto: < int >, nombreProducto: < string > } }
    * `/:id` - **DELETE** { params: id < int > }

In the case of the **PUT** requests, not all the body is necessary. Only the fields to be updated.

## USAGE

In order to run the project, you must:

0. Clone the repository in your computer.

1. Install the requirements of the project, in order to do that:
```
npm install
```
Remember, you need to be in the root of the project.

2. Create and fill a `.env` file. Since here is where your passwords/credentials are going to be extracted from to run the project.

A recommendation is that, if you're going to run the project locally set `MYSQL_HOST=localhost` and if you use Docker `MYSQL_HOST=mysql`. This will avoid any possible problems with the creation of a connection pool.

3. All ready to go, you can run `npm run start` if you will run it locally. 

Remember, to run it locally you must have installed a MYSQL instance in your computer and create a database with the name you set in `MYSQL_DATABASE`, if not the project may failed initiation.

3. If you want to run it with Docker, you have to build the project with the next command:
```
npm run docker:build
```

4. Then, run the project with the command:
```
npm run docker:start
```

If you have an instance of MYSQL installed in your computer you may encounter a problem when this command is run. The problem is because both Docker MYSQL microserve and your instance of MYSQL will try to run in the same port "3306". To solve this, you must stop momentarily (while executing the project) your MYSQL, to do that run `sudo service mysql stop`. Then, the project should run without any problem.

Sometimes, when creating the database for the first time it may be presented an error of connection between the project and the db. This is because the projects tries to link to the database before it creates itself so it fails. It is recommended if it happens, to wait for the DB to finish setting up, closing Docker and open it again. The problem should be solved and the connection made.