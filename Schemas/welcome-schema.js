const mongoose = require("mongoose");

const reqString = {
  type: String,
  required: true
}

const welcomeSchema = new mongoose.Schema({
  _id: reqString,
  channelId: reqString,
  message: reqString
})

module.export = mongoose.model("welcome-channels", welcomeSchema)
