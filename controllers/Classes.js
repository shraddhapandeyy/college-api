const Class = require("../models/classesModel");

exports.getClasses=async(req,res)=>{
    try{//finding all Classes
        
        const Classes=await Class.find();

        return res.json(Classes);
    }
    catch(err){
        return res.status(400).send("Some Error Occured");
    }
}

exports.addClass = async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).send("Please send details");
  }
  // storing body data
  const name = body.name;
  const code = body.code;
  const mentors = body.mentors;
  const room = body.room;
  const date = body.date;
 
  try {// creating new Class
    await Class.create({
      name,code,mentors,room,date
    });
    return res.status(200).send("Class sucessfully added to Database");
  } catch (error) {
    return res.status(400).send("Some Error Occured")
  }
};

exports.getClass = async (req, res) => {
    try {// get Class

        await Class.findById(req.params.id,
            function (err, docs) {
                if (err) {
                  console.log(err);
                } else {
                  res.status(200).send(docs);
                }
              }
            );
            } catch (error) {
           return res.status(400).send("Some Error Occured")
         }};

exports.deleteClass = async (req, res, next) => {
    try {// deleting Class

     await Class.findByIdAndDelete(req.params.id);
        return res.status(200).send("Class sucessfully deleted");
      } catch (error) {
        return res.status(400).send("Some Error Occured")
      }
};

exports.updateClass = async (req, res, next) => {
    try {// update Class

        await Class.findByIdAndUpdate(req.params.id,
            {$set:req.body},
            function (err, docs) {
                if (err) {
                  console.log(err);
                } else {
                  res.status(200).send("Class got updated"
                  );
                }
              }
            );
            } catch (error) {
           return res.status(400).send("Some Error Occured")
         }};

