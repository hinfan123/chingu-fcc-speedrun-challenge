'use strict'
module.exports.convert = (timestamp) => {
  if(Number(timestamp)){ //if unix timestamp is given, i.e., a number
    let d = new Date(timestamp * 1000);
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    let day = d.getDate();
    return {
      "unix": timestamp,
      "natural": month + ' ' + day + ', ' + year
    }
  }
  else {
    return {
      "unix": Date.parse(timestamp) / 1000, //convert to unix timestamp from string
      "natural": timestamp
    }
  }
};
