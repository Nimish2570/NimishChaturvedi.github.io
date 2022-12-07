const panels = document.querySelectorAll('.panel')
const lists=document.querySelectorAll('.list')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
function activelink(){
    lists.forEach((item)=>
    item.classList.remove('active'));
    this.classList.add('active');

}
lists.forEach((item)=>
item.addEventListener('click',activelink))
