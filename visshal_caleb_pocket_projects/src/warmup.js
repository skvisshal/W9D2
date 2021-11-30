
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    if (htmlElement.children) {
        const array = Array.from(htmlElement.children)
        for(let i = 0; i< array.length; i++) {
            htmlElement.removeChild(array[i]);
        }
    }
    const pTag = document.createElement("p");
    pTag.innerHTML = string;
    htmlElement.appendChild(pTag);
    
};

htmlGenerator('Party Time.', partyHeader);