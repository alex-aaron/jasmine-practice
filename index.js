const watchList = [
  {
    title: 'Come and See',
    director: 'Elem Klimov',
    year: 1985,
    genreTags: ['Drama', 'World War 2'],
    streaming: [
      {
        platform: 'Criterion Channel',
        paid: true,
      }
    ]
  },
  {
    title: 'His Girl Friday',
    director: 'Howard Hawks',
    year: 1940,
    genreTags: ['Comedy'],
    streaming: [
      {
        platform: 'Tubi',
        paid: false,
      },
      {
        platform: 'Max',
        paid: true
      }
    ]
  },
  {
    title: 'Bringing Up Baby',
    director: 'Howard Hawks',
    year: 1938,
    genreTags: ['Comedy'],
    streaming: [
      {
        platform: 'Tubi',
        paid: false
      },
      {
        platform: 'Criterion Channel',
        paid: true
      }
    ]
  },
  {
    title: 'Shoah',
    director: 'Claude Lanzmann',
    year: 1985,
    genreTags: ['Documentary', 'World War 2'],
    streaming: [
      {
        platform: 'Max',
        paid: true
      },
      {
        platform: 'Mubi',
        paid: true
      }
    ]
  }
];

/*
Create a function called addParenthesis that takes in one input - `string`. This
words in this string will contain random numbers. This function must output a 
new string where the numbers are surrounded by parentheses. Your solution must
use regex.

example:
addParenthesis("1alex, francis2, aar3on"); // => "(1)alex, francis(2), aar(3)on"
*/

function addParenthesis(string){
  let output = "";
  for (let i = 0; i < string.length; i++){
    string[i].match(/\d/g) ? output += `(${string[i]})` : output += string[i];
  }
  return output;

}

module.exports = {
  watchList: watchList,
  addParenthesis: addParenthesis
};