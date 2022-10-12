/**
 * The my-rock-paper-scissors-application web component module.
 *
 * @author Fredrik Jurgell <fj222qp@student.lnu.se>
 * @version 1.0.0
 */

const IMG_URL_ROCK = (new URL('images/Rock.svg', import.meta.url)).href
const IMG_URL_PAPER = (new URL('images/Paper.svg', import.meta.url)).href
const IMG_URL_SCISSOR = (new URL('images/Scissor.svg', import.meta.url)).href
const IMG_URL_CLOSE_BUTTON = (new URL('images/close-button.svg', import.meta.url)).href

/*
* Define template.
*/
const template = document.createElement('template')
template.innerHTML = `
  <style>
    #inputDiv {
      max-width: 20em;
      max-height: 10em;
      min-width: 20em;
      min-height: 10em;
      overflow: auto;
    }

    table {
      width: 24em;
    }

    ul {
      text-align: center;
      list-style-type: none;
      padding: 0;
      list-style-type: none;
    }

    li {
      text-align: center;
      display: inline-block;
      margin: 30px;
    }

    #rockPaperScissorsApplication {
      width: 300px;
    }
    
    #rockPaperScissorsApplicationDiv {
      position: absolute;
      border: 1px solid;
      background-color: #e0e0e0;
      width: 300px;
      padding-right: 25px;
      padding-left: 25px;
      padding-bottom: 25px;
    }

    #draggableDiv {
      text-align: right;
      background-color: #646464;
      width: 300px;
      height: 35px;
    }

    #buttonDiv {
      text-align: center;
    }

    button {
      margin-left: 10px;
      margin-right: 10px;
      background-color: white;
      border: 2px solid black;
    }

    li > img {
      border: 1px solid transparent;
    }
  </style>

  <div id="rockPaperScissorsApplicationDiv">
    <div id="draggableDiv">
      <button id="deleteBtn"><img src="${IMG_URL_CLOSE_BUTTON}" height="25px" width="25px"></button>
    </div>
    <form id="rockPaperScissorsApplication">
        <table>
          <td id="playerWins">Player: 0</td>
          <td id="draws">Draw: 0</td>
          <td id="computerWins">Computer: 0</td>
        </table>
        <div id="inputDiv">
          <ul></ul>
        </div>
      <div id="buttonDiv">
        <button id="rockBtn"><img src="${IMG_URL_ROCK}" height="50px" width="50px"></button>
        <button id="paperBtn"><img src="${IMG_URL_PAPER}" height="50px" width="50px"></button>
        <button id="scissorBtn"><img src="${IMG_URL_SCISSOR}" height="50px" width="50px"></button>
      </div
    </form>
  </div>
`

/*
 * Define custom element.
 */
customElements.define('my-rock-paper-scissors-application',
  /**
   * Representing a rock paper scissors application.
   */
  class extends HTMLElement {
    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      // Attach a shadow DOM tree to this element and
      // append the template to the shadow root.
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))

      this.buttonDiv = this.shadowRoot.querySelector('#buttonDiv')
      this.background = this.shadowRoot.querySelector('#rockPaperScissorsApplicationDiv')
      this.rockBtn = this.shadowRoot.querySelector('#rockBtn')
      this.paperBtn = this.shadowRoot.querySelector('#paperBtn')
      this.scissorBtn = this.shadowRoot.querySelector('#scissorBtn')
      this.ulElement = this.shadowRoot.querySelector('#inputDiv > ul')
      this.inputDiv = this.shadowRoot.querySelector('#inputDiv')
      this.playerWinsTd = this.shadowRoot.querySelector('#playerWins')
      this.drawsTd = this.shadowRoot.querySelector('#draws')
      this.computerWinsTd = this.shadowRoot.querySelector('#computerWins')

      this.playerWins = 0
      this.computerWins = 0
      this.draws = 0
    }

    /**
     * Called after the element is inserted into the DOM.
     */
    connectedCallback () {
      this.style.position = 'absolute'
      this.style.zIndex = (this.getMaxZIndex() + 1)

      this.bindDragElement = this.dragElement.bind(this)
      this.shadowRoot.querySelector('#draggableDiv').addEventListener('click', this.bindDragElement)

      this.bindDeleteElement = this.deleteElement.bind(this)
      this.shadowRoot.querySelector('#deleteBtn').addEventListener('click', this.bindDeleteElement)

      this.bindOnClick = this.onClick.bind(this)
      this.rockBtn.addEventListener('click', this.bindOnClick)

      this.bindOnClick = this.onClick.bind(this)
      this.paperBtn.addEventListener('click', this.bindOnClick)

      this.bindOnClick = this.onClick.bind(this)
      this.scissorBtn.addEventListener('click', this.bindOnClick)
    }

    /**
     * The human player.
     *
     * @param {string} playerInput - Players input.
     */
    humanPlayer (playerInput) {
      if (playerInput === 'rockBtn') {
        this.playerInput = 'Rock'
        this.checkWinner(this.playerInput)
      } else if (playerInput === 'paperBtn') {
        this.playerInput = 'Paper'
        this.checkWinner(this.playerInput)
      } else if (playerInput === 'scissorBtn') {
        this.playerInput = 'Scissor'
        this.checkWinner(this.playerInput)
      }
    }

    /**
     * Checks who won.
     *
     * @param {string} playerInput - Players input.
     */
    checkWinner (playerInput) {
      // Computer plays.
      this.computerRPS()

      // Check winner.
      if ((playerInput === 'Rock' && this.rpsComputer === 'Scissor') || (playerInput === 'Paper' && this.rpsComputer === 'Rock') || (playerInput === 'Scissor' && this.rpsComputer === 'Paper')) {
        // Player win.
        this.playerWins++
        this.playerWinsTd.textContent = `Player: ${this.playerWins}`
        this.background.style.backgroundColor = '#50C878'
      } else if (playerInput === this.rpsComputer) {
        // Draw.
        this.draws++
        this.drawsTd.textContent = `Draw: ${this.draws}`
        this.background.style.backgroundColor = '#FFDEAD'
      } else {
        // Computer win.
        this.computerWins++
        this.computerWinsTd.textContent = `Computer: ${this.computerWins}`
        this.background.style.backgroundColor = '#986868'
      }

      // Display who won.
      this.printWinner(playerInput)
    }

    /**
     * Prints out the winner.
     *
     * @param {string} playerInput - Players input.
     */
    printWinner (playerInput) {
      const imgELementPlayer = document.createElement('img')
      imgELementPlayer.setAttribute('height', '50px')

      // Changes the img to players choice.
      if (playerInput === 'Rock') {
        imgELementPlayer.setAttribute('src', `${IMG_URL_ROCK}`)
      } else if (playerInput === 'Paper') {
        imgELementPlayer.setAttribute('src', `${IMG_URL_PAPER}`)
      } else if (playerInput === 'Scissor') {
        imgELementPlayer.setAttribute('src', `${IMG_URL_SCISSOR}`)
      }

      const imgELementComp = document.createElement('img')
      imgELementComp.setAttribute('height', '50px')

      // Changes the img to computers choice.
      if (this.rpsComputer === 'Rock') {
        imgELementComp.setAttribute('src', `${IMG_URL_ROCK}`)
      } else if (this.rpsComputer === 'Paper') {
        imgELementComp.setAttribute('src', `${IMG_URL_PAPER}`)
      } else if (this.rpsComputer === 'Scissor') {
        imgELementComp.setAttribute('src', `${IMG_URL_SCISSOR}`)
      }

      let liElement = document.createElement('li')
      liElement.append(imgELementPlayer)
      this.shadowRoot.querySelector('#inputDiv > ul').append(liElement)

      liElement = document.createElement('li')
      liElement.append(imgELementComp)
      this.shadowRoot.querySelector('#inputDiv > ul').append(liElement)

      // Change the backgroundcolour to white again, after 3000ms.
      setTimeout(() => {
        this.background.style.backgroundColor = 'white'
        this.ulElement.textContent = ''
      }, 3000)
    }

    /**
     * Handles click events.
     *
     * @param {MouseEvent} event - The mouse event.
     */
    onClick (event) {
      event.preventDefault()
      const playerInput = event.path[1].getAttribute('id')

      // If playyer clicks on the buttons, disable them, and enable again after 3000ms.
      if (playerInput === 'rockBtn' || playerInput === 'paperBtn' || playerInput === 'scissorBtn') {
        this.rockBtn.disabled = true
        this.paperBtn.disabled = true
        this.scissorBtn.disabled = true
        this.buttonDiv.style.display = 'none'
        setTimeout(() => {
          this.rockBtn.disabled = false
          this.paperBtn.disabled = false
          this.scissorBtn.disabled = false
          this.buttonDiv.style.display = 'inline'
        }, 3000)

        this.humanPlayer(playerInput)
      }
    }

    /**
     * The computerplayer.
     */
    computerRPS () {
      const rndComputer = Math.floor(Math.random() * 3) + 1

      if (rndComputer === 1) {
        this.rpsComputer = 'Scissor'
      } else if (rndComputer === 2) {
        this.rpsComputer = 'Rock'
      } else if (rndComputer === 3) {
        this.rpsComputer = 'Paper'
      }
    }

    /**
     * Find the highest z-index on the page.
     * Code is very much inspired from: https://bobbyhadz.com/blog/javascript-find-highest-z-index-on-page.
     *
     * @returns {number} - The highest z-index on the page.
     */
    getMaxZIndex () {
      return Math.max(
        ...Array.from(document.querySelectorAll('body *'), element =>
          parseFloat(window.getComputedStyle(element).zIndex)
        ).filter(zIndex => !Number.isNaN(zIndex)),
        0
      )
    }

    /**
     * Deletes the element.
     */
    deleteElement () {
      this.remove()
    }

    /**
     * Moves the element.
     */
    dragElement () {
      // The elements move to the front.
      this.style.zIndex = this.getMaxZIndex() + 1
      const element = this.shadowRoot.querySelector('#rockPaperScissorsApplicationDiv')
      let pos1 = 0
      let pos2 = 0
      let pos3 = 0
      let pos4 = 0
      if (element) {
        this.shadowRoot.querySelector('#draggableDiv').onmousedown = dragMouseDown
      }

      /**
       * Mouse drag event.
       *
       * @param {*} event The event.
       */
      function dragMouseDown (event) {
        event = event || window.event
        event.preventDefault()
        // Get the mouse cursor position at startup.
        pos3 = event.clientX
        pos4 = event.clientY
        document.onmouseup = closeDragElement
        // Call a function whenever the cursor moves.
        document.onmousemove = elementDrag
      }

      /**
       * Moves the element.
       *
       * @param {*} event - The event.
       */
      function elementDrag (event) {
        event = event || window.event
        event.preventDefault()
        // Calculate the new cursor position.
        pos1 = pos3 - event.clientX
        pos2 = pos4 - event.clientY
        // Calculate the max cursor position.
        const xMax = window.innerWidth - element.offsetWidth
        const yMax = window.innerHeight - element.offsetHeight
        // Set the element's new position.
        if ((element.offsetLeft - pos1) >= 0 && (element.offsetLeft - pos1) <= xMax) {
          element.style.left = (element.offsetLeft - pos1) + 'px'
          pos3 = event.clientX
        }
        if ((element.offsetTop - pos2) >= 0 && (element.offsetTop - pos2) <= yMax) {
          element.style.top = (element.offsetTop - pos2) + 'px'
          pos4 = event.clientY
        }
      }

      /**
       * Stops moving the element.
       */
      function closeDragElement () {
        // Stop moving when mouse button is released.
        document.onmouseup = null
        document.onmousemove = null
      }
    }
  }
)
