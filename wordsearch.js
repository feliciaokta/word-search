
const transpose = function(matrix) {

    // console.log("**********************")
    // console.log(matrix)
    
    let result = [];
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[row].length; col++) {
        //check if there is already a row for the curent column, if not create one (happens only when looping for the first row)
        if (!result[col]) {
          result.push([]);
        }
        //push the value to the line of the column
        result[col].push(matrix[row][col]);
        // console.log(result)
        // console.log("============")
    
      }
        
    }
    return result;
  };
  
  
  
  const wordSearch = (letters, word) => {
    let result = false;
    
    if (letters.length === 0) {
      return result;
    }
  
    const horizontalJoin = letters.map(ls => ls.join(''));
    //using transpose fn to flip the array vertically
    const verticalJoined = transpose(letters).map(ls => ls.join(''));
  
    for (l of horizontalJoin) {
      if (l.includes(word)) {
        result = true;
      }
    }
  
    for (l of verticalJoined) {
      if (l.includes(word)) {
        result = true;
      }
    }
  
  
    return result;
  };
  
  
  
  module.exports = wordSearch;