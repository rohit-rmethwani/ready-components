//API Imports
const Scenegraph = require('scenegraph');
const Command = require('commands');

//Custom Imports
const object = require('./dialogs/dialog');
const Components = require('./components/components');

//Globals
var dialog, form;

async function startPlugin(selection, documentRoot) {
    let art = new Array();
    documentRoot.children.forEach(node => {                                          
        if(node instanceof Scenegraph.Artboard){
            if(node.width <= 414 && node.width >= 320 ){
                art.push(node);
            }
        }
    });
    if(!dialog){
        //Creating the dialog.
        dialog = document.createElement("dialog");
        document.body.appendChild(dialog);
        dialog.innerHTML = object.showIntro();

        // //Creating the container for the form.
        // var div = document.createElement("div");
        // div.innerHTML = object.header();
        // dialog.appendChild(div);
        
        //Adding artboard names to select field.
        // var option;     
        // var i=0;
        // for(i=0;i<art.length;i++){
        //     option += `<option>`+art[i].name+`</option>`;
        // }
        // i=0;
        // document.getElementById("options").innerHTML = option;

        //Creating the form.
        // form = document.createElement("div");
        // div.style.width = 700;
        // form.style.height = 400;
        // form.style.overflow = "scroll";
        // dialog.appendChild(form);
        // form.innerHTML = object.showIntro();

        // //creating extra div for toastr
        // let toastr = document.createElement("div");
        // toastr.width = 100;
        // form.appendChild(toastr);
    }
    var option;     
        var i=0;
        for(i=0;i<art.length;i++){
            option += `<option>`+art[i].name+`</option>`;
        }
        i=0;
        document.getElementById("options").innerHTML = option;
        /****EVENT HANDLERS****/
        document.getElementById("close-btn").addEventListener("click", () => {  
            dialog.close();
        });

        document.getElementById("textfield").addEventListener("click", (e) => {
            try{
                let index = getSelectedIndex();
                let tf = Components.createTextField(selection, art[index]);
                
                toastr.innerHTML = object.toastr("success","Component added successfully!");
                hideComponent("snackbar");
            }
            catch(e){
                // toastr.innerHTML = object.toastr("success","Component added successfully!");
                // hideComponent("snackbar");
            }
        });

        document.getElementById("toggle-button").addEventListener("click", (e) => {
            try{
                let index = getSelectedIndex();
                let tb = Components.createToggleButton(selection, art[index]);
            }
            catch(e){
                console.log("Something went wrong!"+e);
            }
        });

        document.getElementById("button").addEventListener("click", (e) => {
            try{
                let index = getSelectedIndex();
                let btn = Components.createButton(selection, art[index]);
            }
            catch(e){
                console.log("Something went wrong!" + e);
            }
        });

        document.getElementById("navigation-header").addEventListener("click", (e) => {
            try{
                let index = getSelectedIndex();
                let header = Components.createHeader(art[index]);
            }
            catch(e){
                console.log("Something went wrong!" + e);
            }
        });

        document.getElementById("list-card").addEventListener("click", (e) => {
            try{
                let index = getSelectedIndex();
                let ncard = Components.createListItem(selection, art[index]);
            }
            catch(e){
                console.log("Something went wrong!" + e);
            }
        });

        document.getElementById("list-image-card").addEventListener("click", (e) => {
            try{
                let index = getSelectedIndex();
                let icard = Components.createListCard(selection, art[index]);
            }
            catch(e){
                console.log("Something went wrong!" + e);
            }
        });

        document.getElementById("footer").addEventListener("click", (e) => {
            try{
                let index = getSelectedIndex();
                let footer = Components.createFooter(selection, art[index]);
            }
            catch(e){
                console.log("Something went wrong!" + e);
            }
        });

        document.getElementById("accordion").addEventListener("click", (e) => {
            try{
                let index = getSelectedIndex();
                Components.createAccordion(selection,art[index]);
            }
            catch(e){
                console.log("Something went wrong!" + e);
            }
        });

        document.getElementById("icon-box").addEventListener("click", (e) => {
            try{
                let index = getSelectedIndex();
                Components.createIconBox(selection,art[index]);
            }
            catch(e){
                console.log("Something went wrong!" + e);
            }
        });

        document.getElementById("login-form").addEventListener("click", (e) => {
            try{
                let index = getSelectedIndex();
                Components.createForm(selection,art[index]);
            }
            catch(e){
                console.log("Something went wrong!" + e);
            }
        });

        document.getElementById("sidebar").addEventListener("click", (e) => {
            try{
                let index = getSelectedIndex();
                Components.createSidebar(selection,art[index]);
            }
            catch(e){
                console.log("Something went wrong!" + e);
            }
        });

    
    await dialog.showModal();
}


function hideComponent(id){
    setTimeout(function(){ document.getElementById(id).style.display = "none"; }, 3000);
}

function getSelectedIndex(){
    return document.getElementById("options").selectedIndex;
}

module.exports = {
    commands: {
        startPlugin
    }
};
//setTimeout(function(){ document.getElementById("snackbar").style.display = "none"; }, 3000);