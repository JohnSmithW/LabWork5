var text = 'some text i have just typed , you can use some of my code and get a copyright strike';
var searchStr = 's';
var newStr = 'b';
var reg = new RegExp(searchStr, 'g');

function replaceString() {
  if (searchStr !== '') {
    text = text.replace(reg, newStr)
  } else { console.log(false) }
}