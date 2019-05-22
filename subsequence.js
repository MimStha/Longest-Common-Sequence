/* 
    "ASFACDB", "BAACDB"  ==> "AACDB"
    "MNASFSDAF", "MAN"  ==> "MNA"
    "BCE" , "ANMCENSCB" ==> "BCE"
    "POSADFWERSDFWGRWGVA", "EGRFGWRGVAGA"  ==> "AFWERGRGVA"
    "", "" ==> ""
    "123FASDF", "3faSD" ==> 3SD 
 */
var LCS = function() {
    var getLCS1 = (a, b) => {
        if(!a.length || !b.length) return '';
        let newS1 = [...a];
        let newS2 = [...b];
        return newS1
            .reduce((array, currEle) => {
                let foundIndex = newS2.indexOf(currEle);
                if (foundIndex > -1) {
                    array.push(currEle);
                    newS2[foundIndex] = "";
                }
                return array;
            }, [])
            .join('');
    };
    return {
        getLCS1: getLCS1,
    }
};

document.getElementById('getLCS').addEventListener('click', (e) => {
    e.preventDefault();
    let textA = document.getElementById('textA').value;
    let textB = document.getElementById('textB').value;
    let lcs = LCS();
    let t0 = performance.now();
    let lcsValue = lcs.getLCS1(textA, textB);
    let t1 = performance.now();
    document.getElementById('attachLCS').value = lcsValue;
    document.getElementById('perfTime').innerHTML = `PERFORMANCE :: ${t1 - t0} milliseconds`
});