"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const appModel_1 = require("./appModel");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "helloworld" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
        console.log('vscode.window');
        console.log(vscode.window.activeTextEditor);
        console.log(vscode.window.activeTextEditor['_documentData']['_lines'][3]);
        console.log('vscode.window');
        // The code you place here will be executed every time your command is executed
        let line = vscode.window.activeTextEditor['_documentData']['_lines'][3];
        let reg = /'(.*)'$/;
        let path = line.match(reg);
        console.log('2222');
        console.log(path);
        let app = new appModel_1.AppModel();
        app.createFileOrFolder('file', path[1]);
        // Display a message box to the user
        vscode.window.showInformationMessage('Hello World!');
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map