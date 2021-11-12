let body: HTMLBodyElement = document.body;
for (let child: Element of body.children) {
    console.log(child);
    console.log(child.attributes);
    console.log(child.textContent);
}