import '../scss/main.scss';
import '../index.html';
import appView, { puzzleFramesPosition } from './view/view';
import changeSize, { generateSize, initialArr, puzzleSize } from './view/sizePicker';
import createMatrix from './view/matrixCreator';

const initialGameWidth = 350;
const initialGameSize = 3;

generateSize()

appView();

puzzleFramesPosition(createMatrix(initialArr, puzzleSize), initialGameWidth, initialGameSize);

changeSize();