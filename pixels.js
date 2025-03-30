const imageData = [

    { row: 0, col: 0, value: 120 }, { row: 0, col: 1, value: 200 }, { row: 0, col: 2, value: 180 }, { row: 0, col: 3, value: 75 }, { row: 0, col: 4, value: 90 },
    
    { row: 1, col: 0, value: 60 }, { row: 1, col: 1, value: 250 }, { row: 1, col: 2, value: 140 }, { row: 1, col: 3, value: 30 }, { row: 1, col: 4, value: 110 },
    
    { row: 2, col: 0, value: 200 }, { row: 2, col: 1, value: 130 }, { row: 2, col: 2, value: 155 }, { row: 2, col: 3, value: 180 }, { row: 2, col: 4, value: 90 },
    
    { row: 3, col: 0, value: 45 }, { row: 3, col: 1, value: 210 }, { row: 3, col: 2, value: 120 }, { row: 3, col: 3, value: 160 }, { row: 3, col: 4, value: 70 },
    
    { row: 4, col: 0, value: 190 }, { row: 4, col: 1, value: 100 }, { row: 4, col: 2, value: 85 }, { row: 4, col: 3, value: 240 }, { row: 4, col: 4, value: 50 },
    
    ];
    let sum=0,black=0,white=0
    
    for(let i=0;i<imageData.length;i++){
            if(imageData[i].value>0 && imageData[i].value<=150){
              black+=imageData[i].value
            }
            else if(imageData[i].value>150){
                black+=150
                white+=imageData[i].value-150
            }
    }
    sum=(black*1)+(white*0.5)
    console.log(`Total Number of Black Pixels = ${black} pixels`)
    console.log(`Total Number of White Pixels = ${white} pixels` )
    console.log(`Total Printing Cost = Rs${sum}`)