class CSSInterface {
	static getVariable(variable = '') {
		return getComputedStyle(
			document.querySelector(':root')
		).getPropertyValue(variable)
	}
	static setVariable(variable = '', value = '') {
		return document
			.querySelector(':root')
			.style.setProperty(variable, value)
	}
}

var mouse = {
	x: 0,
	y: 0,
	down: false,
}

setInterval(() => {
	var clock = document.querySelector('#clock')
	var date = new Date(Date.now())
	var string = `${
		date.getHours() > 12 ? date.getHours() - 12 : date.getHours()
	}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()} ${
		date.getHours() > 11 ? 'PM' : 'AM'
	}<br>${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
	clock.innerHTML = string
}, 50)

class Vector2 {
	x
	y
	constructor(x, y) {
		this.x = x
		this.y = y
	}
	static distance(a, b) {
		const dx = a.x - b.x
		const dy = a.y - b.y

		return Math.hypot(dx, dy)
	}
}

function Vec2(x,y) {
    return new Vector2(x,y)
}

function getDesktopRect() {
    return document.querySelector('.fos.desktop').getBoundingClientRect()
}

var windowIDs = []

/**
 * The base class for all FractalOS windows.
 */
class FOSWindow {
	/**
	 * The position of the window, including the "chrome" (extra UI elements).
	 */
	position
	/**
	 * The size of the window, including the "chrome" (extra UI elements).
	 */
	size
	/**
	 * The root HTML element of the window.\
	 * **Do not edit this element directly unless you know what you're doing.**\
	 * **Otherwise, use the other methods/properties provided by the class.**
	 */
	element
	/**
	 * When `true`, hides the "chrome" (extra UI elements, like the titlebar) of the window.
	 */
	borderless
	/**
	 * Whether or not the user is currently dragging the window, most likely with the titlebar.
	 */
	dragging
	/**
	 * The offset of the cursor from the window origin right before being dragged.
	 */
	dragOffset
	/**
	 * The ID of the window. Used to identify HTML elements with the `window-id` property.
	 */
	id
	/**
	 * Creates a new FractalOS window.
	 * @param {number} position The position of the newly created window.
	 * @param {number} size The size of the newly created window.
	 */
	constructor(position, size) {
		this.position = position
		this.size = size
		this.element = document.createElement('div')
		var titlebar = document.createElement('div')
		titlebar.classList.add('fos')
		titlebar.classList.add('titlebar')
		this.element.appendChild(titlebar)
		var content = document.createElement('iframe')
		this.element.classList.add('fos')
		this.element.classList.add('window')
		var randomId = Math.floor(Math.random() * 65535)
		for (var i = 0; i < 1; i += 0) {
			var match = false
			for (var j in windowIDs) {
				if (randomId == windowIDs[i]) {
					randomId = Math.floor(Math.random() * 255)
					match = true
				}
			}
			if (!match) {
				this.id = randomId
				windowIDs.push(randomId)
				i++
				break
			}
		}
		this.element.setAttribute('window-id', this.id.toString())
		document.querySelector('.fos.desktop').appendChild(this.element)
		this.element = document.querySelector(`div[window-id="${this.id}"]`)
		this.element.style.left = position.x + 'px'
		this.element.style.top = position.y + 'px'
		this.element.style.width = size.x + 'px'
		this.element.style.height = size.y + 'px'
		this.element
			.querySelector('.fos.titlebar')
			.addEventListener('mousedown', (event) => {
                this.dragOffset = Vec2(position.x-mouse.x,position.y-mouse.y)
				this.dragging = true
			})
		document.body.addEventListener('mouseup', (event) => {
			this.dragging = false
		})
		document.body.addEventListener('mousemove', (event) => {
			if (this.dragging) {
				this.position.x = event.clientX+this.dragOffset.x
				this.position.y = event.clientY+this.dragOffset.y
                var rect = document.body.getBoundingClientRect()
                //if (this.position.x < rect.left) {
                //    this.position.x = rect.left
                //}
                if (this.position.y < rect.top) {
                    this.position.y = rect.top
                }
                //if (this.position.x > rect.right-this.size.x) {
                //    this.position.x = rect.right-this.size.x
                //}
                if (this.position.y > rect.bottom-31.5) {
                    this.position.y = rect.bottom-31.5
                }
				this.element.style.left = position.x + 'px'
				this.element.style.top = position.y + 'px'
				this.element.style.width = size.x + 'px'
				this.element.style.height = size.y + 'px'
				//this.render()
			}
		})
	}
	render() {
		this.element = document.querySelector(`div[window-id="${this.id}"]`)
		this.element.style.left = position.x + 'px'
		this.element.style.top = position.y + 'px'
		this.element.style.width = size.x + 'px'
		this.element.style.height = size.y + 'px'
	}
}

var testwindow = new FOSWindow(
	Vec2(window.innerWidth / 2 - 200, window.innerHeight / 2 - 150),
	Vec2(400, 300)
)

document.body.addEventListener('mousedown', (event) => {
	mouse.down = true
})
document.body.addEventListener('mouseup', (event) => {
	mouse.down = false
})
document.body.addEventListener('mousemove', (event) => {
	mouse.x = event.clientX
    mouse.y = event.clientY
})