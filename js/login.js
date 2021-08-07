const login_email = document.querySelector('#login_email');
login_email.focus();
const login_password = document.querySelector('#login_password');
const login_submit = document.querySelector('#login_submit');
const massege = document.querySelector('.massege');


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
                location.href ='index.html'

    
                login_email.value = '';
                login_password.value = '';
            }, 2000)
        }, 800)

    }
})




const change_singin_button = document.querySelector('.change_login_Button');
change_singin_button.addEventListener('click', () => {

    login_password.style.boxShadow = '0px 0px 0px 0px transparent';
    login_email.style.boxShadow = '0px 0px 0px 0px transparent';
    login_email.value = '';
    login_password.value = '';
})