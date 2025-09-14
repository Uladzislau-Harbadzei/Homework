document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault();
    let isValid = true;
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let password = document.getElementById('password');

    const clearErrors = () => {
        document.querySelectorAll('.error-text').forEach(error => error.remove());
    };

    const errorForm = (message, input)=>{
        let errorEl = document.createElement('div');
        errorEl.classname = 'errortext';
        errorEl.textContent = message;
        errorEl.style.color = 'red';
        errorEl.style.fontSize = '14px';
        input.parentElement.appendChild(errorEl);
        isValid = false
    };
    
    clearErrors();

    if(!name.value.trim()) errorForm('Enter name', name);

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) errorForm('Enter correct email',email);
    
    if(!password.value.trim().lenth < 6) errorForm('The password must be at least 6 characters long.', password);

    if(isValid){
        console.log('The form has been successfully submitted');
        document.getElementById('form').reset();
    }
})

