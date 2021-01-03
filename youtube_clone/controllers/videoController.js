import { videos } from "../db"
import routes from "../routes"
export const home = (req,res)=> res.render("home",{ pageTitle:"Home",videos});
export const search = (req,res)=> {
    const {query:{term:searchingBy}}=req;
    res.render("Search",{ pageTitle : "Search",searchingBy});
};

export const getupload =(req,res)=>res.render("Upload",{ pageTitle : "Upload"});
export const postupload = (req,res) =>{
    const{
        body:{
            file,
            title,
            descirption
        }
    }=req;
    //To Do: Upload and save video
    res.redirect(routes.videoDetail(324393));
};
export const videoDetail =(req,res)=>res.render("videoDetail",{ pageTitle : "Video Detail"});
export const editVideo =(req,res)=>res.render("editVideo",{ pageTitle : "Edit Video"});
export const deleteVideo =(req,res)=>res.render("deleteVideo",{ pageTitle : "Delete Video"});

 