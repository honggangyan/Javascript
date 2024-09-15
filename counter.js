// document is the global object in the DOM that gives you access to the page's elements.
if(!localStorage.getItem("counter")){
    localStorage.setItem("counter", 0);
}


function count() {
    let counter = localStorage.getItem('counter');
    counter++;
    document.querySelector('h1').innerHTML = counter;
    localStorage.setItem('counter', counter);
    // if (counter % 10 === 0) {
    //     alert(`count is now ${counter}`);
    // }
};

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('h1').innerHTML = localStorage.getItem('counter')
    document.querySelector('button').onclick = count;
    // intervals
    setInterval(count, 1000);
})