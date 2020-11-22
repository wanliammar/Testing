const what = document.getElementsByTagName('p')[5].firstChild.data;
const reason = document.getElementsByTagName('p')[6].firstChild.data;
const kind_of_access = document.getElementsByTagName('p')[7].firstChild.data;
const duration_of_access = document.getElementsByTagName('p')[8].firstChild.data;

const Request = document.getElementsByTagName('h1')[3].firstChild.data;

alert(what);


var What_validation;

//if (!(isNaN(what))) {What_validation = true;}
if (what.length != null) { What_validation = true; } else {What_validation = false;}
alert(What_validation);


// var Request_validation;
// var What_validation;
// if (Request === 'Requesting Access') { Request_validation = true;}
// if ((what.length != null)  { What_validation = true;}


