const mongoose = require("mongoose");

const reqString = {
  type: String,
  required: true
}

const giveawaySchema = mongoose.Schema({
  _id: reqString,
  prize: reqString,
  endTime: reqString,
  chID: reqString,
})

module.exports = mongoose.model("ongoing giveaways", giveawaySchema)
