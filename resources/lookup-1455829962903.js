(function(window, undefined) {
  var dictionary = {
    "ddcdd4fb-2800-42ba-ba87-13360f3e7d15": "PersonalInfo2",
    "ff79bd27-ffac-4c12-bdef-da3208aa7713": "MyDietScreen",
    "56806bfb-1b8f-4af2-b127-a63cb4d42844": "Registration",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Main Screen",
    "451bd7ea-721f-43ce-b5e0-3dd3f8106f45": "SettingsPage",
    "45053b96-bf3d-44c4-9ab1-444e3cb31b6b": "PersonalInfo",
    "8043d97f-8121-4b83-b3f6-bc6f89e702ac": "WelcomePage",
    "b400fb0d-ccd8-4d42-aafc-fd121126cc69": "Reastaurant Sreen",
    "acd42067-7de5-4701-9135-81f8927c69f4": "FoodPage",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);