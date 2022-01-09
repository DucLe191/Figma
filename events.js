//Login
const login = document.querySelector('#login')
const login2 = document.querySelector('#login2')
const loginForm = document.querySelector('#form_login')

login.addEventListener('click',function(){
    loginForm.style.opacity="1"
    loginForm.style.visibility="visible"
})

login2.addEventListener('click',function(){
    loginForm.style.opacity="1"
    loginForm.style.visibility="visible"
    signUpForm.style.opacity="0"
    signUpForm.style.visibility="hidden"
})

//Sign Up
const signUp = document.querySelector('#sign-up')
const signUpForm = document.querySelector('#form_sign-up')

signUp.addEventListener('click',function(){
    loginForm.style.opacity="0"
    loginForm.style.visibility="hidden"
    signUpForm.style.opacity="1"
    signUpForm.style.visibility="visible"
})

//Sell Bitcoin Modal 1
const sellBitcoin = document.querySelector('#sell-bitcoin')
const sellBitcoinForm = document.querySelector('#form_sell-bitcoin')

sellBitcoin.addEventListener('click',function(){
    sellBitcoinForm.style.opacity="1"
    sellBitcoinForm.style.visibility="visible"
})

//Sell Bitcoin Modal 2
const bitcoinBox = document.querySelector('#btc-box')
const bitcoinForm = document.querySelector('#form_sell-coin-btc')

bitcoinBox.addEventListener('click',function(){
    bitcoinForm.style.opacity="1"
    bitcoinForm.style.visibility="visible"
})

//Sell Ethereum
const ethereumBox = document.querySelector('#eth-box')
const ethereumForm = document.querySelector('#form_sell-coin-eth')

ethereumBox.addEventListener('click',function(){
    ethereumForm.style.opacity="1"
    ethereumForm.style.visibility="visible"
})

//Overlay
const overlay = document.querySelector('#overlay')
const overlay2 = document.querySelector('#overlay2')
const overlay3 = document.querySelector('#overlay3')
const overlay4 = document.querySelector('#overlay4')
const overlay5 = document.querySelector('#overlay5')

overlay.addEventListener('click' ,function() {
    loginForm.style.opacity="0"
    loginForm.style.visibility="hidden"
})

overlay2.addEventListener('click' ,function() {
    signUpForm.style.opacity="0"
    signUpForm.style.visibility="hidden"
})

overlay3.addEventListener('click' ,function() {
    sellBitcoinForm.style.opacity="0"
    sellBitcoinForm.style.visibility="hidden"
})

overlay4.addEventListener('click' ,function() {
    loginForm.style.opacity="0"
    loginForm.style.visibility="hidden"
})

overlay5.addEventListener('click' ,function() {
    loginForm.style.opacity="0"
    loginForm.style.visibility="hidden"
})