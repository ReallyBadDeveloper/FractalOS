var term = window.terminalAPI

class Webash {
    commands = []
    constructor() {
        
    }
}

class WebashCommand {
    name
    constructor(name) {
        this.name = name
    }
}

window.webash = new Webash()

term.write('\n~ $ ')