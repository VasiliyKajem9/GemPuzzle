import { initialArr } from './sizePicker';

export function puzzleFrames(arr: number[], appendElem: HTMLElement): void {
  arr.forEach(elem => {
    const pazzleElem = document.createElement('button');
    pazzleElem.className = 'gameField__pazzleElem';
    pazzleElem.innerHTML = `${elem}`;

    appendElem.append(pazzleElem);
  })
}

function appView() {
  const heading = document.createElement('h1');
  const gameField = document.createElement('div');
  const sizePicker = document.createElement('div');
  const fieldPicker = [
    {
      name: '3x3',
      dataSet: '3',
    },
    {
      name: '4x4',
      dataSet: '4',
    },
    {
      name: '5x5',
      dataSet: '5',
    },
    {
      name: '6x6',
      dataSet: '6',
    },
  ];

  heading.className = 'app__heading';
  heading.innerHTML = 'Gem Puzzle';
  document.body.append(heading);

  gameField.className = 'gameField app__gameField';
  document.body.append(gameField);

  sizePicker.className = 'sizePicker app__sizePicker';
  document.body.append(sizePicker);

  puzzleFrames(initialArr, gameField);

  fieldPicker.forEach(elem => {
    const sizeControl = document.createElement('button');
    sizeControl.className = 'sizePicker__elem';
    sizeControl.innerHTML = elem.name;
    sizeControl.dataset.size = elem.dataSet;

    sizePicker.append(sizeControl);
  })
}

export function puzzleFramesPosition(matrix: number[][], gameWidth: number, gameSize: number) {
  const allFrames: HTMLElement[] = Array.from(document.querySelectorAll('.gameField__pazzleElem'));

  function setPosition(frame: HTMLElement, x: number, y: number) {
    const shift = 100;
    frame.style.transform = `translate3D(${x * shift}%, ${y * shift}%, 0)`;
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const value = matrix[i][j];
      const frame = allFrames[value - 1];
      setPosition(frame, j, i);
    }
  }

  allFrames.forEach(elem => {
    if (+elem.innerHTML == initialArr.sort((a, b) => a - b)[initialArr.length - 1]) {
      elem.style.display = 'none';
    }
    elem.style.width = gameWidth / gameSize + 'px';
    elem.style.height = gameWidth / gameSize + 'px';
  })
}

export default appView;