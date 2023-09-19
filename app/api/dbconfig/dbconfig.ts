import mongoose, { connection } from "mongoose";

export async function connect() {

try{
    mongoose.connect(process.env.MONGO_URI!);
    const connect = mongoose.connection;

        connection.on( 'connected', () => {
        console.log('mongoDB connected succesfully');
    })

    connection.on('error', () => {

        console.log('mongoDB correction error please make sure mongoDB is running' );
        process.exit();
    } )

}catch(error){
    console.log("somthing goes wrong! ");
    console.log(error);

}


    
}
    
