const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const Contact = require('../models/contact');
const Article = require('../models/article');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/contact', (req, res) => {
    res.render('contact');
});

router.get('/education', (req, res) => {
    res.render('education');
});

router.get('/bio', (req, res) => {
    res.render('bio');
});

router.get('/random', (req, res) => {
    res.render('random');
});

router.get('/article', (req, res) => {
    res.render('article');
});

router.post('/submitArticle', (req, res) => {

    // Use a schema model 

    const date = new Date();
    const article = new Article({
        title: req.body.title,
        date: date,
        content: req.body.content
    });

    Article.collection.insertOne(article)
        .then(result => {
            // console.log(result);
            console.log('insert success..');
        }).catch(err => console.log(err));

    Article.find()
        .then(results => {
            res.render('submitArticle', { articles: results });
        }).catch(err => console.log(err));

});

/*
const title = req.body.title;
const date = new Date();
const content = req.body.content;

const article = new Article(title, date, content);
article.save();

const articles = article.findAll();

res.render('submitArticle', {articles: articles});
*/


router.get('/other', (req, res) => {
    res.render('other');
});

router.post('/submitContact', (req, res) => {

    /* */

    const contact = new Contact({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    });

    contact.save()
        .then(result => {
            res.render('submitContact', { contact: result })
                .catch(err => console.log(err));
        })


    /*  Use a class model
        const name = req.body.name;
        const email = req.body.email;
        const subject = req.body.subject;
        const message = req.body.message;
    
        const contact = new Contact(name, email, subject, message);
        contact.save();
    
        res.render('submitContact', {contact: contact}); */
});

module.exports = router;


/*
// For email

const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'yangjeo@gmail.com',
        pass: 'your password'
    }
});

var mailOption = {
    from: 'yangjeo@gmail.com',
    to: 'yangjeo@gmail.com',
    subject: 'Test',
    html: '<h1>Hello</h1>'
}

//End of Email

// in responding POST request

router.post('submitContact', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const comment = req.body.comment; // may have to change to message
    const subject = req.body.subject;

    const contact = new Contact(name, email, subject, comment);
    contact.save();

    res. render('submitContact', {contact: contact});

    transporter.sendMail(mailOption, (error, info) =>{
        if (error) {
            console.log(error);
        } else {
            console.log('Sending emai is success..');
        }
    })

});

*/