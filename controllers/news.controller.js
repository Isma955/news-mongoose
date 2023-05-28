const News = require('../models/News.model')

module.exports.newsController = {
    showAllNews : (req, res) => {
        News.find({}).then((data) => {
            res.json(data)
        })
    },
    addNews : (req, res) => {
        const {title, text, category} =req.body
        News.create({
            title,
            text,
            category
        })
        .then(() => {
            res.json('Новость добавлена')
        })
        .catch((err) => {
            res.json(err)
        })
    },
    deleteNews : (req, res) => {
        News.deleteOne ({title : req.body.title})
    .then(() => {
        res.json(`Новость  "${req.body.title}" удалена`)
    }).catch((err) => {
        res.json(err)
    })
    },
    showSomeNews : (req, res) => {
        News.find({title:req.body.title})
    .then((data) => {
        res.json(data)
    }).catch((err) => {
        res.json(err)
    })},
    newsChange : (req,res) => {
        News.findByIdAndUpdate(req.params.id,{
            title : req.body.title,
            text : req.body.text})
            .then((data) => {
                res.json(data)
            }).catch ((err)=> {
                res.json(err)
            })
    },
    showAllNewsCat : async (req, res) => {
        const newsFind = await News.find({category : req.params.id})
        .populate('category');
        res.json(newsFind)
    }
}