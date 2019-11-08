function replaceString(text, searchStr, newStr) {
  if (searchStr !== '' && typeof text === 'string' && typeof searchStr === 'string' && typeof newStr ==='string') {
    searchStr = new RegExp(searchStr, 'g');
    text = text.replace(searchStr, newStr);
    return text;
  } else {
    return false;
  }
}
