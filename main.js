let array = [5, 50, 7, 34, 32, 1, 20, 18];

let media = array.reduce( (acc, el) => acc + el ) / array.length;

console.log(media);

let elementLow = array.filter( el => el < media);

let upLength = array.length - elementLow.length;

console.log(`Media valori = ${media}, elementi minori della media= ${elementLow}, inoltre ci sono ${elementLow.length} elementi inferiori alla media e ${upLength} valori superiori`);


