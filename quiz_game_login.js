function addUser() 
{
player1_login=document.getElementById("player1_login").value;
player2_login=document.getElementById("player2_login").value;
localStorage.setItem("player1_name",player1_login);
localStorage.setItem("player2_name",player2_login);
window.location="game_page.html";
}