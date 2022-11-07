import '../scss/main.scss';
import '../index.html';
import appView, { puzzleFramesPosition } from './view/view';
import changeSize, { generateSize, initialArr, puzzleSize } from './view/sizePicker';
import createMatrix from './view/matrixCreator';
import gameControls from './view/gameControls';

const initialGameWidth = 350;

generateSize()

appView();

gameControls();

puzzleFramesPosition(createMatrix(initialArr, puzzleSize), initialGameWidth, puzzleSize);

changeSize();