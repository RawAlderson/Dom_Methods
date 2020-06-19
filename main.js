const myBody = document.querySelector('body')

let newButton = document.createElement('button')
newButton.append('Remove Elements')
let newCollarBone = document.createElement('main')
myBody.append(newButton)
myBody.append(newCollarBone)

const myButton = document.querySelector('button')
const myCollarBone = document.querySelector('main')

let newImage = document.createElement('img')
newImage.className = 'image'
newImage.src = 'https://i.pinimg.com/originals/7c/6b/43/7c6b4309370c53562a4e4d3572fe18e5.jpg'
myCollarBone.append(newImage)
let newAnchorTag = document.createElement('a')
newAnchorTag.className = 'link'
newAnchorTag.href = 'http://www.gizoogle.net/textilizer.php'
newAnchorTag.append('Tranzizzle your text.(Use longer articles for the best results)')
myCollarBone.append(newAnchorTag)

myButton.addEventListener('click', function () {
    myCollarBone.remove()
})