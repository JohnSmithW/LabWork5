function replaceString(text, searchStr, newStr) {
  searchStr = new RegExp(searchStr, 'g');
  if (searchStr !== '') {
    text = text.replace(searchStr, newStr);
    return text;
  } else { console.log(false) }
}