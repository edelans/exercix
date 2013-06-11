function(head, req) {

    start({
        "headers" : {
            "Content-type": "text/html"
        }
    });
    
function cleanLatex(strOutput){
    strOutput = strOutput.replace(/\\begin\{enumerate\}/g, '<ol>');
    strOutput = strOutput.replace(/\\end\{enumerate\}/g, '<\/ol>');
    strOutput = strOutput.replace(/\\begin\{itemize\}/g, '<ul>');
    strOutput = strOutput.replace(/\\end\{itemize\}/g, '<\/ul>');
    strOutput = strOutput.replace(/\\item\s*\[([^\]]*)\]/g, '<br>$1&nbsp;');
    strOutput = strOutput.replace(/\\item/g, '\r\n<li>');
    strOutput = strOutput.replace(/(\\begin{array}(?:[^\\]+|\\(?!end{array}))*\\end{array})|(\\begin{cases}(?:[^\\]+|\\(?!end{cases}))*\\end{cases})|\\\\/g, function(match) {
       if (match.length < 3)
            return "<br>" // Le regex cherche les \begin{array} \end{array}, et les \\. Il suffit alors de filter les array.
       else
            return match; // return the argument, that is, don't replace
  }); 
      return strOutput
}
    var mustache = require("vendor/couchapp/lib/mustache");
    var datalist =  [];
    while(row = getRow()) {
	datalist.push({
	    "chapter": row.value.chapter,
	    "category": row.value.category,
	    "question": cleanLatex(row.value.question),
	    "school": row.value.school,
	    "number": row.value.number,
	    "difficulty": row.value.difficulty,
	    "id" : row.id
	});
    }

    if(datalist.length != 0){
    	var data = {
	    	"category": datalist[0]["category"],
	    	"chapter": datalist[0]["chapter"],
	    	"datalist": datalist
	    	};
    return mustache.to_html(this.templates.chapter, data);}
    else{
	    return '<link rel="stylesheet" href="../../css/index.css" type="text/css"><br><br><h1>Pas d\'exercices dans ce chapitre pour l\'instant.</h1><div class="cat-nav-container"><a class="cat-nav" href="../../index.html">Index</a><div>'
    }
}