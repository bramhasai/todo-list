let form=document.getElementById("form");
let text=document.getElementById("text");
let msg=document.getElementById("msg");
let post=document.getElementById("post_button");

let right=document.getElementById("right");
let posts=document.getElementById("posts");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    form_validate();
})

function timer(){
    setTimeout(()=>{
        msg.textContent="";
    },1000);
}

function form_validate(){
    if(text.value===""){
        msg.textContent="Empty TODO can't be posted";
        timer();
    }
    else{
        msg.textContent="TODO list posted"
        posting();
        timer();
    }
}

function posting(){
    posts.innerHTML+=`
    <div>
        <p>${text.value}</p>
        <span class="options">
            <i class="fa fa-trash-o" onclick="delete_post(this)" style="font-size:1.3rem"></i>
            <i class="fa fa-edit" onclick="edit_post(this)" style="font-size:1.3rem"></i>
        </span>
    </div>`;
    text.value="";
}


let delete_post=(e)=>{
    e.parentElement.parentElement.remove();
}


let edit_post=(e)=>{
    text.value=e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}