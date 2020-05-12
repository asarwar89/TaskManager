const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

// const task = new Task({
//     description: ' The Second Part is Done ',
//     completed: true
// });

// task.save().then((theTask) => {
//     console.log(theTask)
// }).catch((error) => {
//     console.log('Error!', error);
// });

