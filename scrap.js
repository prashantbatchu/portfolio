// fetchAtCoderData.js
const fetch = require('node-fetch');

async function getAtCoderData(username) {
  const url = `https://atcoder.jp/users/${username}/history/json`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error ${response.status}`);
  }

  const data = await response.json();
  return data;
}
console.log(getAtCoderData("BPKAtcoder42"));

module.exports = getAtCoderData("BPKAtcoder42");
