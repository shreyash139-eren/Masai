let n=5
for(let i=1;i<=n-1;i++){
    let bag=""
    for(let j=1;j<=n-i;j++){
        bag+=" "
    }
    for(let j=1;j<=(2*i-1);j++){
        bag+="*"
    }
    console.log(bag)
}
let bag=""
for(let i=1;i<=n-1;i++){
bag+=" "
}
console.log(bag+"|")