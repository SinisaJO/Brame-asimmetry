import stopwatch from "./stopwatch.js";

const memoryGamePage = `
    <h2 class="memory-box-timer">Time: <span class="stopwatch">0:23</span></h2>
    <div class="memory-box flex">
        <img class="memory-box-images" src="/imgs/pic6.jpg" alt="">
        <img class="memory-box-images" src="/imgs/pic2.jpg" alt="">
        <img class="memory-box-images" src="/imgs/pic6.jpg" alt="">
        <img class="memory-box-images" src="/imgs/pic5.jpg" alt="">
        <img class="memory-box-images" src="/imgs/pic8.jpg" alt="">
        <img class="memory-box-images" src="/imgs/pic5.jpg" alt="">
        <img class="memory-box-images" src="/imgs/kartica memory.png" alt="">
        <img class="memory-box-images" src="/imgs/pic2.jpg" alt="">
    </div>
    <button class="btn btn-memory">Next Game</button>
`
const quizGamePage = `
    <h2>Question: 1/3</h2>
    <p>Your question text goes here?</p>
    <div class="page-img">
        <img src="/imgs/pic2.jpg">
    </div>
    <button class="btn btn-quiz">Lorem ipsum</button>
    <button class="btn btn-quiz">Lorem ipsum</button>
    <button class="btn btn-quiz">Lorem ipsum</button>
    <button class="btn btn-quiz">Lorem ipsum</button>
`
const swipeGamePage = `
    <h2>Question: 1/3</h2>
    <p class="page-text">Swipe right when you like a product, or swipe left when you don't. It's that easy!</p>
    <div class="page-img">
        <img src="/imgs/pic3.jpg">
    </div>
    <div class="swipe-btn-group">
        <div class="swipe-left btn-swipe btn"></div>
        <div class="swipe-right btn-swipe btn"></div>
        <button class="btn btn-swipe">Answer 1</button>
        <button class="btn btn-swipe">Answer 2</button>
    </div>
`
const registrationPage = `
    <h2 class="page-title uppercase">Awesome job!</h2>
    <p class="page-text">Entice your players to register so they can get a prize!</p>
    <div class="page-img registration-img">
        <img src="/imgs/pic1.jpg">
    </div>
    <form>
        <div class="input-box">
            <input class="input-fields" placeholder="First name" type="text">
            <input class="input-fields" placeholder="Last name" type="text">
            <input class="input-fields" placeholder="E-mail address" type="email">
            <input class="input-fields" placeholder="Address" type="text">
            <input class="input-fields" placeholder="Phone" type="text">
            <input class="input-fields" placeholder="Postal code" type="text">
        </div>
        <label class="label"><input required checked type="checkbox"> I have read and accept <strong class="pointer">Terms of service.</strong></label>
        <label class="label"><input required checked type="checkbox"> I have read and accept <strong class="pointer">Privacy policy.</strong></label>
        <label class="label"><input type="checkbox"> I would like to receive news by e-mail.</label>
    </form>
    <button class="btn btn-registration">Submit</button>
`

const resultPage = `
    <h2 class="page-title uppercase">Thank you!</h2>
    <p class="page-text page-text-padding">We have received your information and will be reaching to you shortly with an e-mail confirmation.</p>
    <div class="page-img">
        <img src="/imgs/pic4.jpg">
    </div>
    <p class="page-text page-text-padding">Thank your player for participating and let them know of any additional offers you may have prepared.</p>
    <div class="icons-box flex">
        <a href=""><img class="icons" src="/imgs/in.png"></a>
        <a href=""><img class="icons" src="/imgs/instagram.png"></a>
        <a href=""><img class="icons" src="/imgs/facebook.png"></a>
        <a href=""><img class="icons" src="/imgs/youtube.png"></a>
        <a href=""><img class="icons" src="/imgs/twitter.png"></a>
    </div>
`

const container = document.querySelector(".page-box")

document.querySelector(".container").addEventListener("click", (e) => {
    const target = e.target.classList

    if(target.contains('btn-intro')){
        container.innerHTML = memoryGamePage
        const timer = document.querySelector(".stopwatch")
        const value = timer.textContent
        const seconds = parseInt(value.slice(2, 4))
        stopwatch(timer, seconds)
    }

    if(target.contains('btn-memory')) container.innerHTML = quizGamePage

    if(target.contains('btn-quiz')) container.innerHTML = swipeGamePage

    if(target.contains('btn-swipe')){
        container.classList.add("registration-container")
        container.innerHTML = registrationPage
    }

    if(target.contains('btn-registration')){
        container.classList.remove("registration-container")
        container.innerHTML = resultPage
    }
})

