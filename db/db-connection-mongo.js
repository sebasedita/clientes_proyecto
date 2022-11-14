const mongoose = require('mongoose');

const getConnection = async () => {
    try {
        const url = 'mongodb://user_api:p8G3MZdNd5RWX3L@ac-aolywy1-shard-00-00.4l1xhhs.mongodb.net:27017,ac-aolywy1-shard-00-01.4l1xhhs.mongodb.net:27017,ac-aolywy1-shard-00-02.4l1xhhs.mongodb.net:27017/?ssl=true&replicaSet=atlas-4n867w-shard-0&authSource=admin&retryWrites=true&w=majority';   

        await mongoose.connect(url);

        console.log('Conexion exitosa');
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getConnection,
}