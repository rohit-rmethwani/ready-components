class Scaler{
    scaleWidth(masterWidth, percent){
        return (masterWidth * percent);
    }
    scaleHeight(masterHeight, percent){
        return (masterHeight * percent);
    }
    horizontallyCenter(main, secondary){
        console.log(main);
        console.log(secondary);
        let point = (Math.floor((main-secondary)/2));
        return point;
    }
}
let object = new Scaler();
module.exports = object;