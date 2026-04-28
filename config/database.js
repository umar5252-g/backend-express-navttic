import mongoose from "mongoose"
const db = async ()=>{
  try{
    const databaseResponse = await mongoose.connect('mongodb://localhost:27017/sample-database')
    console.log("db is connected successfully...!")
  }
  catch(error){
console.log(error)
  }
}

export default db;