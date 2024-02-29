let checkYearForm = document.getElementById("yearForm")

let answerHeading = document.getElementById("answer")

checkYearForm.addEventListener("submit", () => {
    const inputYearInt = parseInt(document.getElementById("year").value)
    if (stringToNum()) {answerHeading.innerHTML = inputYearInt + " is a leap year!"
    } else answerHeading.innerHTML = inputYearInt + " is not a leap year!"
})

function stringToNum () {
    let inputYear = document.getElementById("year").value

    // Check length before changing string input to number
    // Trust, it's just easier this way
    if (inputYear.length > 4){
        alert("Babes.. we're not that far in the future")
    } else if (inputYear.length <= 1){
        alert("We didn't have leap years before 45 BC babes")
    }

    // Make it a numba!
    let inputYearNum = parseInt(inputYear)

    return leapYearCheck(inputYearNum)
}

function leapYearCheck(num) {
    // Year must be divisible by 4
    // Years that are divisible by 100 (1900 is NOT a LY) must be divisible by 400 
    if (num % 4 == 0 && num % 100 == 0 ){
        if (num % 400 == 0){
            return true
        } return false
    } else if (num % 4 == 0){
        return true
    } else {
        return false
    }
}