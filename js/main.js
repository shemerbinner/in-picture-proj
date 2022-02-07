
var gQuests = [
    { id: 1, opts: ['Me before the course', 'Me when I do homework'], correctOptIndex: 0 },
    { id: 2, opts: ['Puki', 'Me when I try to understand Chen'], correctOptIndex: 1 },
    { id: 3, opts: ['My room before', 'My room now'], correctOptIndex: 1 },
    { id: 4, opts: ['Me trying to figure the task on midnight', 'Me when it\'s Meragesh!'], correctOptIndex: 1 },
    { id: 5, opts: ['Me after the course', 'Matrix'], correctOptIndex: 0 }
];

var gCurrQuestIdx = 0;


function playGame() {
    gCurrQuestIdx = 0
    var elDiv = document.querySelector('.picture');
    var elDiv1 = document.querySelector('.victory');
    var elRestart = document.querySelector('.victory .restart');
    elDiv1.style.display = 'none';
    elRestart.style.display = 'none'
    elDiv.style.display = 'block';
    renderQuest()
}

function initGame() {
    var elDiv1 = document.querySelector('.victory');
    var elRestart = document.querySelector('.victory .restart');
    var elStart = document.querySelector('.picture .start');
    elDiv1.style.display = 'none';
    elRestart.style.display = 'none'
    elStart.style.display = 'inline-block';
}


function renderQuest() {
    var elDiv = document.querySelector('.picture');

    for (var i = gCurrQuestIdx; i < gQuests.length; i++) {
        var currQuest = gQuests[i];
        var strHtml = `<h2 class="question">${createQuests()}<h2/>
        <img class="the-img" src="img/${(i + 1)}.jpg"/>`
        elDiv.innerHTML = strHtml;

        for (var j = 0; j < 2; j++) {
            var btnStr = `<button class="buttons" class="button${j + 1}" data-j="${j}" style="
            box-shadow:inset 0px 0px 7px -3px #292929;
            background-color:#c8e3d4;
            border-radius:6px;
            border:2px solid #f6eabe;
            display:inline-block;
            cursor:pointer;
            color:#4e4e4f;
            font-family:Arial;
            font-size:15px;
            padding:8px 18px;
            text-decoration:none;
            text-shadow:0px 0px 0px #dedede;
            margin-right: 7px" 
            onclick="checkAnswer(this)">${currQuest.opts[j]}</button>`;
            console.log(btnStr)
            elDiv.innerHTML += btnStr;
        }
        break
    }
}



function checkAnswer(optIdx) {
    var elDivVictory = document.querySelector('.victory');
    var elRestart = document.querySelector('.victory .restart');
    var elDivPic = document.querySelector('.picture');
    var elWrong = document.querySelector('.wrong');

    if (+optIdx.dataset.j === gQuests[gCurrQuestIdx].correctOptIndex && gCurrQuestIdx < 5) {
        console.log(+optIdx.dataset.j)
        console.log(gQuests[gCurrQuestIdx].correctOptIndex)
        gCurrQuestIdx++
        if (gCurrQuestIdx === 5) {
            elDivPic.style.display = 'none';
            elDivVictory.style.display = 'block';
            elRestart.style.display = 'block'
        }
        renderQuest()
    }
    else {
        console.log(elWrong)
        setTimeout(function () { elWrong.style.display = 'none'; }, 2000)
        elWrong.style.display = 'block';
    }
}


function closeMessage(){
    var elWrong = document.querySelector('.wrong');
    elWrong.style.display = 'none'
}



function createQuests() {
    var arr = ['What do you see in the picture?', 'What is the correct answer?', 'What would you choose?'];
    var questionIdx = getRandomInt(0, 2);
    var randQuestion = arr[questionIdx];
    return randQuestion
}