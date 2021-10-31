export const replaceLineBreak = (str) => {
    return str.replace(/(?:\r\n|\r|\n)/g, '<br>');
}

export const stringToHtml = (str) => {
    var parser = new DOMParser();
	var doc = parser.parseFromString(str, 'text/html');
	return doc.body;
}