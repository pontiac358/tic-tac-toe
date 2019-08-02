import * as R from 'ramda'

export const checkWin = (field, numToWin) => {
    field = R.clone(field);
    const cols = field[0].length;
    const rows = field.length;
    let match = 0;
    let lastVal = field[0][0];

    //Horizontal
    for(let i = 0; i < rows; i++ ){
        match = 0;
        let lastVal = '';
        for(let j = 0; j < cols; j++ ){
            let val = field[i][j];
            if(val.length && val === lastVal){
                match ++
            }else{
                match = 0
            }
            lastVal = val;
            if (match === numToWin - 1) {
                console.log('Horizontal');
                return val
            }
        }
    }


    //Vertical
    for(let i = 0; i < cols; i++ ){
        match = 0;
        let lastVal = '';
        for(let j = 0; j < rows; j++ ){
            let val = field[j][i];
            if(val.length && val === lastVal){
                match ++
            }else{
                match = 0
            }
            lastVal = val;
            if (match === numToWin - 1) {
                console.log('Vertical');

                return val
            }
        }
    }


    //Diagonal top left, bottom right
    for(let i = 0; i < rows; i++ ){
        for(let j = 0; j < cols; j++ ){
            let lastVal = '';
            match = 0;
            for(let k = 0; k < rows; k++ ){
                if(field[i + k]){
                    let val = field[i + k][j + k];


                    if(val && val.length && val === lastVal){
                        match ++
                    }else{
                        match = 0
                    }
                    lastVal = val;



                    if (match === numToWin - 1) {
                        console.log('Diagonal top left, bottom right');
                        return val
                    }
                }else{
                    lastVal = ''
                }
            }
        }
    }


    //Diagonal top right, bottom left
    for(let i = 0; i < rows; i++ ){
        for(let j = cols - 1; j > 0; j-- ){
            let lastVal = '';
            match = 0;
            for(let k = 0; k < rows; k++ ){
                if(field[i + k]){
                    let val = field[i + k][j - k];

                    if(val && val.length && val === lastVal){
                        match ++
                    }else{
                        match = 0
                    }
                    lastVal = val;


                    if (match === numToWin - 1) {
                        console.log('Diagonal top right, bottom left');
                        return val
                    }
                }else{
                    lastVal = ''
                }
            }
        }
    }

    return null
};

export const getField = (row, col) => {

    return matrix(row, col, '')
};

export const matrix = (m, n, val) => {
    let result = [];
    for(let i = 0; i < n; i++) {
        result.push(new Array(m).fill(val))
    }
    return result
};

export const computerStep = (field, numToWin) => {
    let cloneField = R.clone(field);
    let result;
    const cols = field[0].length;
    const rows = field.length;

    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            let tempField = R.clone(cloneField);

            if(!cloneField[i][j].length){
                tempField[i][j] = 'X';
                result = checkWin(tempField, numToWin);

                if(result){
                    return {
                        rowIndex: i,
                        colIndex: j,
                    }
                }
            }
        }
    }

    const emptyCells = getEmptyCells(cloneField);

    if(!emptyCells.length){
        return {
            rowIndex:null,
            colIndex:null,
        }
    }


    return emptyCells[randomInteger(0, emptyCells.length - 1)]
};

export const getEmptyCells = (field) => {
    let tempField = R.clone(field);
    const cols = field[0].length;
    const rows = field.length;
    let cells = [];
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if(!tempField[i][j].length){
                cells.push({
                    rowIndex: i,
                    colIndex: j,
                })
            }
        }
    }


    return cells
};

export const randomInteger = (min, max) => {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};
