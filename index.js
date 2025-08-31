var term = window.terminalAPI
var fs = window.fsAPI
var root = window.rootDirectory
document.title = 'FractalOS'
term.write('\n\nWelcome to FractalOS!\n')
var users = await fs.readFileAsync(await fsAPI.FindFileInDir(root, 'users'))
if (!users) {
    term.write('\nNo previous user(s) were found, create a new user:\nusername: ')
    term.getInput().then(r => {
        var username = r
        term.write('password: ')
        term.getInput().then(async r => {
            var password = r
            await fs.writeFileAsync(fs.FindFileInDir(root,'users'),`${username}|${password}`)
        })
    })
}