fetch('https://santon21.github.io/santon21/building inventory viz.json')
    .then((response) => response.json())
    .then((data) => console.log(data));
