// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/nodecasadocodigo$1.0.0/src/app/views/clientes/lista/cliente.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"en\"><title>W3.CSS Template</title><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\"><link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Lato\"><link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Montserrat\"><link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\"><style>\nbody,h1,h2,h3,h4,h5,h6 {font-family: \"Lato\", sans-serif}\n.w3-bar,h1,button {font-family: \"Montserrat\", sans-serif}\n.fa-anchor,.fa-coffee {font-size:200px}\n</style><body>");

  component_globals_tag({}, out);

  out.w("<div class=\"w3-top\"><div class=\"w3-bar w3-red w3-card w3-left-align w3-large\"><a class=\"w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-red\" href=\"javascript:void(0);\" onclick=\"myFunction()\" title=\"Toggle Navigation Menu\"><i class=\"fa fa-bars\"></i></a><a href=\"#\" class=\"w3-bar-item w3-button w3-padding-large w3-white\">Home</a><a href=\"#\" class=\"w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white\">Link 1</a><a href=\"#\" class=\"w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white\">Link 2</a><a href=\"#\" class=\"w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white\">Link 3</a><a href=\"#\" class=\"w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white\">Link 4</a></div><div id=\"navDemo\" class=\"w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium w3-large\"><a href=\"#\" class=\"w3-bar-item w3-button w3-padding-large\">Link 1</a><a href=\"#\" class=\"w3-bar-item w3-button w3-padding-large\">Link 2</a><a href=\"#\" class=\"w3-bar-item w3-button w3-padding-large\">Link 3</a><a href=\"#\" class=\"w3-bar-item w3-button w3-padding-large\">Link 4</a></div></div><header class=\"w3-container w3-red w3-center\" style=\"padding:128px 16px\"><h1 class=\"w3-margin w3-jumbo\">START PAGE</h1><p class=\"w3-xlarge\">Template by w3.css</p><button class=\"w3-button w3-black w3-padding-large w3-large w3-margin-top\">Get Started</button></header><div class=\"w3-row-padding w3-padding-64 w3-container\"><div class=\"w3-content\"><div class=\"w3-twothird\"><h1> Listagem de Clientes</h1><table><tr><td>ID</td><td>Nome</td></tr><tr><td>1</td><td>Avatar Aang</td></tr><tr><td>2</td><td>Katara</td></tr></table></div><div class=\"w3-third w3-center\"><i class=\"fa fa-anchor w3-padding-64 w3-text-red\"></i></div></div></div><div class=\"w3-row-padding w3-light-grey w3-padding-64 w3-container\"><div class=\"w3-content\"><div class=\"w3-third w3-center\"><i class=\"fa fa-coffee w3-padding-64 w3-text-red w3-margin-right\"></i></div><div class=\"w3-twothird\"><h1>Lorem Ipsum</h1><h5 class=\"w3-padding-32\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h5><p class=\"w3-text-grey\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div></div></div><div class=\"w3-container w3-black w3-center w3-opacity w3-padding-64\"><h1 class=\"w3-margin w3-xlarge\">Quote of the day: live life</h1></div><footer class=\"w3-container w3-padding-64 w3-center w3-opacity\"> <div class=\"w3-xlarge w3-padding-32\"><i class=\"fa fa-facebook-official w3-hover-opacity\"></i><i class=\"fa fa-instagram w3-hover-opacity\"></i><i class=\"fa fa-snapchat w3-hover-opacity\"></i><i class=\"fa fa-pinterest-p w3-hover-opacity\"></i><i class=\"fa fa-twitter w3-hover-opacity\"></i><i class=\"fa fa-linkedin w3-hover-opacity\"></i></div><p>Powered by <a href=\"https://www.w3schools.com/w3css/default.asp\" target=\"_blank\">w3.css</a></p></footer><script>\n// Used to toggle the menu on small screens when clicking on the menu button\nfunction myFunction() {\n  var x = document.getElementById(\"navDemo\");\n  if (x.className.indexOf(\"w3-show\") == -1) {\n    x.className += \" w3-show\";\n  } else { \n    x.className = x.className.replace(\" w3-show\", \"\");\n  }\n}\n</script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "65");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/nodecasadocodigo$1.0.0/src/app/views/clientes/lista/cliente.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
