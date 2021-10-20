
// First, tell us your name
let yourName = "William Giuseppe" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`


document.getElementById('minus-gb').addEventListener('click', function() {
    if (gb>0){
        gb--
        document.getElementById('qty-gb').innerHTML = gb
        document.getElementById('qty-total').innerHTML = gb + sugar + cc
    }
})

document.getElementById('add-gb').addEventListener('click', function() {
    gb++
    document.getElementById('qty-gb').innerHTML = gb
    document.getElementById('qty-total').innerHTML = gb + sugar + cc
})

document.getElementById('minus-sugar').addEventListener('click', function() {
    if (sugar>0){
        sugar--
        document.getElementById('qty-sugar').innerHTML = sugar
        document.getElementById('qty-total').innerHTML = gb + sugar + cc
    }
})

document.getElementById('add-sugar').addEventListener('click', function() {
    sugar++
    document.getElementById('qty-sugar').innerHTML = sugar
    document.getElementById('qty-total').innerHTML = gb + sugar + cc
})


document.getElementById('minus-cc').addEventListener('click', function() {
    if (cc>0) {
        cc--
        document.getElementById('qty-cc').innerHTML = cc
        document.getElementById('qty-total').innerHTML = gb + sugar + cc
    }
})

document.getElementById('add-cc').addEventListener('click', function() {
    cc++
    document.getElementById('qty-cc').innerHTML = cc
    document.getElementById('qty-total').innerHTML = gb + sugar + cc
})
