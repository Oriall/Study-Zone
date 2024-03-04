document.addEventListener('DOMContentLoaded', function() {
    colorizeWords('codeContainer', '#', '#EEFF88');
    colorizeWords('codeContainer', 'include', '#903CFE');
    colorizeWords('codeContainer', '<iostream>', '#3FF12F');
    colorizeWords('codeContainer', '<bits/stdc.h>', '#3FF12F'); // Modified to '<bits/stdc.h>'
    colorizeWords('codeContainer', 'main()', '#FFB156');
    colorizeOperators('codeContainer', '#6F93FF');
  });
  
  function colorizeWords(elementId, targetWord, color) {
    const contentElement = document.getElementById(elementId);
  
    if (contentElement) {
      const content = contentElement.innerHTML;
      const coloredContent = colorWords(content, targetWord, color);
      contentElement.innerHTML = coloredContent;
    }
  }
  
  function colorWords(text, targetWord, color) {
    // Escape special characters in the targetWord
    const escapedTargetWord = targetWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  
    const regex = new RegExp(`\\b${escapedTargetWord}\\b`, 'gi');
    return text.replace(regex, `<span style="color: ${color}">${targetWord}</span>`);
  }
  
  function colorizeOperators(elementId, color) {
    const contentElement = document.getElementById(elementId);
  
    if (contentElement) {
      const content = contentElement.innerHTML;
      const coloredContent = colorOperators(content, color);
      contentElement.innerHTML = coloredContent;
    }
  }
  
  function colorOperators(text, color) {
    // List of operators to be colored
    const operators = ['+', '-', '=', '>>', '<<', '..'];
  
    // Escape special characters in the operators
    const escapedOperators = operators.map(operator => operator.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  
    // Create a regex pattern for the operators
    const regexPattern = `\\b(${escapedOperators.join('|')})\\b`;
  
    // Replace operators with colored spans
    const regex = new RegExp(regexPattern, 'g');
    return text.replace(regex, `<span style="color: ${color}">$1</span>`);
  }
  