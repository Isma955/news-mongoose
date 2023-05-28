const Categorie = require('../models/Categorie.model')

module.exports.categoriesController = {
    addCategorie : (req, res) => {
        Categorie.create({
            name: req.body.name 
        })
        .then(() => { 
            res.json('Категория добавлена')
        })
        .catch((err) => {
            res.json(err)
        })
    },
    
    deleteCategorie : (req, res) => {
        Categorie.deleteOne({name : req.body.name})
    .then (() => {
        res.json(`Категория ${req.body.name} удалена`)
    })
    .catch((err) => {
        res.json(err)
    })
    },
    showCategorie : (req, res) => {
        Categorie.find({}).then((data) => {
            res.json(data)
        })
    }
}