
let input_file = document.querySelector("#input-file");
let prfile = document.querySelector("#profile");
 
input_file.onchange = function(){
    profile.src = URL.createObjectURL(input_file.files[0]);
}

