const vscode = require("vscode");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log('"discordjs-v14-snippets" is now active!');

  let disposable = vscode.commands.registerCommand(
    "discordjs-v14-snippets.helloWorld",
    function () {
      vscode.window.showInformationMessage(
        'hello world from "discordjs-v14-snippets"'
      );
    }
  );

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
