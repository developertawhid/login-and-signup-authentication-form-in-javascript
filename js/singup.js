const massege = document.querySelector('.massege');
const singup_name = document.querySelector('#singup_name');
singup_name.focus();
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
    
    if(singup_email.value.length > 3) {

        if(user_data.some((value) => value.email.toLowerCase() === singup_email.value.toLowerCase())) {
            singup_email.style.boxShadow = '0px 0px 8px 1px red';
            validation = false;
        }else {
            singup_email.style.boxShadow = '0px 0px 0px 0px transparent';
        }

    }else{
        singup_email.style.boxShadow = '0px 0px 8px 1px red';
        validation = false;
    }
    
    if(singup_userName.value.length > 3) {

        if(user_data.some((value) => value.userName.toLowerCase() === singup_userName.value.toLowerCase())) {
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
                location.href ='index.html'
        
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





const change_singup_Button = document.querySelector('.change_singup_Button');
change_singup_Button.addEventListener('click', () => {

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