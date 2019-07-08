const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let x in nums){
    if(x == 5){
        break; //sai do for
    }
    console.log(`${x} é ${nums[x]}`);
}

for(let x in nums){
    if(x == 5){
        continue; //sai do for
    }
    console.log(`${x} é ${nums[x]}`);
}

externo: for(let a in nums){
    for( b in nums){
        if(a == 2 && b ==3) break externo
        console.log(`Par = ${a} ${b}`);
    }
}