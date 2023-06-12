const API = "https://api.github.com/users/";

const card = document.getElementById("card");
const search = document.getElementById("search");
const img = document.getElementById("img");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const public = document.getElementById("public");
const login = document.getElementById("login");

async function search1(event) {
  event.preventDefault();
  const response = await fetch(API + search.value);
  const user = await response.json();
  console.log("user: ", user);
  img.src = user.avatar_url;
  followers.innerHTML = user.followers;
  following.innerHTML = user.following;
  public.innerHTML = user.public;
  login.innerHTML = user.login;
}
