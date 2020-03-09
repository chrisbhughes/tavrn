
var MongoClient = require('mongodb').MongoClient;
var url ='mongodb://chrishughes:Boston12@cluster0-shard-00-00-b85ug.azure.mongodb.net:27017,cluster0-shard-00-01-b85ug.azure.mongodb.net:27017,cluster0-shard-00-02-b85ug.azure.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("test");
  dbo.collection("users").find({}, { _id: 0,username: 1, createdAt: 1}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    var names = result.map(function(item) {
        return item['username', 'createdAt'];  
      });
      
      //console.log(names);
    //  console.log(names.toString())
      //var x = names.toString()
      function obj2htmltable(item) {
        var html = '<table>';
        for (var key in item) {
            var value = item[key].toString();
            html += '<tr><td>' + key + '</td><td>' + value + '</tr>';
        }
        html += '</table>';
        return html;
    }
  });
 
});
