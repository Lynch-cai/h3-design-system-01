// Local Database
let dbMail = 'test@test.fr'
let dbPassword = '123456789'

// Account access
const $inputs = document.querySelectorAll('.a-input')
const $labelsError = document.querySelectorAll('.a-label-error')
const $button = document.querySelector('.c-button')


// Email verification
const validateEmail = (email)=> {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test($inputs[0].value)){
        $labelsError[0].classList.add('hide')
    }
    else{
        $labelsError[0].classList.remove('hide')
    }
}

// Check email when click on button
$button.addEventListener(
    'click',
    ()=>{
        validateEmail($inputs[0])
    }
)


// Sign up
if ($inputs.length > 2) {
    // Password verification

    // Identical password check
    const identicalPasswordCheck = ()=> {
        if ($inputs[1].value == $inputs[2].value) {
            $labelsError[2].classList.add('hide')
            $inputs[2].setCustomValidity('')
        } else {
            $labelsError[2].classList.remove('hide')
            $inputs[2].setCustomValidity("Password not identical")
        }
    }

    // Safe password check
    const safePasswordCheck = ()=> {
        if (($inputs[1].value).length > 8) {
            $labelsError[1].classList.add('hide')
            $inputs[1].setCustomValidity('')
        } else{
            $labelsError[1].classList.remove('hide')
            $inputs[1].setCustomValidity('Password not safe')
        }
    }
    
    // Check when typing password
    $inputs[1].addEventListener(
        'keyup',
        ()=>{
            safePasswordCheck()
        }
    )
    $inputs[2].addEventListener(
        'keyup',
        ()=>{
            identicalPasswordCheck()
        }
    )
}


// Sign in
if ($inputs.length == 2) {

    // Compare login information with local database
    const loginCheck = ()=>{
        if ($inputs[0].value != dbMail || $inputs[1].value != dbPassword) {
            $labelsError[1].classList.remove('hide')
            $inputs[1].setCustomValidity('Wrong password')
        }
        else{
            $labelsError[1].classList.add('hide')
            $inputs[1].setCustomValidity('')
        }
    }

    // Check login information when click on button
    $button.addEventListener(
        'click',
        ()=>{
            loginCheck($inputs[0])
        }
    )
}