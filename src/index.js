
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix === undefined) {
        return []
    } else {
        let newArr = []
        for (let i = 0; i < matrix.length; i+=1) {
          if (i % 2 === 0) {
            newArr = newArr.concat(matrix[i])
          } else {
            newArr = newArr.concat(matrix[i].reverse())
          }
        }

        return newArr
    }
}
