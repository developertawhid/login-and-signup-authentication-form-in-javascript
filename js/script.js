const user_photo = document.querySelector('#user_photo > #img');
const user_name = document.querySelector('#user_name');
const registration = document.querySelector('#registration');
const singup_input = document.querySelector('.singup_input');
const login_input = document.querySelector('.login_input');
const massege = document.querySelector('.massege');

const login_db = JSON.parse(localStorage.getItem('login_db'))
if(login_db.name){
    
    user_name.innerHTML = login_db.name;
    (login_db.imgUrl.includes('http')) ? user_photo.innerHTML = `<img src="${login_db.imgUrl}" alt="User Photo">` : user_photo.innerHTML = login_db.name[0];

}



document.querySelector('#log_out').addEventListener('click', () => {
    localStorage.setItem("login_db", JSON.stringify({}));
    location.href = 'login.html'
})


