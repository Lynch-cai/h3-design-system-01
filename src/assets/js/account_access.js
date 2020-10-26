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
        $inputs[0].classList.remove('error')
    }
    else{
        $labelsError[0].classList.remove('hide')
        $inputs[0].classList.add('error')
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
            $inputs[2].classList.remove('error')
        } else {
            $labelsError[2].classList.remove('hide')
            $inputs[2].setCustomValidity("Password not identical")
            $inputs[2].classList.add('error')
        }
    }

    // Safe password check
    const safePasswordCheck = ()=> {
        if (($inputs[1].value).length > 8) {
            $labelsError[1].classList.add('hide')
            $inputs[1].setCustomValidity('')
            $inputs[1].classList.remove('error')
        } else{
            $labelsError[1].classList.remove('hide')
            $inputs[1].setCustomValidity('Password not safe')
            $inputs[1].classList.add('error')
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
            $inputs[1].classList.add('error')
        }
        else{
            $inputs[1].classList.remove('error')
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