var MongoClient = require('mongodb').MongoClient

var state = {
  db: null,
}

exports.connect = function(url) {
 // if (state.db) return done()

  MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
  //  if (err) return done(err)
    
     state.db =  db.db('task1');
    //  console.log(state.db)
     return  state.db;
    // done()
  })
}

exports.get = function() {
  //  console.log(state);
  return state.db;
}

exports.close = function(done) {
  if (state.db) {
    state.db.close(function(err, result) {
      state.db = null
      state.mode = null
      done(err)
    })
  }
}