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
    
    var Artboard;
    
    var textFieldContainer = createRectangle([330, 45, true, true, WHITE, null, "Text Field Container"]);
    textFieldContainer.moveInParentCoordinates(15, 345);
    textFieldContainer.stroke = AAA;
    textFieldContainer.setAllCornerRadii(10);

    var textFieldPlaceholder = createText(["Enter Something..", AAA, "center", 18]);
    textFieldPlaceholder.moveInParentCoordinates(textFieldContainer.globalBounds.x + 80, textFieldContainer.globalBounds.y + 29);
    
    if(selection.hasArtboards){
        Artboard = selection.items[0];
        Artboard.addChild(textFieldContainer);
        Artboard.addChildAfter(textFieldPlaceholder, textFieldContainer);
    }
    else{
        selection.editContext.addChild(textFieldContainer);
        selection.editContext.addChildAfter(textFieldPlaceholder, textFieldContainer);
    }
    
    createGroup(selection, [textFieldContainer, textFieldPlaceholder]);
    return ([textFieldContainer, textFieldPlaceholder]);

}

function createToggleButton(selection){
    
    var Artboard;
    
    var toggleButtonSlider = createRectangle([30, 10, true, false, AAA, null, "Toggle Button Slider"]);
    toggleButtonSlider.moveInParentCoordinates(135, 421);
    toggleButtonSlider.setAllCornerRadii(10);

    var toggleButtonEllipse = createEllipse([10, 10, true, false, DDD, null, "Toggle Button Ellipse"]);
    toggleButtonEllipse.moveInParentCoordinates(150, 416);
    
    if(selection.hasArtboards){
        Artboard = selection.items[0];
        Artboard.addChild(toggleButtonSlider);
        Artboard.addChildAfter(toggleButtonEllipse, toggleButtonSlider);   
    }
    else{
        selection.editContext.addChild(toggleButtonSlider);
        selection.editContext.addChildAfter(toggleButtonEllipse, toggleButtonSlider);   
    }
    createGroup(selection, [toggleButtonEllipse, toggleButtonSlider]);
}

function createButton(selection){
    var Artboard;
    
    var buttonContainer = createRectangle([100, 30, true, false, WHITE, SHADOW, "Button"]);
    buttonContainer.setAllCornerRadii(10);

    var buttonText = createText(["Button", BLACK, "center", 13]);
    buttonText.moveInParentCoordinates(buttonContainer.globalBounds.x + 50, buttonContainer.globalBounds.y + 20);

    if(selection.hasArtboards){
        Artboard = selection.items[0];
        Artboard.addChild(buttonContainer);
        Artboard.addChildAfter(buttonText, buttonContainer);
    }
    else{
        selection.editContext.addChild(buttonContainer);
        selection.editContext.addChildAfter(buttonText, buttonContainer);
    }
    
    createGroup(selection, [buttonContainer, buttonText]);
    return ([buttonContainer, buttonText]);
}

function createHeader(selection){
    var Artboard;
    var headerContainer = createRectangle([360, 60, true, false, GRAY, SHADOW, "Header"]);
    
    if(selection.hasArtboards){
        Artboard = selection.items[0];
        Artboard.addChild(headerContainer);
    }
    else{
        selection.editContext.addChild(headerContainer);
    }
}

function createListItem(selection){
    
    var Artboard;
    
    var notificationCardContainer = createRectangle([330, 75, true, false, WHITE, SHADOW, "Notification Card"]);
    notificationCardContainer.moveInParentCoordinates(15, 85);
    notificationCardContainer.setAllCornerRadii(10);

    var notificationText = createText(["This is a notification card", BLACK, "center", 18]);
    notificationText.moveInParentCoordinates(notificationCardContainer.globalBounds.x + 165, notificationCardContainer.globalBounds.y + 44);
    
    if(selection.hasArtboards){
        Artboard = selection.items[0];
        Artboard.addChild(notificationCardContainer);
        Artboard.addChild(notificationText);
    }
    else{
        selection.editContext.addChild(notificationCardContainer);
        selection.editContext.addChild(notificationText);
    }
    
    createGroup(selection, [notificationCardContainer, notificationText]);
}

function createListCard(selection){
    
    var Artboard;
    
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

    if(selection.hasArtboards){
        Artboard = selection.items[0];
        Artboard.addChild(itemCard);
        Artboard.addChildAfter(cardHeading, itemCard);
        Artboard.addChildAfter(cardDescription, itemCard);
        Artboard.addChildAfter(buttonText, itemCard);
        Artboard.addChildAfter(imageContainer, itemCard);
        Artboard.addChildAfter(buttonContainer, itemCard);

    }
    else{
        selection.editContext.addChild(itemCard);
        selection.editContext.addChildAfter(cardHeading, itemCard);
        selection.editContext.addChildAfter(cardDescription, itemCard);
        selection.editContext.addChildAfter(buttonText, itemCard);
        selection.editContext.addChildAfter(imageContainer, itemCard);
        selection.editContext.addChildAfter(buttonContainer, itemCard);
    }
    
    createGroup(selection, [itemCard, imageContainer, buttonContainer, cardHeading, cardDescription, buttonText]);
    //Card Item.
}

function createFooter(selection){
    
    var Artboard;
    
    var footerContainer = createRectangle([360, 60, true, false, WHITE, SHADOW, "Footer Container"]);
    
    var firstOption = createRectangle([120, 60, true, false, GRAY, null, "Option one"]);
    firstOption.moveInParentCoordinates(footerContainer.globalBounds.x, footerContainer.globalBounds.y);

    var secondOption = createRectangle([120, 60, true, false, AAA, null, "Option two"]);
    secondOption.moveInParentCoordinates(footerContainer.globalBounds.x + secondOption.globalBounds.width, footerContainer.globalBounds.y);

    var thirdOption = createRectangle([120, 60, true, false, DDD, null, "Option three"]);
    thirdOption.moveInParentCoordinates(secondOption.globalBounds.x + thirdOption.globalBounds.width, footerContainer.globalBounds.y);

    if(selection.hasArtboards){
        Artboard = selection.items[0];
        Artboard.addChild(footerContainer);
        Artboard.addChildAfter(firstOption, footerContainer);
        Artboard.addChildAfter(secondOption, footerContainer);
        Artboard.addChildAfter(thirdOption, footerContainer);

    }else{
        selection.editContext.addChild(footerContainer);
        selection.editContext.addChildAfter(firstOption, footerContainer);
        selection.editContext.addChildAfter(secondOption, footerContainer);
        selection.editContext.addChildAfter(thirdOption, footerContainer);
    }

    createGroup(selection,[footerContainer, firstOption, secondOption, thirdOption]);
}

function createAccordion(selection){
    
    var Artboard;
    
    var caccordionContainer = createRectangle([330, 60, true, false, WHITE, SHADOW, "Accordion Container"]);
    caccordionContainer.setAllCornerRadii(10);
    
    var accordionText = createText(["Collapsed Accordion", BLACK, "center", 16]);
    accordionText.moveInParentCoordinates(caccordionContainer.globalBounds.x+accordionText.localBounds.width-54, caccordionContainer.globalBounds.y+accordionText.globalBounds.height+18);
    
    var caret = createPolygon([20, 15, 3, 1, SHADOW_COLOR, "Caret"]);
    caret.rotateAround(180 - caret.rotation, caret.localCenterPoint);
    caret.moveInParentCoordinates(caret.globalBounds.x+295, 23);

    //Expanded
    var eaccordionContainer = createRectangle([330, 190, true, false, WHITE, SHADOW, "Accordion Container"]);
    eaccordionContainer.setAllCornerRadii(10);
    eaccordionContainer.moveInParentCoordinates(caccordionContainer.globalBounds.x, caccordionContainer.globalBounds.y+caccordionContainer.globalBounds.height+10);
    
    var eaccordionText = createText(["Expanded Accordion", BLACK, "center", 16]);
    eaccordionText.moveInParentCoordinates(eaccordionContainer.globalBounds.x+eaccordionText.localBounds.width-54, eaccordionContainer.globalBounds.y+eaccordionText.globalBounds.height+18);
    
    var dummyText = createText(["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor", BLACK, "left", 14]);
    dummyText.moveInParentCoordinates(eaccordionContainer.globalBounds.x+20,eaccordionContainer.globalBounds.y+78);
    dummyText.areaBox = {width:290, height:120};

    var ecaret = createPolygon([20, 15, 3, 1, SHADOW_COLOR, "Caret"]);
    // ecaret.rotateAround(180 - caret.rotation, caret.localCenterPoint);
    ecaret.moveInParentCoordinates(eaccordionContainer.globalBounds.x+295,eaccordionContainer.globalBounds.y+20);

    var eline = createLine([[eaccordionContainer.globalBounds.x, eaccordionContainer.globalBounds.y+54, eaccordionContainer.globalBounds.width, eaccordionContainer.globalBounds.y+54], true, SHADOW_COLOR]);
    
    if(selection.hasArtboards){
        Artboard = selection.items[0];
        Artboard.addChild(caccordionContainer);
        Artboard.addChildAfter(accordionText, caccordionContainer);
        Artboard.addChildAfter(caret, caccordionContainer);
        Artboard.addChildAfter(eaccordionContainer, caccordionContainer);
        Artboard.addChildAfter(eaccordionText, eaccordionContainer);
        Artboard.addChildAfter(dummyText, eaccordionContainer);
        Artboard.addChildAfter(ecaret, eaccordionContainer);
        Artboard.addChildAfter(eline, eaccordionContainer);
    }
    else{
        selection.editContext.addChild(caccordionContainer);
        selection.editContext.addChildAfter(accordionText, caccordionContainer);
        selection.editContext.addChildAfter(caret, caccordionContainer);
        selection.editContext.addChildAfter(eaccordionContainer, caccordionContainer);
        selection.editContext.addChildAfter(eaccordionText, eaccordionContainer);
        selection.editContext.addChildAfter(dummyText, eaccordionContainer);
        selection.editContext.addChildAfter(ecaret, eaccordionContainer);
        selection.editContext.addChildAfter(eline, eaccordionContainer);
    }
    
    createGroup(selection, [caccordionContainer, accordionText, caret]);
    createGroup(selection, [eaccordionContainer, eaccordionText, dummyText, ecaret, eline]);
}

function createIconBox(selection){
    var Artboard;
    
    var iconBox = createRectangle([45, 55, true, true, WHITE, null, "Icon box"]);
    iconBox.stroke = BLACK;
    var iconContainer = createRectangle([25, 25, true, true, WHITE, null, "Icon Container"]);
    iconContainer.stroke = BLACK;
    iconContainer.moveInParentCoordinates(iconBox.localBounds.x + 10, iconBox.localBounds.y + 5);
    
    var iconText = createText(["Name", BLACK, "center", 14]);
    iconText.moveInParentCoordinates(iconBox.localBounds.x + 22, iconBox.localBounds.y + iconText.localBounds.height + 32); 

    if(selection.hasArtboards){
        Artboard = selection.items[0];
        Artboard.addChild(iconBox);
        Artboard.addChildAfter(iconContainer, iconBox);
        Artboard.addChildAfter(iconText, iconBox);
    }
    else{
        selection.editContext.addChild(iconBox);
        selection.editContext.addChildAfter(iconContainer, iconBox);
        selection.editContext.addChildAfter(iconText, iconBox);
    }
    
    createGroup(selection, [iconBox, iconContainer, iconText]);
}

function createForm(selection){
    //Textfields
    
    var Artboard;
    
    var emailField = createRectangle([330, 45, true, true, WHITE, null, "Text Field Container"]);
    emailField.moveInParentCoordinates(15, 345);
    emailField.stroke = AAA;
    emailField.setAllCornerRadii(10);

    var emailFieldPlaceholder = createText(["Enter email", AAA, "center", 18]);
    emailFieldPlaceholder.moveInParentCoordinates(emailField.globalBounds.x + 63, emailField.globalBounds.y + 29);
    
    var passwordField = createRectangle([330, 45, true, true, WHITE, null, "Text Field Container"]);
    passwordField.moveInParentCoordinates(15, 345);
    passwordField.stroke = AAA;
    passwordField.setAllCornerRadii(10);
    passwordField.moveInParentCoordinates(0,emailField.localBounds.height+20);

    var passwordPlaceholder = createText(["Enter password", AAA, "center", 18]);
    passwordPlaceholder.moveInParentCoordinates(passwordField.globalBounds.x + 80, passwordField.globalBounds.y + 29);
    
    //Buttons
    
    //LOGIN
    var loginButton= createRectangle([155, 35, true, false, WHITE, SHADOW, "Button"]);
    loginButton.setAllCornerRadii(10);
    loginButton.moveInParentCoordinates(passwordField.globalBounds.x, passwordField.globalBounds.y+60);
    
    var loginButtonText = createText(["Login", BLACK, "center", 16]);
    loginButtonText.moveInParentCoordinates(loginButton.globalBounds.x + 78, loginButton.globalBounds.y + 23);
    //LOGIN
    
    //SIGN UP
    var signupButton= createRectangle([155, 35, true, false, WHITE, SHADOW, "Button"]);
    signupButton.setAllCornerRadii(10);
    signupButton.moveInParentCoordinates(loginButton.localBounds.width+35, loginButton.globalBounds.y);
    
    var signupButtonText = createText(["Sign Up", BLACK, "center", 16]);
    signupButtonText.moveInParentCoordinates(signupButton.globalBounds.x + 78, signupButton.globalBounds.y + 23);
    //SIGN UP
   
    
    if(selection.hasArtboards){
        Artboard = selection.items[0];
        Artboard.addChild(emailField);
        Artboard.addChildAfter(emailFieldPlaceholder, emailField);
        Artboard.addChild(passwordField);
        Artboard.addChildAfter(passwordPlaceholder, passwordField);
        
        //Buttons
        Artboard.addChildAfter(loginButton, passwordField);
        Artboard.addChildAfter(loginButtonText, loginButton);
        
        Artboard.addChildAfter(signupButton, loginButton);
        Artboard.addChildAfter(signupButtonText, signupButton);
    }
    else{
        selection.editContext.addChild(emailField);
        selection.editContext.addChildAfter(emailFieldPlaceholder, emailField);
        selection.editContext.addChild(passwordField);
        selection.editContext.addChildAfter(passwordPlaceholder, passwordField);
        
        //Buttons
        selection.editContext.addChildAfter(loginButton, passwordField);
        selection.editContext.addChildAfter(loginButtonText, loginButton);
        
        selection.editContext.addChildAfter(signupButton, loginButton);
        selection.editContext.addChildAfter(signupButtonText, signupButton);
        
    }
    
    createGroup(selection, [emailField, emailFieldPlaceholder]);
    createGroup(selection, [passwordField, passwordPlaceholder]);
    createGroup(selection, [loginButton, loginButtonText]);
    createGroup(selection, [signupButton, signupButtonText]);
}

function createSidebar(selection){
    
    var Artboard;
    
    var opaqueContainer = createRectangle([360, 640, true, false, WHITE, null, "Opaque Container"]);
    opaqueContainer.opacity = 0.4;
    
    var sidebarContainer = createRectangle([230, 640, true, false, WHITE, null, "Sidebar Container"]);
    
    var profileContainer = createRectangle([230, 140, true, true, WHITE, null, "Profile Container"]);
    profileContainer.stroke = BLACK;
    
    var firstOption = createRectangle([230, 50, true, true, WHITE, null, "FirstOption"]);
    firstOption.stroke = BLACK;
    firstOption.moveInParentCoordinates(0, profileContainer.localBounds.height);
    
    if(selection.hasArtboards){
        Artboard = selection.items[0];
        Artboard.addChild(opaqueContainer);
        Artboard.addChildAfter(sidebarContainer, opaqueContainer);
        Artboard.addChildAfter(profileContainer, sidebarContainer);
        Artboard.addChildAfter(firstOption, profileContainer);
        var i = 0, ycordinate = 0;
        for(i=0; i<9; i++){
            var optionContainer = createRectangle([230, 50, true, true, WHITE, null, "Option"]);
            optionContainer.stroke = BLACK;
            Artboard.addChildAfter(optionContainer, firstOption);
            ycordinate = ycordinate + optionContainer.localBounds.height;
            if(i==0){
                ycordinate = ycordinate + 140;
            }
            optionContainer.moveInParentCoordinates(0,ycordinate);
        }
    }
    else{
        Artboard = selection.items[0];
        selection.editContext.addChild(opaqueContainer);
        selection.editContext.addChildAfter(sidebarContainer, opaqueContainer);
        selection.editContext.addChildAfter(profileContainer, sidebarContainer);
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