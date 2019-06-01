const {Rectangle, Shadow, Color, Text, Line, Ellipse} = require("scenegraph");
const Command = require("commands");

const WHITE = new Color("#FFFFFF");
const BLACK = new Color("#070707");
const GRAY = new Color("#F8F8F8");
const SHADOW_COLOR = new Color("#E1E1E1");
const AAA = new Color("#AAAAAA");
const DDD = new Color("#DDDDDD");
const SHADOW = new Shadow(0, 3, 6, SHADOW_COLOR, true);

function createTextField(selection){
    //Text Field.
    var textFieldContainer = createRectangle([330, 45, true, true, WHITE, null, "Text Field Container"]);
    textFieldContainer.moveInParentCoordinates(15, 345);
    textFieldContainer.stroke = SHADOW_COLOR;
    textFieldContainer.setAllCornerRadii(10);

    var textFieldPlaceholder = createText(["Enter Something..", SHADOW_COLOR, "center", 18]);
    textFieldPlaceholder.moveInParentCoordinates(textFieldContainer.globalBounds.x + 80, textFieldContainer.globalBounds.y + 29);

    selection.editContext.addChild(textFieldContainer);
    selection.editContext.addChildAfter(textFieldPlaceholder, textFieldContainer);

    createGroup(selection, [textFieldContainer, textFieldPlaceholder]);
    //Text Field.

}

function createToggleButton(selection){
    //Toggle Button.
    var toggleButtonSlider = createRectangle([30, 10, true, false, AAA, null, "Toggle Button Slider"]);
    toggleButtonSlider.moveInParentCoordinates(135, 421);
    toggleButtonSlider.setAllCornerRadii(10);

    var toggleButtonEllipse = createEllipse([10, 10, true, false, DDD, null, "Toggle Button Ellipse"]);
    toggleButtonEllipse.moveInParentCoordinates(150, 416);
    
    selection.editContext.addChild(toggleButtonSlider);
    selection.editContext.addChildAfter(toggleButtonEllipse, toggleButtonSlider);

    createGroup(selection, [toggleButtonEllipse, toggleButtonSlider]);
    //Toggle Button.
}

function createButton(selection){
    
    //Button.
    var buttonContainer = createRectangle([100, 30, true, false, WHITE, SHADOW, "Button"]);
    buttonContainer.setAllCornerRadii(10);

    var buttonText = createText(["Button", BLACK, "center", 13]);
    buttonText.moveInParentCoordinates(buttonContainer.globalBounds.x + 50, buttonContainer.globalBounds.y + 20);

    selection.editContext.addChild(buttonContainer);
    selection.editContext.addChildAfter(buttonText, buttonContainer);
    
    createGroup(selection, [buttonContainer, buttonText]);
    //Button.
}

function createHeader(selection){
    //Header Container.
    var headerContainer = createRectangle([360, 60, true, false, GRAY, SHADOW, "Header"]);
    selection.editContext.addChild(headerContainer);
    //Header Container.
}

function createListItem(selection){
    //Notification Card.
    var notificationCardContainer = createRectangle([330, 75, true, false, WHITE, SHADOW, "Notification Card"]);
    notificationCardContainer.moveInParentCoordinates(15, 85);
    notificationCardContainer.setAllCornerRadii(10);
    selection.editContext.addChild(notificationCardContainer);

    var notificationText = createText(["This is a notification card", BLACK, "center", 18]);
    notificationText.moveInParentCoordinates(notificationCardContainer.globalBounds.x + 165, notificationCardContainer.globalBounds.y + 44);
    selection.editContext.addChild(notificationText);

    createGroup(selection, [notificationCardContainer, notificationText]);
    //Notification Card.
}

function createListCard(selection){
    //Card Item.
    var itemCard = createRectangle([330, 130, true, false, WHITE, SHADOW, "Card Item"]);
    itemCard.setAllCornerRadii(10);
    
    var imageContainer = createRectangle([115,130, true, false, GRAY, null, "Image Container"]);
    imageContainer.setAllCornerRadii(10);

    var buttonContainer = createRectangle([100, 30, true, false, WHITE, SHADOW, "Button"]);
    buttonContainer.setAllCornerRadii(10);
    buttonContainer.moveInParentCoordinates(itemCard.globalBounds.x + 210, itemCard.globalBounds.y + 80);

    var cardHeading = createText(["CARD HEADING", BLACK, "center", 14]);
    cardHeading.moveInParentCoordinates(itemCard.globalBounds.x + 179, itemCard.globalBounds.y + 20);

    var cardDescription = createText(["This is some text.", BLACK, "center", 11]);
    cardDescription.moveInParentCoordinates(itemCard.globalBounds.x + 169, itemCard.globalBounds.y + 40);

    var buttonText = createText(["Button", BLACK, "center", 13]);
    buttonText.moveInParentCoordinates(itemCard.globalBounds.x + 260, itemCard.globalBounds.y + 100);

    selection.editContext.addChild(itemCard);
    selection.editContext.addChildAfter(cardHeading, itemCard);
    selection.editContext.addChildAfter(cardDescription, itemCard);
    selection.editContext.addChildAfter(buttonText, itemCard);
    selection.editContext.addChildAfter(imageContainer, itemCard);
    selection.editContext.addChildAfter(buttonContainer, itemCard);

    createGroup(selection, [itemCard, imageContainer, buttonContainer, cardHeading, cardDescription, buttonText]);
    //Card Item.
}

function createFooter(selection){
    var footerContainer = createRectangle([360, 60, true, false, WHITE, SHADOW, "Footer Container"]);
    
    var firstOption = createRectangle([120, 60, true, false, GRAY, null, "Option one"]);
    firstOption.moveInParentCoordinates(footerContainer.globalBounds.x, footerContainer.globalBounds.y);

    var secondOption = createRectangle([120, 60, true, false, AAA, null, "Option two"]);
    secondOption.moveInParentCoordinates(footerContainer.globalBounds.x + secondOption.globalBounds.width, footerContainer.globalBounds.y);

    var thirdOption = createRectangle([120, 60, true, false, DDD, null, "Option three"]);
    thirdOption.moveInParentCoordinates(secondOption.globalBounds.x + thirdOption.globalBounds.width, footerContainer.globalBounds.y);

    selection.editContext.addChild(footerContainer);
    selection.editContext.addChildAfter(firstOption, footerContainer);
    selection.editContext.addChildAfter(secondOption, footerContainer);
    selection.editContext.addChildAfter(thirdOption, footerContainer);

    createGroup(selection,[footerContainer, firstOption, secondOption, thirdOption]);
}

function createRectangle(args){
    if(args.length == 7){    
        let newRect = new Rectangle();
        newRect.width = args[0];
        newRect.height = args[1];
        newRect.fillEnabled = args[2];
        newRect.strokeEnabled = args[3];
        newRect.fill = args[4];
        newRect.shadow = args[5];
        newRect.name = args[6];
        return newRect;
    }
    else{
        return null;
    }
}

function createText(args){
    if(args.length == 4){
        var text = new Text();
        text.text = args[0];
        text.fill = args[1];
        text.textAlign = args[2];
        text.fontSize = args[3];
        return text;
    }
    else{
        return null;
    }
}

function createLine(args){
    if(args.length == 3){
        var line = new Line();
        var points = args[0];
        line.setStartEnd(points[0], points[1], points[2], points[3]);
        line.strokeEnabled = args[1];
        line.stroke = args[2];
        return line;
    }
    else{
        return null;
    }
}

function createEllipse(args){
    if(args.length == 7){
        let newEllipse = new Ellipse();
        newEllipse.radiusX = args[0];
        newEllipse.radiusY = args[1];
        newEllipse.fillEnabled = args[2];
        newEllipse.strokeEnabled = args[3];
        newEllipse.fill = args[4];
        newEllipse.shadow = args[5];
        newEllipse.name = args[6];
        console.log(newEllipse);
        return newEllipse;
    }
    else{
        return null;
    }
}

function horizontallyCenter(args){
    var primaryWidth = 0;
    var secondaryWidth = 0;
    if(args.length == 2){
        primaryWidth = args[0].width;
        secondaryWidth = args[1].width;
        return ((primaryWidth-secondaryWidth)/2);
    }
    else{
        return null;
    }
}

function verticallyCenter(args){
    var primaryHeight = 0;
    var secondaryHeight = 0;
    if(args.length == 2){
        primaryHeight = args[0].height;
        secondaryHeight = args[1].height;
        return ((primaryHeight-secondaryHeight)/2);
    }
    else{
        return null;
    }
}

function createGroup(selection, args){
    selection.items = args;
    Command.group();
    selection.items = [];
}

module.exports = {
    commands: {
        createListItem,
        createListCard,
        createHeader,
        createButton,
        createTextField,
        createToggleButton,
        createFooter
    }
}