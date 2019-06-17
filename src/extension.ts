// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { AppModel } from './appModel';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.createInexitenceFile', () => {
        console.log('vscode.window');
        console.log(vscode.window.activeTextEditor);
        console.log(vscode.window);
        console.log('vscode.window');
        let editor = vscode.window.activeTextEditor;

        if (!editor) {
            return;
        }

        console.log(editor.document.lineAt(0).text);
        console.log(editor.selection.active.line);
        let line = editor.document.lineAt(editor.selection.active.line).text;
        // The code you place here will be executed every time your command is executed
        // let line = vscode.window.activeTextEditor._documentData.lines[0];
        console.log(line);
        let reg = /'(.*)'|"(.*)"/;
        let path = line.match(reg);
        console.log(path);
        let app = new AppModel();
        if (path) {
            app.createFileOrFolder('file', path[1]);
        }
        // Display a message box to the user
        // vscode.window.showInformationMessage('Hello World!');
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
