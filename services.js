const db = require('./db.js');
 let ser = {
    dbquery : (query,callback)=>{
        db.query(query,(err,finalresult)=>{
            if(err){
                throw err;
            }
            callback(finalresult);
        })
    },
	dbinsert : (query,arr,callback)=>{
        db.query(query,arr,(err,finalresult)=>{
            if(err){
                throw err;
            }
            callback(finalresult);
        })
    },
}
module.exports = ser;