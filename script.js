var quotes  = ['“Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.”', '“A room without books is like a body without a soul.”', '“Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.”', '“You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.”', '“You only live once, but if you do it right, once is enough.”','“Be the change that you wish to see in the world.”', '“In three words I can sum up everything I\'ve learned about life: it goes on.”', '“If you want to know what a man\'s like, take a good look at how he treats his inferiors, not his equals.”',''];

var author = ['― Albert Einstein','― Marcus Tullius Cicero', '― Bernard M. Baruch', '― Dr. Seuss', '― Mae West', '― Mahatma Gandhi', '― Robert Frost', '― J.K. Rowling, Harry Potter and the Goblet of Fire'];
var quote = [
    '\"Life isn\'t about finding yourself, it is about creating yourself.\"<br>-George Bernard Shaw',
    '\"If you are going down the right path and you are willing to keep walking, eventually you\'ll make progress.\"<br>-Barrack Obama',
    '\"I have far more respect for the person with a single idea who gets there than one with a thousand ideas and does nothing.\"<br>-Thomas Edison',
    '\"What is necessary to change a person is to change awareness of himself.\"<br>-Anonymous',
    '\"Many people die at the age of 25, but their bodies are not buried until 75.\"<br>-Benjamin Franklin',
    '\"If you don\'t get up every morning with a burning desire to do things, you don\'t have enough goals.\"<br>-Lou Holtz',
    '\"The way to learning is to get rid of the arrogance of knowledge.\"\<br>-Confucius',
    '\"One can have no smaller or greater master than the mastery of oneself.\"<br>-Leonardo Da Vinci',
    '\"Empty pockets never held anyone back. Only empty heads and hearts can do that.\"<br>-Norman Vincent Peale',
    '\"Great things are not done by impulse, but a series of small things brought together.\"<br>-Vincent Van Gogh',
    '\"Why measure your success by the suggestions of society when you can become a success on your own terms.\"<br>-Robin Sharma',
    '\"A man may imagine things that are false, but he can only undetsand things that are true.\"<br>-Isaac Newton',
    '\"Our fatigue is often caused not by work, but by worry, frustration and resentment.\"<br>-Dale Carnegie',
    '\"True freedom is impossible without a mind made free by discipline.\"<br>-Mortimer Adler',
    '\"Focus is not saying yes to all important things, rather it is saying no to less important things.\"<br>-Steve Jobs',
    '\"Discipline is the bridge between goals and accomplishment.\"<br>-Jim Rohn',
    '\"Success in life comes when you simply refuse to give up, with goals so strong that obstacles, failure and loss only act as motivation.\"<br>-Jim Rohn',
    '\"Be yourself. Everyone else is already taken.\"<br>-Oscar Wilde',
    '\"Be who you are and say what you feel, because those who mind don\'t matter and those who matter don\'t mind.\"<br>-Bernard M. Baruch',
    '\"Imperfection is beauty, madness is genius and it\'s better to be absolutely ridiculous than absolutely boring.\"<br>-Marilyn Monroe',
    '\"When you are content to be simply yourself and don\'t compare or compete, everyone will respect you.\"<br>-Lao Tzu',
    '\"If you are always trying to be ordinary, you will never know how extraordinary you can be.\"<br>-Michelangelo',
    '\"Leadership is solving problems. The day people stop bringing you their problems is the day you have stopped leading them.\"<br>-Colin Powell',
    '\"Start by doing what\'s necessary; then do what\'s possible and suddenly you are doing the impossible.\"<br>-Francis of Assisi',
    '\"It is our choices that show what we truly are, far more than our abilities.\"<br>-Albus Dumbledore',
    '\"It does not do to dwell on dreams and forget to live.\"<br>-Mirror of Erised'
]

function newq(){
    var randomNumber = Math.floor(Math.random()*quotes.length);
    document.getElementById('Q').innerHTML = quote[randomNumber];
}
