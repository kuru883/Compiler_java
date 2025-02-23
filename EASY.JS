// Grab our Run and Reset buttons from the DOM
const executebtn = document.querySelector('.editor__run');
const resetbtn = document.querySelector('.editor__reset');

// Initialize Ace Editor in the container with id "editorCode"
let codeEditor = ace.edit("editorCode");

// Set the base path so Ace can find its modules
ace.config.set("basePath", "lib/js/ace-editor/src-min");

// Define our default code to be loaded into the editor
let defaultcode = 'console.log("HELLOE WORLD");';

/* 
 * Custom editor library object.
 * This encapsulates all Ace Editor configuration.
 */
let editorlib = {
  init() {
    // Set the editor theme. Using 'chrome' for a clear, light theme.
    codeEditor.setTheme("ace/theme/dracula");

    // Set the language mode to JavaScript so syntax highlighting works.
    codeEditor.session.setMode("ace/mode/vbscript");

    // Enable autocompletion features: basic, live, and snippets.
    codeEditor.setOptions({
        fontFamily: 'Consolas, "Courier New", monospace',
      fontSize: '12pt',
      enableBasicAutocompletion: true,
      enableSnippets: true,
      enableLiveAutocompletion: true,
    });

    // Set the default code in the editor.
    codeEditor.setValue(defaultcode);

    // Ensure the editor is focused so that autocompletion triggers as you type.
    codeEditor.focus();

    // (Optional) You can force autocompletion after a delay if needed:
    // setTimeout(() => codeEditor.execCommand("startAutocomplete"), 500);
  }
};

// Add event listener for the Run button: get the code and execute it.
executebtn.addEventListener('click', () => {
  const userCode = codeEditor.getValue();
  try {
    // Dynamically create a function from the code and run it.
    new Function(userCode)();
  } catch (err) {
    console.error("Error executing code:", err);
  }
});

// Add event listener for the Reset button: restore default code.
resetbtn.addEventListener('click', () => {
  codeEditor.setValue(defaultcode);
});

// Initialize our editor configuration
editorlib.init();
