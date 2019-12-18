var cups = [
    {
        color:'Blue'
    },
    {
        color:'Green'
    }
];


var colCount = 5;
var rowCount = 30;

/*
Arrays to keep track of actor information
	each array has each actor as an index
	A: cast higher
	B: cast lower
	C: total together
*/
var hopkinsArray= [0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var murrayArray= [0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0];
var pittArray= [2,0,0,0,0,0,1,3,0,2,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0];
var willisArray= [0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var baleArray= [0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,2,0,0,0,0,1,0,0,0,0,0,0,0];
var washingtonArray= [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var fordArray= [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var simmonsArray= [0,0,0,0,0,0,0,0,0,0,0,0,1,4,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0];
var francoArray= [0,0,0,0,0,0,0,4,0,1,0,0,0,4,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0];
var stathamArray= [0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var broadbentArray= [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0];
var deppArray= [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0];
var robertsArray= [0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0];
var dunstArray= [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0];
var neesonArray= [0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0];
var damonArray= [0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0];
var mcconaugheyArray= [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var streepArray= [0,1,0,1,0,0,0,0,0,0,0,1,2,0,0,0,0,0,0,2,1,0,0,0,0,0,0,0,0,0,0];
var freemanArray= [1,0,0,3,0,2,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0];
var cageArray= [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var deniroArray= [0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0];
var downeyArray= [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0];
var williamsArray= [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var johanssonArray= [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,1,0,0];
var buscemiArray= [0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0];
var stalloneArray= [0,0,0,1,0,0,1,0,0,3,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0];
var cruiseArray= [0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0];
var hanksArray= [0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var wilkinsonArray= [0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0];
var ferrellArray= [0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0];
var hopkinsArrayA = [0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var murrayArrayA = [0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0]
var pittArrayA =
 [2,0,0,0,0,0,1,3,0,2,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0]
var willisArrayA = [0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var baleArrayA = [0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,2,0,0,0,0,1,0,0,0,0,0,0,0]
var washingtonArrayA = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var fordArrayA = [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var simmonsArrayA = [0,0,0,0,0,0,0,0,0,0,0,0,1,4,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0]
var francoArrayA = [0,0,0,0,0,0,0,4,0,1,0,0,0,4,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0]
var stathamArrayA = [0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var broadbentArrayA = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0]
var deppArrayA = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0]
var robertsArrayA = [0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0]
var dunstArrayA = [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0]
var neesonArrayA = [0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0]
var damonArrayA = [0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0]
var mcconaugheyArrayA = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var streepArrayA = [0,1,0,1,0,0,0,0,0,0,0,1,2,0,0,0,0,0,0,2,1,0,0,0,0,0,0,0,0,0,0]
var freemanArrayA = [1,0,0,3,0,2,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0]
var cageArrayA = [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var deniroArrayA = [0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0]
var downeyArrayA = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0]
var williamsArrayA = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var johanssonArrayA = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,1,0,0]
var buscemiArrayA = [0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0]
var stalloneArrayA = [0,0,0,1,0,0,1,0,0,3,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0]
var cruiseArrayA = [0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0]
var hanksArrayA = [0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var wilkinsonArrayA = [0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0]
var ferrellArrayA = [0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0]
var hopkinsArrayB = [0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0]
var murrayArrayB = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0]
var pittArrayB = [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0]
var willisArrayB = [1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,3,0,0,0,0,0,1,1,0,0,0,0,0]
var baleArrayB = [0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var washingtonArrayB = [0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,2,0,0,0,0,0,0,0,0,1,0,0,0]
var fordArrayB = [0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0]
var simmonsArrayB = [0,0,3,1,1,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0]
var francoArrayB = [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var stathamArrayB = [0,0,2,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,3,0,0,0,0,0]
var broadbentArrayB = [0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0]
var deppArrayB = [0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0]
var robertsArrayB = [0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,2,0,1,0,0,0,0,0,0,0,0,1,0,0]
var dunstArrayB = [0,0,1,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0]
var neesonArrayB = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0]
var damonArrayB = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0]
var mcconaugheyArrayB = [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0]
var streepArrayB = [0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0]
var freemanArrayB = [0,0,1,0,2,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0]
var cageArrayB = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0]
var deniroArrayB = [0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,2,0,0,0,0,0]
var downeyArrayB = [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0]
var williamsArrayB = [0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0]
var johanssonArrayB = [0,3,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,3,0,0,3,0,0,0,0,0,0]
var buscemiArrayB = [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var stalloneArrayB = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var cruiseArrayB = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0]
var hanksArrayB = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var wilkinsonArrayB = [0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0]
var ferrellArrayB = [0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var hopkinsArrayC = [0,0,2,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0]
var murrayArrayC = [0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,3,0,0,0,0,1,0,0]
var pittArrayC = [2,0,0,0,0,0,1,3,0,2,0,0,2,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0]
var willisArrayC = [1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,3,0,0,0,0,0,1,1,0,0,0,0,0]
var baleArrayC = [0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,2,0,0,0,0,1,0,0,0,0,0,0,0]
var washingtonArrayC = [0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,2,0,0,0,0,0,0,0,0,1,0,0,0]
var fordArrayC = [0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0]
var simmonsArrayC = [0,0,3,1,1,0,0,0,4,0,0,0,1,4,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0]
var francoArrayC = [0,0,0,0,0,0,0,4,0,1,0,0,1,4,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0]
var stathamArrayC = [0,0,2,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,3,0,0,0,0,0]
var broadbentArrayC = [0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0]
var deppArrayC = [0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0]
var robertsArrayC = [0,0,2,0,0,1,0,1,1,0,0,0,0,1,1,0,0,2,0,1,0,0,1,0,1,0,0,0,1,0,0]
var dunstArrayC = [0,0,1,0,1,0,0,4,4,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0]
var neesonArrayC = [1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,2,0,0,0,0,0,1,0,0,0,0,0,0]
var damonArrayC = [0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0]
var mcconaugheyArrayC = [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0]
var streepArrayC = [0,1,0,1,0,0,0,1,0,0,1,1,2,0,0,0,0,0,0,2,2,0,0,0,0,0,1,0,0,0,0]
var freemanArrayC = [1,0,1,3,2,2,0,0,0,0,0,1,0,0,2,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0]
var cageArrayC = [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0]
var deniroArrayC = [0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,2,1,0,0,0,1,0,0,2,0,0,0,0,0]
var downeyArrayC = [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0]
var williamsArrayC = [0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0]
var johanssonArrayC = [0,3,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,5,0,0,3,0,0,0,1,0,0]
var buscemiArrayC = [0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0]
var stalloneArrayC = [0,0,0,1,0,0,1,0,0,3,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0]
var cruiseArrayC = [0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0]
var hanksArrayC = [0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var wilkinsonArrayC = [0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0]
var ferrellArrayC = [0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0]

//contains each actor name
var actorsArray = ["Anthony Hopkins","Bill Murray","Brad Pitt","Bruce Willis","Christian Bale","Denzel Washington","Harrison Ford","J.K. Simmons","James Franco","Jason Statham","Jim Broadbent","Johnny Depp","Julia Roberts","Kirsten Dunst","Liam Neeson","Matt Damon","Matthew McConaughey","Meryl Streep","Morgan Freeman","Nicolas Cage","Robert De Niro","Robert Downey Jr.","Robin Williams","Scarlett Johansson","Steve Buscemi","Sylvester Stallone","Tom Cruise","Tom Hanks","Tom Wilkinson","Will Ferrell"];

/*
runs when everything is loaded
populates the table with default information
*/
window.onload = function()
{

	buildTable()

	//populates table with either a 0 or actor name
	var table = document.getElementById("tableA");
	for( var i = 0; i < rowCount; i++)
		{
			table.rows[i+1].cells[0].innerHTML = actorsArray[i];
			for(var j = 1; j < colCount; j++)
				table.rows[i+1].cells[j].innerHTML = 0;
		}
		//fills in headers
		table.rows[0].cells[0].innerHTML= "Actor Name";
		table.rows[0].cells[1].innerHTML= "Cast Higher";
		table.rows[0].cells[2].innerHTML= "Cast Lower";
		table.rows[0].cells[3].innerHTML= "Total";
		table.rows[0].cells[4].innerHTML= "Likliehood of being cast higher";
	populateSelect()
}

/*
builds the table itself to dimensions listed above
*/
function buildTable()
{
	var table = document.getElementById("tableA");
	table.border = 1;
	for (var i = 0; i < rowCount + 1; i++)
	{
		row = table.insertRow(0);
		for (var j = 0; j < colCount; j++)
		{
			row.insertCell();

		}
	}
	table.rows[0].cells[0].innerHTML= "Actor Name";
	table.rows[0].cells[1].innerHTML= "Cast Higher";
	table.rows[0].cells[2].innerHTML= "Cast Lower";
	table.rows[0].cells[3].innerHTML= "Total";
	table.rows[0].cells[4].innerHTML= "Likliehood of being cast higher";
}

/*
populates select with actor names
*/
function populateSelect()
{
	var selectBox= document.getElementById("boxSelect");
	for(var i = 0; i < 30; i++)
	{
		var opt = actorsArray[i];
		var el = document.createElement("option");
		el.textContent = opt;
		el.value = i;
		selectBox.append(el);
	}

}


/*
updates table with actors values
*/
function updateCells(arrA, arrB, arrC)
{
	var table = document.getElementById("tableA");
	for( var i = 0; i < 30; i++)
	{
		var rowI = i + 1;
		table.rows[rowI].cells[1].innerHTML = arrA[i];
		table.rows[rowI].cells[2].innerHTML = arrB[i];
		table.rows[rowI].cells[3].innerHTML = arrC[i];
		if (arrA[i] > 0 && arrC[i] > 0)
			table.rows[rowI].cells[4].innerHTML = arrA[i] / arrC[i];
		else
			table.rows[rowI].cells[4].innerHTML = 0;
	}
}

/*
- determines which actor is requested
- calls updateCells with specified actors name
*/
function submit()
{
	var selectBox = document.getElementById("boxSelect");
	var selected = selectBox.options[selectBox.selectedIndex].value;
	if (selected == 0)
		updateCells(hopkinsArrayA,hopkinsArrayB,hopkinsArrayC);
	else if (selected == 1)
		updateCells(murrayArrayA,murrayArrayB,murrayArrayC);
	else if (selected == 2)
		updateCells(pittArrayA,pittArrayB,pittArrayC);
	else if (selected == 3)
		updateCells(willisArrayA,willisArrayB,willisArrayC);
	else if (selected == 4)
		updateCells(baleArrayA,baleArrayB,baleArrayC);
	else if (selected == 5)
		updateCells(washingtonArrayA,washingtonArrayB,washingtonArrayC);
	else if (selected ==6)
		updateCells(fordArrayA,fordArrayB,fordArrayC);
	else if (selected == 7)
		updateCells(simmonsArrayA,simmonsArrayB,simmonsArrayC);
	else if (selected == 8)
		updateCells(francoArrayA,francoArrayB,francoArrayC);
	else if (selected == 9)
		updateCells(stathamArrayA,stathamArrayB,stathamArrayC);
	else if (selected == 10)
		updateCells(broadbentArrayA,broadbentArrayB,broadbentArrayC);
	else if (selected == 11)
		updateCells(deppArrayA,deppArrayB,deppArrayC);
	else if (selected == 12)
		updateCells(robertsArrayA,robertsArrayB,robertsArrayC);
	else if (selected == 13)
		updateCells(dunstArrayA,dunstArrayB,dunstArrayC);
	else if (selected == 14)
		updateCells(neesonArrayA,neesonArrayB,neesonArrayC);
	else if (selected == 15)
		updateCells(damonArrayA,damonArrayB,damonArrayC);
	else if (selected == 16)
		updateCells(mcconaugheyArrayA,mcconaugheyArrayB,mcconaugheyArrayC);
	else if (selected == 17)
		updateCells(streepArrayA,streepArrayB,streepArrayC);
	else if (selected == 18)
		updateCells(freemanArrayA,freemanArrayB,freemanArrayC);
	else if (selected == 19)
		updateCells(cageArrayA,cageArrayB,cageArrayC);
	else if (selected == 20)
		updateCells(deniroArrayA,deniroArrayB,deniroArrayC);
	else if (selected == 21)
		updateCells(downeyArrayA,downeyArrayB,downeyArrayC);
	else if (selected == 22)
		updateCells(williamsArrayA,williamsArrayB,williamsArrayC);
	else if (selected == 23)
		updateCells(johanssonArrayA,johanssonArrayB,johanssonArrayC);
	else if (selected == 24)
		updateCells(buscemiArrayA,buscemiArrayB,buscemiArrayC);
	else if (selected == 25)
		updateCells(stalloneArrayA,stalloneArrayB,stalloneArrayC);
	else if (selected == 26)
		updateCells(cruiseArrayA,cruiseArrayB,cruiseArrayC);
	else if (selected == 27)
		updateCells(hanksArrayA,hanksArrayB,hanksArrayC);
	else if (selected == 28)
		updateCells(wilkinsonArrayA,wilkinsonArrayB,wilkinsonArrayC);
	else if (selected == 29)
		updateCells(ferrellArrayA,ferrellArrayB,ferrellArrayC);

}


function addTable() {
  var table = document.getElementById("tableB");

//  var table = document.createElement('TABLE');
  table.border = '1';

  var tableBody = document.createElement('TBODY');
  table.appendChild(tableBody);

  for (var i = 0; i < 20; i++)
  {
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);

    for (var j = 0; j < 3; j++)
    {
      var td = document.createElement('TD');
      td.width = '75';
      td.height='25';
    //  td.appendChild(document.createTextNode("Cell " + i + "," + j));
      tr.appendChild(td);
    }
  }
//  myTableDiv.appendChild(table);
}
addTable();
var arr=["Director Name","IMDB Score","Movie Name","John Blanchard","9.5","Towering Inferno¬†","Cary Bell","8.7","Butterfly Girl¬†"
,"Mitchell Altieri","8.7","A Beginner's Guide to Snuff¬†","Sadyk Sher-Niyaz","8.7","Queen of the Mountains¬†"
,"Charles Chaplin","8.6","Modern Times¬†","Mike Mayhall","8.6","Running Forever¬†"
,"Damien Chazelle","8.5","Whiplash¬†","Majid Majidi","8.5","Children of Heaven¬†","Raja Menon",
"8.5","Airlift¬†","Ron Fricke","8.5","Samsara¬†","Sergio Leone","8.475","Once Upon a Time in America¬†,Once Upon a Time in the West¬†,The Good, the Bad and the Ugly¬†,A Fistful of Dollars¬†",
"Christopher Nolan","8.425","The Dark Knight Rises¬†,The Dark Knight¬†,Interstellar¬†,Inception¬†,Batman Begins¬†,Insomnia¬†,The Prestige¬†,Memento¬†",
"Asghar Farhadi","8.4","A Separation¬†","Bill Melendez","8.4","A Charlie Brown Christmas¬†",
"Catherine Owens","8.4","U2 3D¬†","Jay Oliva","8.4","Batman: The Dark Knight Returns, Part 2¬†",
"Marius A. Markevicius","8.4","The Other Dream Team¬†","Moustapha Akkad","8.4","Lion of the Desert¬†",
"Rakeysh Omprakash Mehra","8.4","Rang De Basanti¬†","Richard Marquand","8.4","Star Wars: Episode VI - Return of the Jedi¬†"];

function updateBCells()
{
    //creates the table variable (based on tableB)
  var tableB=document.getElementById("tableB");
  var max_Count=0;
  var arraylength=0;
    //increments through table row by row
  for (var i = 0 ; i < tableB.rows.length; i++)
  {
      //increments through respective row's cells
      for (var j = 0; j < tableB.rows[i].cells.length; j++)
      {
          //checks to see if we are still setting values

            //sets cells value to te respective index in the arraySource
          tableB.rows[i].cells[j].innerHTML=arr[arraylength];
          arraylength=arraylength+1;
          max_Count++;
        }
  }
}
updateBCells();
