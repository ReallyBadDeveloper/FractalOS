var term = window.terminalAPI
var fs = window.fsAPI
var root = window.rootDirectory
var kernel = window.lgbAPI

document.title = 'FractalOS'
/* var favicon = document.createElement('link')
favicon.type = 'image/x-icon'
favicon.rel = 'icon'
const reader = new FileReader()

reader.onloadend = () => {
	// The result contains the Base64 encoded string (data URL)
	favicon.href = reader.result
    document.head.appendChild(favicon)
}

reader.readAsDataURL(fs.FindFileInDir(root.getDiretoryHandle('icons/logo'),'icon_light.ico')) // Read the file as a data URL */

term.write('\n\nWelcome to FractalOS!\n')
var users = localStorage.getItem('users')
if (!users) {
	term.write(
		'\nNo previous user(s) were found, create a new user:\nusername: '
	)
	term.getInput().then((r) => {
		var username = r
		term.write('password: ')
		term.getInput().then(async (r) => {
			var password = r
			await localStorage.setItem('users', `${username}|${password}`)
			term.write('\nUser registered.')
		})
	})
} else {
	var username
	var password
	term.write('\nlogin: ')
	term.getInput().then(async (r) => {
		username = r
		term.write(`password for ${username}`)
		term.getInput().then(async (r) => {
			password = r
            var users = localStorage.getItem('users').split('\n')
            await kernel.sleep(500)
			
		})
	})
}
kernel.loadScript(root, 'webash.js')
