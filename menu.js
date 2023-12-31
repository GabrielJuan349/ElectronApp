const { app, Menu } = require('electron')

const setMainMenu = (mainWindow) => {
    const template = [{
            label: 'GjMarkDown',
            submenu: [
                /*{
                label: 'Fuera de aqui',
                accelerator
                click: () => {
                    app.quit()
                }*/

                { role: 'about' },
                { type: 'separator' },
                { role: 'services' },
                { type: 'separator' },
                { role: 'hide' },
                { role: 'hideOthers' },
                { role: 'unhide' },
                { type: 'separator' },
                { role: 'quit' }

            ]
        },
        {
            label: 'Themes',
            submenu: [{
                    label: 'Light',
                    click: () => {
                        mainWindow.webContents.send('update-theme', 'light')
                    }
                },
                {
                    label: 'Dark',
                    click: () => {
                        mainWindow.webContents.send('update-theme', 'dark')
                    }
                }
            ]
        },
        {
            label: 'View',
            submenu: [
                { role: 'reload' },
                { role: 'forceReload' },
                { role: 'toggleDevTools' },
                { type: 'separator' },
                { role: 'resetZoom' },
                { role: 'zoomIn' },
                { role: 'zoomOut' },
                { type: 'separator' },
                { role: 'togglefullscreen' }
            ]
        },
    ]
    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
}

module.exports = {
    setMainMenu
}