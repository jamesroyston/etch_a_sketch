const DOMstrings = {
  app: document.querySelector('#app')
}

const container = document.querySelector('#container')


const generateGrid = (length) => {
  let boxSize = `${100/length}%`;
  for (let i = 0; i < length*length; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    container.appendChild(cell)
    cell.style.width = boxSize
    cell.style.height = boxSize
    cell.style.border = '1px lightgrey solid'
    cell.addEventListener('mouseover', function () {
      this.style.backgroundColor = 'black'
      console.log(this)
    })
  }
  DOMstrings.app.appendChild(container)
}

generateGrid(32)
