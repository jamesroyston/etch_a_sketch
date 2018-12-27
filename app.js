const DOMstrings = {
  app: document.querySelector('#app')
}

const container = document.querySelector('#container')


const generateGrid = (length) => {
  if (length >= 100) {
    console.warn('%cSorry, that grid size may cause slowness in your browser!',
        'color: red; font-size: 36px; font-family: \'Open Sans\'')
    alert('Sorry, that grid size may cause slowness in your browser.')
    generateGrid(10)
  } else {
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
      })
    }
    DOMstrings.app.appendChild(container)

  }

  
}

let gridSize = document.querySelector('#gridInput')

document.querySelector('#submitBtn')
    .addEventListener('click', function() {
      container.innerHTML = ''
      generateGrid(gridSize.value)
    })

// enter key to submit
gridSize.addEventListener('keypress', function(e) {
      if (e.keyCode == 13 || e.which == 13) {
        console.log(e.keyCode)
        container.innerHTML = ''
        generateGrid(gridSize.value)
      }
    })


// render default grid
generateGrid(gridSize.value)