module.exports = {
  'secret': 'R_RocketChallenge',
  'database': 'mongodb://chrishughes:Boston12@cluster0-shard-00-00-b85ug.azure.mongodb.net:27017,cluster0-shard-00-01-b85ug.azure.mongodb.net:27017,cluster0-shard-00-02-b85ug.azure.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',
  'port': process.env.PORT || 3000
}