import createMatrix from './matrixCreator';
import { puzzleFrames, puzzleFramesPosition } from './view';

export let initialArr: number[] = [];
export let puzzleSize = 3;

export function generateSize(val = 3) {
  initialArr = [];

  for (let i = 1; i < val * val; i++) {
    initialArr.push(i)
  }

  function shuffle(array: number[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  shuffle(initialArr);
}

function changeSize() {
  const sizeButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.sizePicker__elem');
  const gameField = document.querySelector('.gameField') as HTMLElement;

  sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
      gameField.innerHTML = '';
      puzzleSize = Number(button.dataset.size);
      generateSize(puzzleSize);
      puzzleFrames(initialArr, gameField);

      createMatrix(initialArr, puzzleSize);

      puzzleFramesPosition(createMatrix(initialArr, puzzleSize), gameField.offsetWidth, puzzleSize);
    })
  })
}

export default changeSize;