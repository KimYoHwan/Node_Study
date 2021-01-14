import axios from "axios"
const addCommentForm  = document.getElementById("jsAddComment");
const response = async comment =>{
    const videoId = window.location.href.split("/videos/")[1];
    const response = await axios({
        url:`api/${videoId}/comment`,
        method:"POST",
        data:{
            comment
        }
    });
    console.log(response);
};

const handleSubmit = event =>{
    event.prevenDefault();
    const commentInput = addCommentForm.querySelector("input");
    const comment = commentInput.value;
    commentInput.value="";
};

function init(){
    addCommentForm.addEventListener("submit",handleSubmit);
}

if(addCommentForm){
    init();
}