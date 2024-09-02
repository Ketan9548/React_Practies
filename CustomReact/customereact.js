function constomRender(react1,container){
    // const domElement  = document.createElement(react1.type);
    // domElement.innerHTML = react1.children;
    
    // domElement.setAttribute('href',react1.props.href);
    // domElement.setAttribute('target',react1.props.target);

    // container.appendChild(domElement);

    const domElement  = document.createElement(react1.type);
    domElement.innerHTML = react1.children;

    for (let i = 0; i < Object.keys(react1.props).length; i++) {
        const key = Object.keys(react1.props)[i];
        domElement.setAttribute(key, react1.props[key]);
    }
    container.appendChild(domElement);
}


const reactElement = {
    type : 'a',
    props: {
        href:"https://google.com",
        target:"_blank"
    },
    children: 'Click me to visit google'
}


const maincontainer = document.querySelector('#root')
constomRender(reactElement, maincontainer);



// const firt = {
//     name:"kapil",
//     surname:"chauhan"
// }

// for (let i = 0; i < Object.keys(firt).length; i++) {
//     console.log(Object.keys(firt)[i]);
// }

