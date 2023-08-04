

/**
 * Strips the prefix from the keys of the given key-value pairs
 * @param {string} htmlContent - HTML content which needs to be highlighted 
 * @param {string} plainText - This plain text is extracted from htmlContent
 * @param {array} plainTextPositions - Array of Objects with start and end positions of words in plainText (Not the positions in HTML)
 * @returns {string} Using the positions in plainText, find the appropriate positions in htmlContent, highlight the content and return it
 */
function highlightHTMLContent({htmlContent, plainText, plainTextPositions}) {
    let highlightedContent = htmlContent;
  
    for (const position of plainTextPositions) {
      const textToHighlight = plainText.substring(position.start, position.end+1);
      const highlightedText = `<mark>${textToHighlight}</mark>`;

      highlightedContent = highlightedContent.replace(textToHighlight,plainText.substring(position.start, position.start)+ highlightedText);
    }
  
    return highlightedContent;
}

export default highlightHTMLContent;