export default function (num, type) {
    if (num === void 0) { num = 1; }
    var lorem = [
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.',
    ];
    if (type === 'characters' || type === 'chars') {
        var outputString = '';
        var tempString = lorem.join('\n\n');
        while (outputString.length < num) {
            outputString += tempString;
        }
        return outputString.substring(0, num);
    }
    else if (type === 'words') {
        var list_1 = new Array();
        var wordList = new Array();
        wordList = lorem[0].split(' ');
        var iParagraphCount_1 = 0;
        var iWordCount = 0;
        while (list_1.length < num) {
            if (iWordCount > wordList.length) {
                iWordCount = 0;
                iParagraphCount_1 += 1;
                if (iParagraphCount_1 + 1 > lorem.length) {
                    iParagraphCount_1 = 0;
                }
                wordList = lorem[iParagraphCount_1].split(' ');
                wordList[0] = "\n\n" + wordList[0];
            }
            list_1.push(wordList[iWordCount]);
            iWordCount++;
        }
        return list_1.join(' ');
    }
    var list = new Array();
    var iParagraphCount = 0;
    while (list.length < num) {
        if (iParagraphCount + 1 > lorem.length) {
            iParagraphCount = 0;
        }
        list.push(lorem[iParagraphCount]);
        iParagraphCount += 1;
    }
    return list.join('\n\n');
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3V0aWxzL2xvcmVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGVBQWUsVUFBQyxHQUFPLEVBQUUsSUFBSTtJQUFiLG9CQUFBLEVBQUEsT0FBTztJQUNyQixJQUFNLEtBQUssR0FBRztRQUNaLGlpQkFBaWlCO0tBQ2xpQixDQUFDO0lBRUYsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLFlBQVksSUFBSSxJQUFJLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM5QyxJQUFJLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV0QyxPQUFPLFlBQVksQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUM7WUFDakMsWUFBWSxJQUFJLFVBQVUsQ0FBQztRQUM3QixDQUFDO1FBRUQsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBTSxNQUFJLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUN6QixJQUFJLFFBQVEsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQzNCLFFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLElBQUksaUJBQWUsR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBRW5CLE9BQU8sTUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUN6QixFQUFFLENBQUMsQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ2pDLFVBQVUsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsaUJBQWUsSUFBSSxDQUFDLENBQUM7Z0JBQ3JCLEVBQUUsQ0FBQyxDQUFDLGlCQUFlLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUN2QyxpQkFBZSxHQUFHLENBQUMsQ0FBQztnQkFDdEIsQ0FBQztnQkFDRCxRQUFRLEdBQUcsS0FBSyxDQUFDLGlCQUFlLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzdDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUcsQ0FBQztZQUNyQyxDQUFDO1lBQ0QsTUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNoQyxVQUFVLEVBQUUsQ0FBQztRQUNmLENBQUM7UUFFRCxNQUFNLENBQUMsTUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBR0QsSUFBTSxJQUFJLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztJQUN6QixJQUFJLGVBQWUsR0FBRyxDQUFDLENBQUM7SUFFeEIsT0FBTyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLGVBQWUsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDdkMsZUFBZSxHQUFHLENBQUMsQ0FBQztRQUN0QixDQUFDO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUNsQyxlQUFlLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMzQixDQUFDLENBQUMiLCJmaWxlIjoicGFja2FnZXMvdXRpbHMvbG9yZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAobnVtID0gMSwgdHlwZSkgPT4ge1xuICBjb25zdCBsb3JlbSA9IFtcbiAgICAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVlciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkaWFtIG5vbnVtbXkgbmliaCBldWlzbW9kIHRpbmNpZHVudCB1dCBsYW9yZWV0IGRvbG9yZSBtYWduYSBhbGlxdWFtIGVyYXQgdm9sdXRwYXQuIFV0IHdpc2kgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2kgdGF0aW9uIHVsbGFtY29ycGVyIHN1c2NpcGl0IGxvYm9ydGlzIG5pc2wgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlbSB2ZWwgZXVtIGlyaXVyZSBkb2xvciBpbiBoZW5kcmVyaXQgaW4gdnVscHV0YXRlIHZlbGl0IGVzc2UgbW9sZXN0aWUgY29uc2VxdWF0LCB2ZWwgaWxsdW0gZG9sb3JlIGV1IGZldWdpYXQgbnVsbGEgZmFjaWxpc2lzIGF0IHZlcm8gZXJvcyBldCBhY2N1bXNhbiBldCBpdXN0byBvZGlvIGRpZ25pc3NpbSBxdWkgYmxhbmRpdCBwcmFlc2VudCBsdXB0YXR1bSB6enJpbCBkZWxlbml0IGF1Z3VlIGR1aXMgZG9sb3JlIHRlIGZldWdhaXQgbnVsbGEgZmFjaWxpc2kuJyxcbiAgXTtcblxuICBpZiAodHlwZSA9PT0gJ2NoYXJhY3RlcnMnIHx8IHR5cGUgPT09ICdjaGFycycpIHtcbiAgICBsZXQgb3V0cHV0U3RyaW5nID0gJyc7XG4gICAgY29uc3QgdGVtcFN0cmluZyA9IGxvcmVtLmpvaW4oJ1xcblxcbicpO1xuXG4gICAgd2hpbGUgKG91dHB1dFN0cmluZy5sZW5ndGggPCBudW0pIHtcbiAgICAgIG91dHB1dFN0cmluZyArPSB0ZW1wU3RyaW5nO1xuICAgIH1cblxuICAgIHJldHVybiBvdXRwdXRTdHJpbmcuc3Vic3RyaW5nKDAsIG51bSk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3dvcmRzJykge1xuICAgIGNvbnN0IGxpc3QgPSBuZXcgQXJyYXkoKTtcbiAgICBsZXQgd29yZExpc3QgPSBuZXcgQXJyYXkoKTtcbiAgICB3b3JkTGlzdCA9IGxvcmVtWzBdLnNwbGl0KCcgJyk7XG4gICAgbGV0IGlQYXJhZ3JhcGhDb3VudCA9IDA7XG4gICAgbGV0IGlXb3JkQ291bnQgPSAwO1xuXG4gICAgd2hpbGUgKGxpc3QubGVuZ3RoIDwgbnVtKSB7XG4gICAgICBpZiAoaVdvcmRDb3VudCA+IHdvcmRMaXN0Lmxlbmd0aCkge1xuICAgICAgICBpV29yZENvdW50ID0gMDtcbiAgICAgICAgaVBhcmFncmFwaENvdW50ICs9IDE7XG4gICAgICAgIGlmIChpUGFyYWdyYXBoQ291bnQgKyAxID4gbG9yZW0ubGVuZ3RoKSB7XG4gICAgICAgICAgaVBhcmFncmFwaENvdW50ID0gMDtcbiAgICAgICAgfVxuICAgICAgICB3b3JkTGlzdCA9IGxvcmVtW2lQYXJhZ3JhcGhDb3VudF0uc3BsaXQoJyAnKTtcbiAgICAgICAgd29yZExpc3RbMF0gPSBgXFxuXFxuJHt3b3JkTGlzdFswXX1gO1xuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKHdvcmRMaXN0W2lXb3JkQ291bnRdKTtcbiAgICAgIGlXb3JkQ291bnQrKztcbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdC5qb2luKCcgJyk7IC8vIGNoYW5nZWRcbiAgfVxuXG4gIC8vIHBhcmFncmFwaHNcbiAgY29uc3QgbGlzdCA9IG5ldyBBcnJheSgpO1xuICBsZXQgaVBhcmFncmFwaENvdW50ID0gMDtcblxuICB3aGlsZSAobGlzdC5sZW5ndGggPCBudW0pIHtcbiAgICBpZiAoaVBhcmFncmFwaENvdW50ICsgMSA+IGxvcmVtLmxlbmd0aCkge1xuICAgICAgaVBhcmFncmFwaENvdW50ID0gMDtcbiAgICB9XG4gICAgbGlzdC5wdXNoKGxvcmVtW2lQYXJhZ3JhcGhDb3VudF0pO1xuICAgIGlQYXJhZ3JhcGhDb3VudCArPSAxO1xuICB9XG4gIHJldHVybiBsaXN0LmpvaW4oJ1xcblxcbicpOyAvLyBjaGFuZ2VkXG59O1xuIl19
