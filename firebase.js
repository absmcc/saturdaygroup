import{initializeApp, cert} from "firebase-admin/app"
import {getFirestore} from "firebase-admin/firestore"
import { credentials } from "./credentials.js"

initializeApp({
credential: cert(credentials)

})

const db = getFirestore()

// //ready to work in the db

// console.log("database is ready")

db.collection("cars").get()
.then(moviesCollection=>{

moviesCollection.docs.forEach(movie => {
   
    console.log(movie.data())
   });
})
.catch(err=>{
    console.error(err)
})