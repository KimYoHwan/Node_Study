import routes from "../routes";
import Video from "../models/Video";
import Comment from "../models/Comment";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({}).sort({ _id: -1 });
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    res.rend("home", { pageTitle: "Home", videos: [] });
  }
};
export const search = async (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  let videos = [];
  try {
    videos = await Video.find({
      title: { $regex: searchingBy, $options: "i" },
    });
  } catch (error) {
    console.log(error);
  }
  console.log();
  res.render("Search", { pageTitle: "Search", searchingBy, videos });
};

export const getupload = (req, res) =>
  res.render("Upload", { pageTitle: "Upload" });

export const postupload = async (req, res) => {
  const {
    body: { title, description },
    file: { location },
  } = req;
  const NewVideo = await Video.create({
    fileUrl: location,
    title,
    description,
    creator:req.user.id,
  });
  req.user.videos.push(NewVideo.id);
  req.user.save();
  res.redirect(routes.videoDetail(NewVideo.id));
};

export const videoDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id).populate("creator").populate("comments");;
    res.render("videoDetail", { pageTitle: video.title, video });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const getEditVideo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    if(video.creator !== req.user.id){
      throw Error();
    }else{
      res.render("editVideo", { pageTitle: `Edit ${video.title} `, video });
    }
    
  } catch (error) {
    res.redirect(routes.home);
  }
};
export const postEditVideo = async (req, res) => {
  const {
    params: { id },
    body: { title, description },
  } = req;
  try {
    await Video.findOneAndUpdate({ _id: id }, { title, description });
    res.redirect(routes.videoDetail(id));
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const deleteVideo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    if (String(video.creator) !== req.user.id) {
      throw Error();
    } else {
      await Video.findOneAndRemove({ _id: id });
    }
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.home);
};


//Register Video View ( 2021 년 1월 13일 수요일 );
export const postregisterView = async(req,res)=>{
  const {params:{id}}=req;
  try{
    const video = await Video.findById(id);
    video.views +=1;
    video.save();
    res.status(200);
  }catch(error){
    res.status(400);
  }finally{
    res.end();
  }
};

// ADD Comment ( 2021년 1월 14일 목요일 );
export const postADDComment = async(req,res) =>{
  const {
    params: {id},
    body:{comment},
    user
  } = req;
  try{
    const video = await Video.findById(id);
    const newComment = await Comment.create({
      text:comment,
      creator:user.id
    });
    video.comments.push(newComment.id);
    video.save();

  }catch(error){
    res.status(400);

  }finally{
    res.end();
  }

};