import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
    to : 'anuragrdhote@gmail.com',
    from : 'anuragrdhote@gmail.com',
    subject : 'This is my new creation',
    text : 'I hope it reached you!'
}

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