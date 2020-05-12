const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// sgMail.send({
//     to: 'asarwar89@yahoo.com',
//     from: 'sarwar.ahmed@ticketek.com.au',
//     subject: 'First Email',
//     text: 'Hope this email works fine!'
// });

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sarwar.ahmed@ticketek.com.au',
        subject: 'Welcome to the App!',
        text: `Welcome to the app, ${name}. These are just bla bla bla. `
    });
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sarwar.ahmed@ticketek.com.au',
        subject: 'Sorry to see you go!',
        text: `Is the something we could do better? ${name}. These are just bla bla bla. `
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}