let stars = "";
for (let i = 1; i <= 6; i++) {
    stars += "* ";
    console.log(stars);
}
// Outer loop for each row
for (let i = 1; i <= 6; i++) {
    let row = "";
    
    // Inner loop to add the correct amount of stars for that row
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    
    console.log(row);
}