// function formValidation(frm) {

//     var fname = frm.fname.value;
//     var lname = frm.lname.value;


//     var dob = frm.birth.value;


//     if (validateBirthdate(dob)) {

//     }
// }



// function validateBirthdate(input) {
//     // get current date
//     let currentDate = new Date();


//     let birthdate = new Date(input);
//     // return if age is over 18
//     let diff = new Date(currentDate - birthdate)
//     let age = Math.abs(diff.getUTCFullYear() - 1970);



//     if (age > 18 || age < 50) {
//         alert('Your age should between 18 to 50 years!!!');
//     }
//     else {

//         alert('correct age');
//     }
// }




function formValidation() {
    var first = document.registration.first;
    var last = document.registration.last;

    var birth = document.registration.birth;
    var submit = document.registration.submit;


    if (allLetter1(first)) {
        if (allLetter2(last)) {

            if (allb(birth)) {
                if (sub(submit)) {

                }
            }

        }
    }
    return false;
}
function allLetter1(first) {
    var letters = /^[A-Za-z]+$/;
    if (first.value.match(letters)) {
        //alert('employee name submitted');
        return true;
    }
    else {
        alert('employee first name must have alphabet characters only');
        first.focus();
        return false;
    }
}
function allLetter2(last) {
    var letters = /^[A-Za-z]+$/;
    if (last.value.match(letters)) {
        //  alert("employee name submitted");
        return true;
    }
    else {
        alert('employee last name must have alphabet characters only');
        last.focus();
        return false;
    }
}

function allb(birth) {


    var birth_len = birth.value.length;
    if (birth_len == 0) {
        alert("birth date should not be empty");
        birth.focus();
        return false;
    }
    else {

        let CurrentDate = new Date();
        let birthDate = new Date(birth.value);
        let diff = new Date(CurrentDate - birthDate)
        let age = Math.abs(diff.getUTCFullYear() - 1970);

        if (age >= 18 && age <= 50) {
            alert('Birth date is between the 18 to 50 ');
            if (submit.onClick()) {
                return true;
            }


        } else {
            alert('Birth date not between the 18 to 50');
            return false;


        }

        return true;
    }
}




