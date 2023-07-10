const Detail = require("../models/detail");

const details = async (req, res) => {
    const{name, email, contactnumber, salary, jobtitle} = req.body;
    try{
        const newDetail = new Detail({
            name,
            email,
            contactnumber,
            salary,
            jobtitle
        });
        await newDetail.save();
        res.status(200).json({detail:newDetail,message: "Details saved successfully"});
    }catch(err){
        res.status(400).json({
          status: "fail",
          message: err,
        });
    }
};

const getUserDetails = async (req, res) => {
    try{
        const details = await Detail.find();
        res.status(200).json({details});
    }catch(err){
        res.status(400).json({
          status: "fail",
          message: err,
        });
    }
};

module.exports = {details, getUserDetails};