const userM = require('../models/userModel');
const mongoose = require('mongoose');

const signUp = async (req, res) => {
    //var userData = req.body;
    // console.log(userData);
    try {
        var res_db = await userM.findOne({ email: req.body.email });
        if (res_db)
            res.send({ data: "Email Already Taken ! Try Another" });
        else {
            var userInstance = new userM(req.body);
            var db_ans = await userInstance.save();
            res.send({ data: "success" });
        }



        //  var res_db = await userM.find();
        //  if(res_db.some((obj)=>obj.email==req.body.email))
        //  res.send({data:"Email Already Taken ! Try Another"});
        //  else{
        //  var userInstance = new userM(req.body);
        //  var db_ans = await userInstance.save();
        //  res.send({data:"success"});
        //  }
    } catch (error) {
        throw error;
    }
}

const logIn = async (req, res) => {
    //var userData = req.body;
    // console.log(userData);
    try {
        var res_db = await userM.findOne({ email: req.body.email, password: req.body.password });
        res_db ? res.send({ data: res_db, status: "success" }) : res.send({ data: "Invalid Creditentials ! Please Try Again", status: "fail" });

        // ** BELOW code Works but Inefficiet     
        //  var res_db = await userM.find();
        //  var user;
        //  if( user = res_db.find((obj)=>obj.email==req.body.email && obj.password ==req.body.password ))
        //  res.send({data:user,status:"success"});
        //  else{
        //      res.send({data:"Invalid Creditentials ! Please Try Again",status:"fail"}); 
        //  }
    } catch (error) {
        throw error;
    }
}

const addPost = async function (req, res) {

    console.log(req.params.id);
    var data = { content: req.body.content, privacy: req.body.privacy,postDate:req.body.postDate };
   console.log(req.body.postDate);
    try {
        var res_db = await userM.updateOne({ _id: req.params.id }, { $push: { posts: data } });
        res.send({ status:"success" });
    } catch (error) {
        throw error;
    }
}

const getPostsById = async (req,res)=>{
    try {
       var res_db=  await userM.findById({_id: req.params.id},{posts:1});
       //console.log(res_db);
       res.send({data:res_db });
    } catch (error) {
        throw error;
    }
}

// Retrive latest post except logged in user for content feed
const getLatestPost = async (req,res)=>{
    const userid= req.params.id;
    try{
        var res_db = await userM.aggregate([ 
            { $match : {  _id:{$ne: new mongoose.Types.ObjectId(userid) }} },
            { $unwind : '$posts' },
            {$sort:{"posts.postDate" :-1}} 
        ] );
        res.send({data:res_db });
        console.log(res_db);
    }
    catch (error) {
        throw error;
    }
}

const deletePostById = async function (req, res) {
    try {
        var res_db = await userM.findOneAndUpdate({_id:req.params.userid},{$pull:{posts:{_id:req.params.postid}}},{ new: true });
         res.send({ data: res_db });
        console.log(req.params.postid);
    } catch (error) {
        throw error;
    }
}
const updatePostById = async function (req, res) {
    try {
        var res_db = await userM.findOneAndUpdate({_id:req.params.userid,"posts._id":req.params.postid},{$set:{"posts.$.content":req.body.content}},{
            new: true
          },false);
        res.send({ data: res_db });
        console.log(res_db);
    } catch (error) {
        throw error;
    }
}

const selectRecordById = async (req, res) => {
    try {
        var userid = req.params.userid;
        var res_db = await userM.findById(userid);
        res.send({ msg: res_db });
    } catch (error) {
        throw error;
    }
}
const selectRecord = async (req, res) => {
    try {
        var res_db = await userM.find();
        res.send({ msg: res_db });
    } catch (error) {
        throw error;
    }
}

module.exports = {
    signUp,
    logIn,
    addPost,
    getPostsById,
    selectRecord,
    deletePostById,
    selectRecordById,
    updatePostById,
    getLatestPost

}