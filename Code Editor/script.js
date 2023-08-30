const htmlTab = document.getElementById('html-tab');
const codeEditor = document.getElementById('code-editor');
const runButton = document.getElementById('run-button');
const outputDiv = document.getElementById('output');

let currentTab = 'html';

htmlTab.addEventListener('click', () => {
  currentTab = 'html';
  htmlTab.classList.add('active');
  cssTab.classList.remove('active');
  codeEditor.placeholder = 'Enter your HTML code here';
});

runButton.addEventListener('click', () => {
  const code = codeEditor.value;
  
  if (currentTab === 'html') {
    outputDiv.innerHTML = code;
  } else {
    const styleTag = document.createElement('style');
    styleTag.textContent = code;
    outputDiv.innerHTML = '';
    outputDiv.appendChild(styleTag);
  }
});
