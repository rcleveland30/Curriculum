const root = document.getElementById('root');

const heading = document.createElement('h1');
heading.innerText = 'My Trip to France';
heading.style.fontFamily = 'sans-serif';
heading.style.color = '#444'; 
root.append(heading);

const description = document.createElement('p')
description.innerText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, ex. Nostrum qui voluptatem asperiores odit aut architecto labore mollitia dignissimos minima voluptas suscipit, reiciendis deserunt quam at alias molestiae quisquam possimus assumenda maiores expedita est officiis veniam et reprehenderit! Distinctio omnis sit ex harum ut ad, voluptates vitae aut laborum.';
description.style.lineHeight = '1.35rem'
root.append(description);