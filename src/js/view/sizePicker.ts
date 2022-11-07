import createMatrix from './matrixCreator';
import { puzzleFrames, puzzleFramesPosition } from './view';

export let initialArr: number[] = [];
export let puzzleSize = 3;

export function generateSize(val = 3) {
  initialArr = [];

  for (let i = 1; i < val * val; i++) {
    initialArr.push(i)
  }
}

function changeSize() {
  const sizeButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.sizePicker__elem');
  const gameField = document.querySelector('.gameField') as HTMLElement;

  sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
      generateSize(Number(button.dataset.size));
      gameField.innerHTML = '';
      puzzleSize = Number(button.dataset.size);
      puzzleFrames(initialArr, gameField);

      createMatrix(initialArr, puzzleSize);

      puzzleFramesPosition(createMatrix(initialArr, puzzleSize), gameField.offsetWidth, Number(button.dataset.size));
    })
  })
}

export default changeSize;