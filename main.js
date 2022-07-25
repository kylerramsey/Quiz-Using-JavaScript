let questionData = [
    {
        qid : 'qid1',
        qName: "Can pigs get sunburn? (true or false)",
        answer: "true",
    },

    {
        qid : 'qid2',
        qName: "The young ones of pigs are termed as _______.",
        answer: "piglets",
    },

    {
        qid : 'qid3',
        qName: "Pigs can not sweat. State true or false.",
        answer: "true",
    },

    {
        qid : 'qid4',
        qName: "Pigs do not have a good sense of direction. State true or false.",
        answer: "false",
    },
    {
        qid : 'qid5',
        qName: "Pigs have a good sense of _____.",
        answer: "smell",
    },
    {
        qid : 'qid6',
        qName: "According to the Chinese zodiac, do pigs represent fortune or peace?",
        answer: "fortune",
    },
    {
        qid : 'qid7',
        qName: "Which country has the largest population of pigs in the world?",
        answer: "china",
    },
    {
        qid : 'qid8',
        qName: "How many toes does a pig have on each of his hoofs?",
        answer: "4",
    },
    {
        qid : 'qid9',
        qName: "What color are domesticated pigs?",
        answer: "pink",
    },
    {
        qid : 'qid10',
        qName: "The ball used to play American football is nicknamed after part of a pig. What is it?",
        answer: "pigskin",
    },
];

let formSubmit = document.getElementById("submitBox");
formSubmit.addEventListener("submit", (event) => {
    event.preventDefault();
    let formData = new FormData(formSubmit);

    function checkAnswer() {
        let score = 0;
        for (let i = 0; i < questionData.length; i++) {
            let qid = formData.get(`${questionData[i]['qid']}`);
            if (qid == questionData[i]["answer"]) {
                score++;
                document.getElementById(`card-${questionData[i]['qid']}`).style.backgroundColor = '#99C262'
            } else {
                document.getElementById(`card-${questionData[i]['qid']}`).style.backgroundColor = '#C41E3A'
            }
        }
        console.log(score);
        return score
    }
    let score = checkAnswer();
    displayResults(score);
});

// Q1: Can pigs get sunburn? (true or false)
// Q2: The young ones of pigs are termed as _______.
// Q3: Pigs can not sweat. State true or false.
// Q4: Pigs do not have a good sense of direction. State true or false.
// Q5: Pigs have a good sense of _________.
// Q6: According to the Chinese zodiac, do pigs represent fortune or peace?
// Q7: Which country has the largest population of pigs in the world?
// Q8: How many toes does a pig have on each of his hoofs?
// Q9: What color are domesticated pigs?
// Q10: The ball used to play American football is nicknamed after part of a pig. What is it?

let questionsHTML = document.getElementById("questions");

for (let i = 0; i < questionData.length; i++) {
    let insertHTML = `
    <div id='card-${questionData[i]['qid']}' class="card mt-5">
        <div class="card-body">
            <h4 class="card-title">${questionData[i]["qName"]}</h4>
            <input type="text" name="${questionData[i]['qid']}" class="form-control-lg" placeholder="Answer goes here"
        aria-label="First name">
        </div>
    </div>      
    `;
    questionsHTML.innerHTML += insertHTML;
}
function displayResults(score) {
    let scoreHTML = document.getElementById("score");

    insertScore = `<h4>Congrats! You scored ${score}/10!</h4>`;

    scoreHTML.innerHTML += insertScore;
}


