var db = require("../database-mysql/index.js");

// UNCOMMENT IF USING MYSQL WITH CALLBACKS
var getAll = (req, res) => {
    let query = `SELECT * FROM menu`;
    db.query(query, (err, menu) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(menu);
        }
    });
};
var addItem = (req, res) => {
    let { food, price } = req.body;
    let query = `INSERT INTO menu SET food= ?, price = ?`;
    db.query(query, [food, price], (err, result) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(201).json(result)
        }
    });
};

var modifItem = (req, res) => {
    let id = req.params.menuId;
    let { name, photo, price } = req.body;
    let query = `UPDATE menu SET name= ?, photo= ?, price = ?  WHERE id = ?`;
    db.query(query, [name, photo, price, id], (err, result) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(201).json(result)
        }
    });
};
var deleteItem = (req, res) => {
    console.log(req.params)
    let id = req.params.menuId;
    let query = `DELETE FROM menu WHERE id = ?`;
    db.query(query, id, (err, result) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(201).json(result)
        }
    });
};



module.exports = { getAll, addItem, modifItem, deleteItem };
