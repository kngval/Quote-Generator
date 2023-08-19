const quote = document.querySelector('#quote');
const person = document.querySelector('#person');
const generate = document.querySelector('#generate')

const quotes = [
    {
        quote : "Life is about not knowing, having to change, taking the moment and making the best of it, without knowing what's going to happen next",
        person: '- Gilda Radner'
    },

    {
        quote : "The most important thing is to enjoy your life - to be happy - it's all that matters",
        person: '- Audrey Hepburn'
    },

    {
        quote : "Grief can be the garden of compassion If you keep your heart open through everything, your pain can become your greatest ally in your life's search for love and wisdom",
        person: '- Rumi'
    },

    {
        quote : "The journey of a thousand miles begins with a single step",
        person: '- Lao Tzu'
    },

    {
        quote : "The world is grown so bad, that wrens make prey where eagles dare not perch",
        person: '- Shakespeare'
    },
    
    {
        quote : "The art of war is of vital importance to the State It is a matter of life and death, a road either to safety or to ruin",
        person: '- Sun Tzu'
    },

];

generate.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person
}) 