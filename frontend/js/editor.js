/* ─────────────────────────────────────────
   editor.js  –  Monaco Editor for problem page
   ───────────────────────────────────────── */

let editor;

/* ── Default code templates ── */
const templates = {
  cpp:
`#include <iostream>
#include <vector>
using namespace std;

// Two Sum – return indices of two numbers that add up to target
vector<int> twoSum(vector<int>& nums, int target) {
    // Write your solution here

    return {};
}

int main() {
    vector<int> nums = {2, 7, 11, 15};
    int target = 9;
    vector<int> result = twoSum(nums, target);
    cout << "[" << result[0] << ", " << result[1] << "]" << endl;
    return 0;
}`,

  java:
`import java.util.*;

public class Solution {
    // Two Sum – return indices of two numbers that add up to target
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here

        return new int[]{};
    }

    public static void main(String[] args) {
        int[] nums = {2, 7, 11, 15};
        int target = 9;
        int[] result = twoSum(nums, target);
        System.out.println("[" + result[0] + ", " + result[1] + "]");
    }
}`
};

/* ── Initialise Monaco ── */
require.config({
  paths: { vs: 'https://unpkg.com/monaco-editor@0.44.0/min/vs' }
});

require(['vs/editor/editor.main'], function () {
  editor = monaco.editor.create(document.getElementById('editor'), {
    value: templates.cpp,
    language: 'cpp',
    theme: 'vs',                 // light theme
    fontSize: 14,
    minimap: { enabled: false },
    automaticLayout: true,
    scrollBeyondLastLine: false,
    padding: { top: 12 },
    lineNumbersMinChars: 3,
    renderLineHighlight: 'line',
    tabSize: 4
  });
});

/* ── Language switch ── */
document.getElementById('language').addEventListener('change', function () {
  const lang = this.value;
  const monacoLang = lang === 'cpp' ? 'cpp' : 'java';

  // Update language model
  monaco.editor.setModelLanguage(editor.getModel(), monacoLang);

  // Replace code with matching template
  editor.setValue(templates[lang]);
});

/* ── Run Code ── */
function runCode() {
  const code   = editor.getValue();
  const input  = document.getElementById('input').value;
  const output = document.getElementById('output');

  let result = '▶ Running code...\n\n';
  result += '── Source Code ──\n' + code + '\n';

  if (input.trim()) {
    result += '\n── Input ──\n' + input + '\n';
  }

  result += '\n── Note ──\nThis is a frontend-only preview. Connect a backend compiler to execute code.';

  output.innerText = result;
}