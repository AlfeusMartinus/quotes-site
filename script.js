let config;

const xhr = new XMLHttpRequest();
xhr.open('GET', './config.json', true);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        config = JSON.parse(xhr.responseText);
        main();
    }
};
xhr.send();

function main() {
    document.getElementById('klikButton').addEventListener('click', () => {
        getQuote();
    });

    async function getQuote() {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': config.apiKey,
                'X-RapidAPI-Host': config.apiHost
            }
        };
        try {
            const response = await fetch('https://quotes15.p.rapidapi.com/quotes/random/', options);
            const data = await response.json();
            const { name } = data.originator;
            const { content } = data;
            nama = name; 
            konten = content;
        } 
        catch (err) {
            console.error(err);
            response.status(500).send('Something went wrong');
        }
        document.querySelector('#content').textContent = konten;
        document.querySelector('#name').textContent = (`- ${nama}`);    
    }
}