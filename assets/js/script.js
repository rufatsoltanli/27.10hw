// task12
// function splitting(number) {
//    number = number.split("")
//     const arr = []
//     for (let i = 0; i < number.length; i++) {
//         arr.push(number[i])
//     }
//     return arr
// } console.log(splitting("742"));
// task13
// function findMax(numbers) {
//     numbers = numbers.split("")
//     let maxnumber = numbers[0]
//     const maxnum = []
//     for (let i = 0; i < numbers.length; i++) {
//         if (maxnumber < numbers[i]) {
//             maxnumber = numbers[i]

//         }

//     }
//     maxnum.push(maxnumber)
//     return maxnum

// } console.log(findMax("1567894"));
// task 14
// function findMin(number) {
//     number = number.split("")
//     const mindigit=[]
//     let digits=number[0]
//     for (let i = 0; i < number.length; i++) {
//         if (digits>number[i]) {
//             digits=number[i]
//         }
//     }
//     mindigit.push(digits)

//     return mindigit
// }console.log(findMin("748591632"));

// task 15
// function calculate(params) {
//     params = params.split("")
//     let sum = 0
//     let mp = 1
//     let orta
//     for (let i = 0; i < params.length; i++) {
//         sum += +params[i]
//         mp *= +params[i]

//     }
//     orta = sum / params.length
//     const arr = [sum, mp, orta]
//     console.log(arr);
// }calculate("4569999")

// // task 16
// function calculate(param) {
//     const bolenler=[]
//     for (let i = 0; i < param; i++) {
//         if (param % i == 0) {
//        bolenler.push(i)
//         }
//     }
// return bolenler
// } console.log(calculate(350));
// task17

// function calculate(param) {
//     let bolenler = 0
//     for (let i = 0; i < param; i++) {
//         if (param % i == 0) {
//             bolenler++
//         }
//     }
//     return bolenler
// } console.log(calculate(6));

// task18


// function calculate(param) {
//     const bolenler = []
//     let bsum = 0
//     let bmp = 1
//     for (let i = 0; i < param; i++) {
//         if (param % i == 0) {
//             bolenler.push(i)
//         }

//     }
//     for (let o = 0; o < bolenler.length; o++) {
//         bmp *= bolenler[o]
//         bsum += bolenler[o]
//      }
//     console.log("bolenler siyahisi:" + bolenler);
//     console.log("bolenlerin hasili:" + bmp);
//     console.log("bolenlerin cemi: " + bsum);

// } calculate(16);

// task20

// function CheckPrime(param) {
//     for (let i = 2; i < param; i++) {
//         if (param % i == 0) {
//             console.log("Murekkeb");
//         }
//         else {
//             console.log("Sade");
//         }
//     }
// } CheckPrime(3)
