function replaceString(text, searchStr, newStr) {
  searchStr = new RegExp(searchStr, 'g');
  if (searchStr !== '' && typeof text === 'string') {
    text = text.replace(searchStr, newStr);
    return text;
  } else {
    return false;
  }
}