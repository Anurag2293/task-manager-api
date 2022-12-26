import sgMail from '@sendgrid/mail';

const sendgridAPIKey = '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';

sgMail.setApiKey(sendgridAPIKey);

const msg = {
    to : 'anuragrdhote@gmail.com',
    from : 'anuragrdhote@gmail.com',
    subject : 'This is my new creation',
    text : 'I hope it reached you!'
}

// sgMail.send(msg).then(() => {
//     console.log('Email sent');
// }).catch((error) => {
//     console.log(error);
// })

export const sendWelcomeEmail = async (email, name) => {
    const msg = {
        to : email,
        from : 'anuragrdhote@gmail.com',
        subject : 'Thanks for joining in!',
        text : `Welcome to the app, ${name}. Let me know how you get along with the app.`
    }

    try {
        await sgMail.send(msg);
    } catch (e) {
        console.log(e);
    }
}

export const sendCancellationEmail = async (email, name) => {
    const msg = {
        to : email,
        from : 'anuragrdhote@gmail.com',
        subject : 'Leaving so early! 🥲',
        text : `Hey ${name}, we would have liked to have you little longer. You can tell us why you went away so early.`
    }

    try {
        await sgMail.send(msg);
    } catch (e) {
        console.log(e)
    }
}