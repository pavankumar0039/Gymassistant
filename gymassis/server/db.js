const mongoose = require('mongoose');
const mongouri = 'mongodb+srv://vaishnavigudivada030703:Vaishu1234@vaishnavi.ysp5yfr.mongodb.net/';

const connectToMongodb = async () => {
    try {
        await mongoose.connect(mongouri);
        console.log("Connected To Mongodb");
    }
    
    catch (err) {
        console.log(err)
    }

}
module.exports = connectToMongodb;

