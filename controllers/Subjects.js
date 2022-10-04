const Subject = require("../models/subjectModel");

exports.getSubjects=async(req,res)=>{
    try{//finding all subjects
        
        const subjects=await Subject.find();

        return res.json(subjects);
    }
    catch(err){
        return res.status(400).send("Some Error Occured");
    }
}

exports.addSubject = async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).send("Please send book details");
  }
  // storing body data
  const name = body.name;
  const code = body.code;
  const mentors = body.mentors;
  const books = body.books;
  const syllabus = body.syllabus;
 
  try {// creating new subject
    await Subject.create({
      name,code,mentors,books,syllabus
    });
    return res.status(200).send("Subject sucessfully added to Database");
  } catch (error) {
    return res.status(400).send("Some Error Occured")
  }
};

exports.getSubject = async (req, res) => {
    try {// get subject

        await Subject.findById(req.params.id,
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

exports.deleteSubject = async (req, res, next) => {
    try {// deleting subject

     await Subject.findByIdAndDelete(req.params.id);
        return res.status(200).send("Subject sucessfully deleted");
      } catch (error) {
        return res.status(400).send("Some Error Occured")
      }
};

exports.updateSubject = async (req, res, next) => {
    try {// update subject

        await Subject.findByIdAndUpdate(req.params.id,
            {$set:req.body},
            function (err, docs) {
                if (err) {
                  console.log(err);
                } else {
                  res.status(200).send("Subject got updated"
                  );
                }
              }
            );
            } catch (error) {
           return res.status(400).send("Some Error Occured")
         }};

