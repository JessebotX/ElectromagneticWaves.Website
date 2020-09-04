const hello = () => "Hello World";
console.log(hello());

function quiz(quizSelector, btnSelector, quizAnswer) {
    let selector = document.querySelector(quizSelector);
    let btn = document.querySelector(btnSelector);

    if (selector) {
        answer(selector, btn, quizAnswer);
    } else {
        console.log("Quiz Selector does not exist right now");
    }
}

function answer(quizElement, btnElement, quizAnswer) {
    btnElement.addEventListener("click", () => {
        if (quizElement.value.toLowerCase().trim() == quizAnswer)
            alert("Correct");
        else
            alert( "Incorrect, the answer is: " + quizAnswer );
    });
}

quiz("#q1", "#q1btn", "1/10");
quiz("#q2", "#q2btn", "elementary");
quiz("#q3", "#q3btn", "wavelength");
quiz("#q4", "#q4btn", "ultraviolet");
quiz("#q5", "#q5btn", "albert einstein");
quiz("#q6", "#q6btn", "hz");
