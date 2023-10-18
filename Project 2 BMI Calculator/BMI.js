// const form = document.querySelector('form')

// form.addEventListener('submit', function(e) { // here we used keyword submit because we want to declare the results by submiting the equaition not by clicking on the buttom
//     e.preventDefault()

//     const height = parseInt(document.querySelector('#height').value) // these 2 lines 6 and 7 are used for getting the value of the height and weight
//     const weight = parseInt(document.querySelector('#weight').value)
//     const results = document.querySelector('#results') // this line is used for finding the results of the equation used in the line no 15

//     if (height === '' || height < 0 || isNaN(height)) { // these 2 if equations are used for finding out wheather the values of height and weight are valid according to asked or not
//         results.innerHTML = `Please give a valid height ${height}`;
//     } else if (weight === '' || weight < 0 || isNaN(weight)) {
//         results.innerHTML = `Please give a valid height ${weight}`;
//     } else {
//         const bmi = (weight / ((height * height) / 10000)).toFixed(2);
//         // show the result

//         results.innerHTML = `< span > ${bmi} < /span>`;
//     }

// });

const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //show the result
        results.innerHTML = `<span>${bmi}</span>`;
    }
});