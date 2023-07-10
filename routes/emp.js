const express = require("express");
var appForEmp = express.Router();
const mysql = require("mysql");
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'manager',
    database: 'dac2023'

});

connection.connect();
appForEmp.get("/", (request, response) => {

    connection.query("select * from Emp", (error, result) => {
        if (error == null) {
            var data = JSON.stringify(result);
            response.setHeader("Content-Type", "application/json");
            console.log(response.write(data));
        }
        else {
            console.log(error);
            response.setHeader("Content-Type", "application/json");
            console.log(response.write(error));
        }
        response.end();
    })
})

appForEmp.post("/",)

appForEmp.post("/", (request, response) => {
    var query =
        `insert into Emp values (${request.body.id},'${request.body.e_name}','${request.body.email}','${request.body.password}','${request.body.dname}','${request.body.doj}')`;

                connection.query(query, (error, result) => {

                    if (error == null) {
                        var data = JSON.stringify(result);
                        response.setHeader("Content-Type", "application/json");
                        console.log(response.write(data));
                    }
                    else {
                        console.log(error);
                        response.setHeader("Content-Type", "application/json");
                        console.log(response.write(error));
                    }
                    response.end();
    })
})


appForEmp.put("/:id", (request, response) => {
    var query =
        `update Emp set e_name ='${request.body.e_name}',
                           dname = ${request.body.dname}
                            where id=${request.params.id}`;

                connection.query(query, (error, result) => {

                    if (error == null) {
                        var data = JSON.stringify(result);
                        response.setHeader("Content-Type", "application/json");
                        console.log(response.write(data));
                    }
                    else {
                        console.log(error);
                        response.setHeader("Content-Type", "application/json");
                        console.log(response.write(error));
                    }
                    response.end();
    })
})

appForEmp.delete("/:id",(request,response)=>{
    var query = `delete from Emp where id = ${request.params.id}`;

    connection.query(query, (error, result) => {

        if (error == null) {
            var data = JSON.stringify(result);
            response.setHeader("Content-Type", "application/json");
            console.log(response.write(data));
        }
        else {
            console.log(error);
            response.setHeader("Content-Type", "application/json");
            console.log(response.write(error));
        }
        response.end();
})
})


module.exports = appForEmp;

