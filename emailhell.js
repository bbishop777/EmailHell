module.exports = function(array) {
  var count = {};

  array.forEach(function (element, index, array){
    if(!count.hasOwnProperty(element.email)) {
      count[element.email]= 0;
    }
    count[element.email] += 1;
  });

  console.log(count);
};
