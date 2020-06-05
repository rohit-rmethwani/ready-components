const {Rectangle, Shadow, Color, Text, Line, Ellipse, Polygon, Artboard} = require("scenegraph");
const Command = require("commands");


const WHITE = new Color("#FFFFFF");
const BLACK = new Color("#070707");
const GRAY = new Color("#F8F8F8");
const SHADOW_COLOR = new Color("#E1E1E1");
const AAA = new Color("#AAAAAA");
const DDD = new Color("#DDDDDD");
var SHADOW = new Shadow(0, 3, 6, SHADOW_COLOR, true);

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
    return ([textFieldContainer, textFieldPlaceholder]);
    testClasses();

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
    return ([buttonContainer, buttonText]);
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

function createAccordion(selection){
    var caccordionContainer = createRectangle([330, 60, true, false, WHITE, SHADOW, "Accordion Container"]);
    caccordionContainer.setAllCornerRadii(10);
    selection.editContext.addChild(caccordionContainer);
    
    var accordionText = createText(["Collapsed Accordion", BLACK, "center", 16]);
    accordionText.moveInParentCoordinates(caccordionContainer.globalBounds.x+accordionText.localBounds.width-54, caccordionContainer.globalBounds.y+accordionText.globalBounds.height+18);
    selection.editContext.addChildAfter(accordionText, caccordionContainer);
    
    var caret = createPolygon([20, 15, 3, 1, SHADOW_COLOR, "Caret"]);
    caret.rotateAround(180 - caret.rotation, caret.localCenterPoint);
    caret.moveInParentCoordinates(caret.globalBounds.x+295, 23);
    selection.editContext.addChildAfter(caret, caccordionContainer);


    //Expanded
    var eaccordionContainer = createRectangle([330, 190, true, false, WHITE, SHADOW, "Accordion Container"]);
    eaccordionContainer.setAllCornerRadii(10);
    eaccordionContainer.moveInParentCoordinates(caccordionContainer.globalBounds.x, caccordionContainer.globalBounds.y+caccordionContainer.globalBounds.height+10);
    selection.editContext.addChildAfter(eaccordionContainer, caccordionContainer);
    
    var eaccordionText = createText(["Expanded Accordion", BLACK, "center", 16]);
    eaccordionText.moveInParentCoordinates(eaccordionContainer.globalBounds.x+eaccordionText.localBounds.width-54, eaccordionContainer.globalBounds.y+eaccordionText.globalBounds.height+18);
    selection.editContext.addChildAfter(eaccordionText, eaccordionContainer);
    
    var dummyText = createText(["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor", BLACK, "left", 14]);
    dummyText.moveInParentCoordinates(eaccordionContainer.globalBounds.x+20,eaccordionContainer.globalBounds.y+78);
    dummyText.areaBox = {width:290, height:120};
    selection.editContext.addChildAfter(dummyText, eaccordionContainer);

    var ecaret = createPolygon([20, 15, 3, 1, SHADOW_COLOR, "Caret"]);
    // ecaret.rotateAround(180 - caret.rotation, caret.localCenterPoint);
    ecaret.moveInParentCoordinates(eaccordionContainer.globalBounds.x+295,eaccordionContainer.globalBounds.y+20);
    selection.editContext.addChildAfter(ecaret, eaccordionContainer);

    var eline = createLine([[eaccordionContainer.globalBounds.x, eaccordionContainer.globalBounds.y+54, eaccordionContainer.globalBounds.width, eaccordionContainer.globalBounds.y+54], true, SHADOW_COLOR]);
    selection.editContext.addChildAfter(eline, eaccordionContainer);
    
    createGroup(selection, [caccordionContainer, accordionText, caret]);
    createGroup(selection, [eaccordionContainer, eaccordionText, dummyText, ecaret, eline]);
}

function createIconBox(selection){
    var iconBox = createRectangle([45, 55, true, true, WHITE, null, "Icon box"]);
    iconBox.stroke = BLACK;
    //selection.editContext.addChild(iconBox);
    console.log(selection.editContext);

//    var iconContainer = createRectangle([25, 25, true, true, WHITE, null, "Icon Container"]);
//    iconContainer.stroke = BLACK;
//    iconContainer.moveInParentCoordinates(iconBox.globalBounds.x + 10, iconBox.globalBounds.y + 5);
//    selection.editContext.addChildAfter(iconContainer, iconBox);
//
//    var iconText = createText(["Name", BLACK, "center", 14]);
//    iconText.moveInParentCoordinates(iconBox.globalBounds.x + 22, iconBox.globalBounds.y + iconText.localBounds.height + 32); 
//    selection.editContext.addChildAfter(iconText, iconBox);
//
//    createGroup(selection, [iconBox, iconContainer, iconText]);
}

function createForm(selection){
    //Textfields
    var emailField = createTextField(selection);
    var passwordField = createTextField(selection);
    emailField["1"].text = "Enter email";
    passwordField["1"].text = "Enter password";
    emailField["1"].moveInParentCoordinates(emailField["0"].globalBounds.x-32,0);
    passwordField["0"].moveInParentCoordinates(0,emailField["0"].localBounds.height+20);
    passwordField["1"].moveInParentCoordinates(0,emailField["1"].localBounds.height+45);
    
    //Buttons
    var loginButton = createButton(selection);
    loginButton["0"].moveInParentCoordinates(passwordField["0"].globalBounds.x, passwordField["0"].globalBounds.y+60);
    loginButton["1"].moveInParentCoordinates(loginButton["0"].globalBounds.x+28, loginButton["0"].globalBounds.y+2);
    loginButton["0"].width = 155;
    loginButton["0"].height = 35;
    loginButton["1"].text = "Login";
    
    var signupButton = createButton(selection);
    signupButton["0"].moveInParentCoordinates(loginButton["0"].localBounds.width+35, loginButton["0"].globalBounds.y);
    signupButton["1"].moveInParentCoordinates(signupButton["0"].globalBounds.x+28, signupButton["0"].globalBounds.y+2);
    signupButton["0"].width = 155;
    signupButton["0"].height = 35;
    signupButton["1"].text = "Sign In";    
}

function createSidebar(selection){
    var opaqueContainer = createRectangle([360, 640, true, false, WHITE, null, "Opaque Container"]);
    opaqueContainer.opacity = 0.4;
    selection.editContext.addChild(opaqueContainer);
    
    var sidebarContainer = createRectangle([230, 640, true, false, WHITE, null, "Sidebar Container"]);
    selection.editContext.addChildAfter(sidebarContainer, opaqueContainer);
    
    var profileContainer = createRectangle([230, 140, true, true, WHITE, null, "Profile Container"]);
    profileContainer.stroke = BLACK;
    selection.editContext.addChildAfter(profileContainer, sidebarContainer);
    
    var firstOption = createRectangle([230, 50, true, true, WHITE, null, "FirstOption"]);
    firstOption.stroke = BLACK;
    firstOption.moveInParentCoordinates(0, profileContainer.localBounds.height);
    selection.editContext.addChildAfter(firstOption, profileContainer);
    
    var i = 0, ycordinate = 0;
    for(i=0; i<9; i++){
        var optionContainer = createRectangle([230, 50, true, true, WHITE, null, "Option"]);
        optionContainer.stroke = BLACK;
        selection.editContext.addChildAfter(optionContainer, firstOption);
        ycordinate = ycordinate + optionContainer.localBounds.height;
        if(i==0){
            ycordinate = ycordinate + 140;
        }
        optionContainer.moveInParentCoordinates(0,ycordinate);
    }
    createGroup(selection, [opaqueContainer, sidebarContainer, profileContainer, firstOption]);
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
        return newEllipse;
    }
    else{
        return null;
    }
}

function createPolygon(args){
    if(args.length == 6){
        var polygon = new Polygon();
        polygon.width = args[0];
        polygon.height = args[1];
        polygon.cornerCount = args[2];
        polygon.setAllCornerRadii(args[3]);
        polygon.fill = args[4];
        polygon.name = args[5];
        return polygon;
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
        createFooter,
        createAccordion,
        createIconBox,
        createForm,
        createSidebar
    }
}