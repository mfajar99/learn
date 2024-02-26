// membuat collection baru
db.createCollection("customers")
db.createCollection("products")
db.createCollection("orders")

// menampikan semua collection
db.getCollectionNames()

// melihat data collection
db.customers.find()


