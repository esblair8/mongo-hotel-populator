require('dotenv').config()

mongoose.Promise = global.Promise;
let isConnected;

module.exports = connectToDatabase = (mongoose) => {

    if (isConnected) {
        console.log("using existing database connection");
        return Promise.resolve(isConnected);
    }

    console.log("using new database connection");
    return mongoose.connect(process.env.DB, { useNewUrlParser: true }).then(db => {
        isConnected = db
    });
};