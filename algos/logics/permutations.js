function permutations(processedStr, unpStr) {
    
    if (unpStr.length==0) {
        console.log(processedStr);
        return;
    }

    // get first character
    let ch = unpStr.charAt(0);

    for (let i = 0; i < processedStr.length; i++) {
        let f = processedStr.substring(0, i);
        let s=processedStr.substring(i,processedStr.length);
        permutations(f+ch+s,unpStr.substring(1))
    }
}

permutations(" ","abc")