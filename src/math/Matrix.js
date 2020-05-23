export default class Matrix {
  constructor() {
    this.grid = []
  }

  forEach(callback) {
    this.grid.forEach((column, x) => {
      column.forEach((value, y) => {
        callback(value, x, y)
      })
    })
  }

  delete(x, y) {
    const col = this.grid[x]

    if (col) {
      delete col[y]
    }

  }

  get(x, y) {
    const col = this.grid[x]

    if (col) {
      return col[y]
    }

    return undefined
  }

  set(x, y, value) {
    if (!this.grid[x]) {
      this.grid[x] = []
    }

    this.grid[x][y] = value
  }

  static RSOtoMatrix(array, n) {
    let matrix = new Matrix()

    let column = 0
    for (let i = 0; i < array.length; i++) {
      let row = i % n
      if(i > 0 && row === 0) {
        column++
      }

      matrix.set(column, row, array[i])
    }

    return matrix
  }
}