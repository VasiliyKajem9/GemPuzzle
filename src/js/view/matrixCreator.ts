function createMatrix(arr: number[], size: number) {
  const matrix: number[][] = [];
  let y = 0;
  let x = 0;
  for (let i = 0; i < size; i++) {
    matrix.push([])
  }

  for (let j = 0; j < arr.length; j++) {
    if (x >= size) {
      y++;
      x = 0;
    }

    matrix[y][x] = arr[j];
    x++
  }

  return matrix;
}

export default createMatrix;