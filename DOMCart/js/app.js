/*
const  oddlinks = document.querySelectorAll('#primary a:nth-child(odd)');

oddlinks.forEach(function(odd) {
    odd.style.backgroundColor='red';
    odd.style.color='white';
});

// select even links

const  evenlinks = document.querySelectorAll('#primary a:nth-child(even)');
evenlinks.forEach(function(even) {
    even.style.backgroundColor ='blue';
    even.style.color ='white';
})
const addCardBtns = document.querySelectorAll('.add-to-cart');

addCardBtns.forEach(function(button){
    button.textContent = 'Something new';

});

console.log(addCardBtns);

const navigation = document.querySelector('#primary');
let element;
navigation.children[0].textContent='new textt';
element=navigation.children[0];

console.log(element);
const courseList=document.querySelector('#courses-list');
let element;

element = courseList.children[1].children[1].children[0].children[1].lastElementChild;

console.log(element);
*/
/// traversing from children to parents
const cartBtn = document.querySelector('.add-to-cart');

let element;

element = cartBtn;
element = cartBtn.parentNode;
element = cartBtn.previousElementSibling.previousElementSibling;

console.log(element);