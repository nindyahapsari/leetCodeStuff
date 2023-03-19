var matrixReshape = function(mat, r, c) {
    let m = mat.length
    let n = mat[0].length
    if (m * n !== r * c) return mat

    const result = new Array(r).fill().map(() => new Array(c).fill(0))
    for (let i = 0; i < m * n; i++){
        result[Math.floor(i / c)][i % c] = mat[Math.floor(i / n)][i % n] 
    }

    return result
    
};
