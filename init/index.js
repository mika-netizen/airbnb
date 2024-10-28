const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const mongourl = "mongodb://127.0.0.1:27017/landerlust";
main()
    .then(() => {
        console.log("connected to db");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(mongourl);
}
const initDB = async() => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "670f6253b9100c52bcbabb6c" }));
    await Listing.insertMany(initData.data);
    console.log("data initialised");
};
initDB();