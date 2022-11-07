import createMatrix from './matrixCreator';
import { generateSize, initialArr, puzzleSize } from './sizePicker';
import { puzzleFramesPosition } from './view';

function gameControls() {
  const controlsList = document.createElement('div');
  const controls = [
    {
      name: 'Shuffle',
      id: 'Shuffle'
    },
  ];

  controlsList.className = 'controlsList app__controlsList';
  document.body.append(controlsList);

  controls.forEach(control => {
    const controlBtn = document.createElement('button');
    controlBtn.className = 'controlsList__controlBtn';
    controlBtn.innerHTML = control.name;
    controlBtn.id = control.id;
    controlsList.append(controlBtn);
  })

  const shuffle = document.querySelector('#Shuffle');
  shuffle?.addEventListener('click', () => {
    generateSize(puzzleSize);
    puzzleFramesPosition(createMatrix(initialArr, puzzleSize), 350, puzzleSize);
  })
}



export default gameControls;