const mongoose = require('mongoose');

// Schema as a model

var contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    subject: {
        type: String
    },
    message: {
        type: String
    }
});

module.exports = mongoose.model('Contact', contactSchema);


/* class as a model
const contacts = [];

class Contact {
    constructor(name, email, subject, message){
        this.name = name;
        this.email = email;
        this.subject = subject;
        this.message = message;
    }

    save(){
        contacts.push(this);
    }
}

module.exports = Contact;
*/