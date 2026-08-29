const templist = document.querySelectorAll('li');

// NodeList
templist[0].style.color = 'red';
//nodelist ke lia for each ka use karna better hai 
// nahi to nodelist to array me convert karo aur fir uspe map ya koi bhi loop use karo
templist.forEach(function(l) {
    l.style.backgroundColor = 'green';
});


// HTMLCollection
const x = document.getElementsByClassName('list-item');

// ❌ Direct forEach avoid karo
// x.forEach(function(li) {
//     li.style.color = 'blue';
// });


// HTMLCollection → Array
const new_array = Array.from(x);

new_array.forEach(function(li) {
    li.style.color = 'blue';
});

