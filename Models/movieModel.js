const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required this field"],
    unique: true,
    
  },
  desCription: {
    type: String,
    required: [true, "Description is required this field"],
    trim: true
  },
  duration: {
    type: Number,
    required: [true, "Duration is required Field "]
  },
  rating: {
    type: Number,
  },
  totalRating: {
    type: Number
  },
  releaseYear: {
    type: Number,
    required: [true, "Realease Year the required Field"]
  },
  releaseDate: {
    type: Date
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select:false
  },
  genras: {
    type: [String],
    required: [true, "Genres the required Field"]
  },
  directors: {
    type: [String],
    required: [true, "Director is  required Field"]
  },
  coverImage: {
    type: String,
    required: [true, "CoverImage is required Field"]
  },
  actors: {
    type: [String],
    required: [true, "actor is  required Field"]
  },
  price: {
    type: Number,
    required: [true, "Price is  required Field"]
  }
});

const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie;


