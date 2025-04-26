document.addEventListener('DOMContentLoaded', function () {

    // Q1
    let q1_buttons = document.querySelectorAll('.q1_answer');
    q1_buttons.forEach(function(button) {
        button.addEventListener('click', function () {
            if (!button.disabled) {
                if (button.id === "correct_q1") {
                    // Correct answer
                    button.style.backgroundColor = "green";
                    document.querySelector('#p1').innerHTML = 'The one and only!';

                } else {
                    // Incorrect answers
                    button.style.backgroundColor = "red";
                    if (button.id === "incorrect1_q1") {
                        document.querySelector('#p1').innerHTML = 'Not quite! But he was indeed named after Buggy&nbsp;The&nbsp;Clown! :)';
                    } else if (button.id === "incorrect2_q1") {
                        document.querySelector('#p1').innerHTML = 'Close! "Bugs" is indeed a reference to Bugs Bunny! :)';
                    } else if (button.id === "incorrect3_q1") {
                        document.querySelector('#p1').innerHTML = 'That\'s his vocation, his life and his identity. But&nbsp;not&nbsp;his&nbsp;name!';
                    }
                }
                q1_buttons.forEach(function(button) {
                    button.disabled = true;
                });
            }
        });
    });

    // Q2
    let q2_buttons = document.querySelectorAll('.q2_answer');
    q2_buttons.forEach(function(button) {
        button.addEventListener('click', function () {
            if (!button.disabled) {
                if (button.id === "correct_q2") {
                    // Correct answer
                    button.style.backgroundColor = "green";
                    document.querySelector('#p2').innerHTML = 'Could it ever be anything else?';

                } else {
                    // Incorrect answers
                    button.style.backgroundColor = "red";
                    if (button.id === "incorrect1_q2") {
                        document.querySelector('#p2').innerHTML = 'I mean sure, but you underestimate our love for&nbsp;the&nbsp;sofa!';
                    } else if (button.id === "incorrect2_q2") {
                        document.querySelector('#p2').innerHTML = 'He is cute, I will give you that, but not that cute :D';
                    } else if (button.id === "incorrect3_q2") {
                        document.querySelector('#p2').innerHTML = 'So grateful he can\'t do this!';
                    }
                }
                q2_buttons.forEach(function(button) {
                    button.disabled = true;
                });
            }
        });
    });

    // Q3
    let q3_buttons = document.querySelectorAll('.q3_answer');
    q3_buttons.forEach(function(button) {
        button.addEventListener('click', function () {
            if (!button.disabled) {
                if (button.id === "correct_q3") {
                    // Correct answer
                    button.style.backgroundColor = "green";
                    document.querySelector('#p3').innerHTML = 'All Hail The Magic Bin!';

                } else {
                    // Incorrect answers
                    button.style.backgroundColor = "red";
                    if (button.id === "incorrect1_q3") {
                        document.querySelector('#p3').innerHTML = 'Ugh, come on, you can do better than that!!';
                    } else if (button.id === "incorrect2_q3") {
                        document.querySelector('#p3').innerHTML = '(That\'s me casually looking away now)';
                    } else if (button.id === "incorrect3_q3") {
                        document.querySelector('#p3').innerHTML = 'You might want to revise your homework first :P';
                    }
                }
                q3_buttons.forEach(function(button) {
                    button.disabled = true;
                });
            }
        });
    });

    // Restart the game logic
    document.querySelector('#restart').addEventListener('click', function () {
        location.reload();
    });
});
