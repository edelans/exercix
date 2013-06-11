function(doc, req) {

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
    strOutput = strOutput.replace(/(\\begin{array}(?:[^\\]+|\\(?!end{array}))*\\end{array})|\\\\/g, function(match) {
       if (match.length < 3)
            return "<br>" // Le regex cherche les \begin{array} \end{array}, et les \\. Il suffit alors de filter les array.
       else
            return match; // return the argument, that is, don't replace
  }); 
     
    return strOutput
}
    var mustache = require("vendor/couchapp/lib/mustache");
    var data = {
	"chapter": doc.chapter,
	"category": doc.category,
	"question": cleanLatex(doc.question),
	"solution": cleanLatex(doc.solution),
	"difficulty": doc.difficulty,
	"number": doc.number,
	"school": doc.school,
	"author": doc.author,
	"uploaddate" : doc.uploaddate

    };
    
    return mustache.to_html(this.templates.exo, data);

} 