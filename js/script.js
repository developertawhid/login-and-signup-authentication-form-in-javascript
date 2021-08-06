const main = document.querySelector('#main');
const user_photo = document.querySelector('#user_photo > #img');
const user_name = document.querySelector('#user_name');
const registration = document.querySelector('#registration');
const singup_input = document.querySelector('.singup_input');
const login_input = document.querySelector('.login_input');
const massege = document.querySelector('.massege');


if(!localStorage.getItem('registration_db')) {
    localStorage.setItem("registration_db", JSON.stringify([]))
}
if(!localStorage.getItem('login_db')) {
    localStorage.setItem("login_db", JSON.stringify({}))
}

function home(){
    const login_db = JSON.parse(localStorage.getItem('login_db'))
    if(login_db.name){
        
        main.classList.add('active')
        registration.classList.remove('active')

        user_name.innerHTML = login_db.name;
        (login_db.imgUrl.includes('http')) ? user_photo.innerHTML = `<img src="${login_db.imgUrl}" alt="User Photo">` : user_photo.innerHTML = login_db.name[0];

        return true;
    }

}
home();


document.querySelector('#log_out').addEventListener('click', () => {
    localStorage.setItem("login_db", JSON.stringify({}));
    main.classList.remove('active')
    registration.classList.add('active')
})

const singup_name = document.querySelector('#singup_name');
const singup_email = document.querySelector('#singup_email');
const singup_userName = document.querySelector('#singup_userName');
const singup_PhotoUrl = document.querySelector('#singup_PhotoUrl');
const singup_password = document.querySelector('#singup_password');
const singup_confirmPassword = document.querySelector('#singup_confirmPassword');
const singup_submit = document.querySelector('#singup_submit');

singup_submit.addEventListener('click', (e) => {
    e.preventDefault();

    let validation = true;
    const user_data = JSON.parse(localStorage.getItem('registration_db'))

    if(singup_name.value.length > 3) {
        singup_name.style.boxShadow = '0px 0px 0px 0px transparent';
    }else{
        singup_name.style.boxShadow = '0px 0px 8px 1px red';
        validation = false;
    }
    
    if(singup_email.value.includes(".com") || Boolean(Number(singup_email.value))) {
        singup_email.style.boxShadow = '0px 0px 0px 0px transparent';
    }else{
        singup_email.style.boxShadow = '0px 0px 8px 1px red';
        validation = false;
    }
    
    if(singup_userName.value.length > 3) {

        if(user_data.some((value) => value.userName == singup_userName.value)) {
            singup_userName.style.boxShadow = '0px 0px 8px 1px red';
            validation = false;
        }else {
            singup_userName.style.boxShadow = '0px 0px 0px 0px transparent';
        }

    }else{
        singup_userName.style.boxShadow = '0px 0px 8px 1px red';
        validation = false;
    }

    if(singup_password.value.length > 5) {
        singup_password.style.boxShadow = '0px 0px 0px 0px transparent';
    }else{
        singup_password.style.boxShadow = '0px 0px 8px 1px red';
        validation = false;
    }

    if(singup_confirmPassword.value && singup_confirmPassword.value === singup_password.value) {
        singup_confirmPassword.style.boxShadow = '0px 0px 0px 0px transparent';
    }else{
        singup_confirmPassword.style.boxShadow = '0px 0px 8px 1px red';
        validation = false;
    }
    console.log(validation);

    if(validation) {
        singup_name.style.boxShadow = '0px 0px 0px 0px transparent'
        singup_email.style.boxShadow = '0px 0px 0px 0px transparent'
        singup_userName.style.boxShadow = '0px 0px 0px 0px transparent'
        singup_PhotoUrl.style.boxShadow = '0px 0px 0px 0px transparent'
        singup_password.style.boxShadow = '0px 0px 0px 0px transparent'
        singup_confirmPassword.style.boxShadow = '0px 0px 0px 0px transparent'
        
        user_data.push({
            id: user_data.length,
            name: singup_name.value,
            email: singup_email.value,
            userName: singup_userName.value,
            imgUrl: singup_PhotoUrl.value,
            password: singup_password.value
        } )

        localStorage.setItem('registration_db', JSON.stringify(user_data));
        localStorage.setItem('login_db', JSON.stringify({name: singup_name.value, imgUrl: singup_PhotoUrl.value,}));
        



        setTimeout(()=> {
            massege.style.transform = "translate(-50%, -50%) scale(1)";
            setTimeout(()=> {
                massege.style.transform = "translate(-50%, -50%) scale(0)";
                home();
                login_input.classList.toggle('input_dactive');
                singup_input.classList.toggle('input_dactive');
        
                singup_name.value = '';
                singup_email.value = '';
                singup_userName.value = '';
                singup_PhotoUrl.value = '';
                singup_password.value = '';
                singup_confirmPassword.value = '';
    
            }, 2000)
        }, 800)

    }
    
})





const login_email = document.querySelector('#login_email');
const login_password = document.querySelector('#login_password');
const login_submit = document.querySelector('#login_submit');

login_submit.addEventListener('click', (e) => {
    e.preventDefault();
    const user_data = JSON.parse(localStorage.getItem('registration_db'));
    let pass_auth = false;
    let email_auth = false;

    const auth = user_data.filter((value) =>{
        pass_auth =  login_password.value === value.password;
        email_auth = value.userName === login_email.value || value.email === login_email.value;
        return pass_auth && email_auth;
    })

    if(email_auth) {
        login_email.style.boxShadow = '0px 0px 0px 0px transparent';
    }else {
        login_email.style.boxShadow = '0px 0px 8px 1px red';
    }

    if(pass_auth) {
        login_password.style.boxShadow = '0px 0px 0px 0px transparent';
    }else {
        login_password.style.boxShadow = '0px 0px 8px 1px red';
    }

    if(auth[0].name) {
        login_password.style.boxShadow = '0px 0px 0px 0px transparent';
        login_email.style.boxShadow = '0px 0px 0px 0px transparent';

        localStorage.setItem("login_db", JSON.stringify({name: auth[0].name, imgUrl: auth[0].imgUrl }))

        setTimeout(()=> {
            massege.style.transform = "translate(-50%, -50%) scale(1)";
            setTimeout(()=> {
                massege.style.transform = "translate(-50%, -50%) scale(0)";
                home();
    
                login_email.value = '';
                login_password.value = '';
            }, 2000)
        }, 800)

    }
})





const change_singin_button = document.querySelectorAll('.change_loginButton');
change_singin_button.forEach((value) => {
    value.addEventListener('click', () => {
        login_input.classList.toggle('input_dactive');
        singup_input.classList.toggle('input_dactive');

        singup_name.style.boxShadow = '0px 0px 0px 0px transparent'
        singup_email.style.boxShadow = '0px 0px 0px 0px transparent'
        singup_userName.style.boxShadow = '0px 0px 0px 0px transparent'
        singup_PhotoUrl.style.boxShadow = '0px 0px 0px 0px transparent'
        singup_password.style.boxShadow = '0px 0px 0px 0px transparent'
        singup_confirmPassword.style.boxShadow = '0px 0px 0px 0px transparent'
        singup_name.value = '';
        singup_email.value = '';
        singup_userName.value = '';
        singup_PhotoUrl.value = '';
        singup_password.value = '';
        singup_confirmPassword.value = '';

        login_password.style.boxShadow = '0px 0px 0px 0px transparent';
        login_email.style.boxShadow = '0px 0px 0px 0px transparent';
        login_email.value = '';
        login_password.value = '';
    })
})