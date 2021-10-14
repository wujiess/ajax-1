getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/3.html');
    request.onload = () => {
        const div = document.createElement('div');
        div.innerHTML = request.response;
        document.body.appendChild(div);
    }
    request.onerror = () => {};
    request.send();
}

getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/style.css');
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const style = document.createElement('style');
            style.innerHTML = request.response;
            document.head.appendChild(style);
        }
    }
    request.send();
}

getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/2.js');
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const script = document.createElement('script');
            script.innerHTML = request.response
            document.body.appendChild(script)
        }
    }
    request.send();
}

getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/4.xml');
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent.trim();
            console.log(text);
        }
    }
    request.send();
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/5.json');
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const json = JSON.parse(request.response);
            console.log(json);
        }
    }
    request.send();
}

let page = 1;

getPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', `/page${page + 1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const json = JSON.parse(request.response);
            json.forEach(item => {
                const li = document.createElement('li');
                li.innerText = item.id;
                xxx.appendChild(li);
            });
        }
    }
    page++;
    request.send();
}