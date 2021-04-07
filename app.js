const url = "https://api.github.com/users/";
const input = document.getElementById("input");
const form = document.getElementById("form");
const main = document.getElementById("main");

// Function to fetch the profiles of user asynchronously
function fetchProfile(userName){
    let endpoint = url+userName;
    let xhr = new XMLHttpRequest();
    xhr.responseType='json';
    xhr.onreadystatechange=()=>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            let response = xhr.response;
            console.log(response);
            getUser(response);
        }
    }
    xhr.open('GET',endpoint,true);
    xhr.send();
}

// Function to render the fetched profile onto the webpage
function getUser(user){
    let cardHtml = `
    <div class="card">
        <div class="image-container">
            <img src=${user.avatar_url} alt="">
        </div>
        <div class="user-info">
            <h2>${user.name}</h2>
            <p>${user.bio}</p>
            <ul>
            <li><strong>Followers</strong>&nbsp;&nbsp;
            ${user.followers}</li>&nbsp;&nbsp;
            <li><strong>Following</strong>&nbsp;&nbsp;
            ${user.following}</li>&nbsp;&nbsp;
            <li><strong>Repos</strong>&nbsp;&nbsp;
            ${user.public_repos}</li>&nbsp;&nbsp;
            </ul>
        </div>
    </div>    
    `;
    main.innerHTML=cardHtml;

}


// Handling the user input
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let userName = input.value;
    if(userName)
        fetchProfile(userName);
});





