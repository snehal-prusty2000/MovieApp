
const Movies = require("./../Models/movieModel")

//ROUTE HANDLER FUNCTION

exports.getAllMovie = async (req, res) => {
    try {
        let queryStr = JSON.stringify(req.query);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
        const queryObj = JSON.parse(queryStr);

        console.log("QueryObj :", queryObj)

        let query = Movies.find(queryObj);

        //SORTING LOGIC
        if (req.query.sort) {
            const sortField = req.query.sort;
            query = query.sort({ [sortField]: 1 });

        } else {
            query = query.sort('-createdAt')
        }
        //console.log("query: ",query)

        const movies = await query;

        res.status(200).json({
            status: "Success",
            length: movies.length,
            data: {
                movies
            }
        })
    } catch (err) {

        res.status(404).json({
            staus: "fail",
            message: err.message
        })
    }

}

exports.deleteMovie = async (req, res) => {
    try {
        await Movies.findByIdAndDelete(req.params.id);

        res.status(204).json({
            staus: "Success",
            data: null
        })
    } catch (err) {

        res.status(404).json({
            staus: "fail",
            message: err.message
        })
    }
}


exports.updateMovie = async (req, res) => {
    try {
        const movies = await Movies.findByIdAndUpdate(req.params.id, req.body);

        res.status(200).json({
            staus: "Success",
            data: {
                movies
            }
        })
    } catch (err) {

        res.status(404).json({
            staus: "fail",
            message: err.message
        })
    }

}

exports.createMovie = async (req, res) => {


    try {
        const movie = await Movies.create(req.body);

        res.status(200).json({
            staus: "success",
            data: {
                // movie:movie
                movie
            }
        })
    }
    catch (err) {
        // console.log(err);
        res.status(400).json({
            staus: "fail",
            message: err.message
        })
    }
}


exports.getMovie = async (req, res) => {
    try {
        const movie = await Movies.findById(req.params.id); e

        res.status(200).json({
            staus: "Success",
            length: movie.length,
            data: {
                movie
            }
        })
    } catch (err) {

        res.status(404).json({
            staus: "fail",
            message: err.message
        })
    }
}


