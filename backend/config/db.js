import mongoose from "mongoose";

const DbCon=async()=>{
    try {
        mongoose.connect("mongodb+srv://vijaya:zfxSH8tiScuNf2-@cluster0.ztuq8.mongodb.net/notes-app?retryWrites=true&w=majority&appName=Cluster0")
        console.log('Mongodb is connected')
        
    } catch (error) {
        console.log("Error in mongodb connection",error)
    }
}
export default DbCon