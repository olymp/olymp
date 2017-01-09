module.exports = function (num, type) {
    var lorem = new Array();
    lorem[0] = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.";

    if ("characters" == type) {
        var outputString = '';
        var tempString = lorem.join("\n\n");
        while (outputString.length < num) outputString += tempString;
        return outputString.substring(0, num);
    } else if ("words" == type) {
        var list = new Array();
        var wordList = new Array();
        wordList = lorem[0].split(' ');
        var iParagraphCount = 0;
        var iWordCount = 0;

        while (list.length < num) {
            if (iWordCount > wordList.length) {
                iWordCount = 0;
                iParagraphCount++;
                if (iParagraphCount + 1 > lorem.length) iParagraphCount = 0;
                wordList = lorem[iParagraphCount].split(' ');
                wordList[0] = "\n\n" + wordList[0];
            }
            list.push(wordList[iWordCount]);
            iWordCount++;
        }
        return list.join(' '); // changed
    } else {
        var list = new Array();
        var iParagraphCount = 0;

        while (list.length < num) {
            if (iParagraphCount + 1 > lorem.length) {
                iParagraphCount = 0;
            }
            list.push(lorem[iParagraphCount]);
            iParagraphCount++;
        }
        return list.join("\n\n"); // changed
    }
}
