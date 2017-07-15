import loremIpsum from 'lorem-ipsum';
import moment from 'moment';
export var id = function () { return Math.random().toString(36).substring(7); };
export var date = function () { return moment(); };
export var color = function () { return "#" + ((Math.random() * 0xffffff) << 0).toString(16); };
export var string = function (length) {
    if (length === void 0) { length = 1; }
    return loremIpsum({
        count: length,
        units: 'words',
    });
};
export var text = function (length) {
    if (length === void 0) { length = 1; }
    return loremIpsum({
        count: length,
        units: 'paragraphs',
    });
};
export var image = function (width, height) {
    if (width === void 0) { width = 400; }
    if (height === void 0) { height = 300; }
    return ({
        id: id(),
        url: "https://lorempixel.com/" + width + "/" + height + "/cats",
        width: width,
        height: height,
        caption: string(),
        source: string(),
    });
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2ZlbGEvc2tlbGV0b3IvZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFVBQVUsTUFBTSxhQUFhLENBQUM7QUFDckMsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBRTVCLE1BQU0sQ0FBQyxJQUFNLEVBQUUsR0FBRyxjQUFNLE9BQUEsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQXZDLENBQXVDLENBQUM7QUFFaEUsTUFBTSxDQUFDLElBQU0sSUFBSSxHQUFHLGNBQU0sT0FBQSxNQUFNLEVBQUUsRUFBUixDQUFRLENBQUM7QUFFbkMsTUFBTSxDQUFDLElBQU0sS0FBSyxHQUFHLGNBQU0sT0FBQSxNQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBRyxFQUFwRCxDQUFvRCxDQUFDO0FBRWhGLE1BQU0sQ0FBQyxJQUFNLE1BQU0sR0FBRyxVQUFDLE1BQVU7SUFBVix1QkFBQSxFQUFBLFVBQVU7SUFDL0IsT0FBQSxVQUFVLENBQUM7UUFDVCxLQUFLLEVBQUUsTUFBTTtRQUNiLEtBQUssRUFBRSxPQUFPO0tBQ2YsQ0FBQztBQUhGLENBR0UsQ0FBQztBQUVMLE1BQU0sQ0FBQyxJQUFNLElBQUksR0FBRyxVQUFDLE1BQVU7SUFBVix1QkFBQSxFQUFBLFVBQVU7SUFDN0IsT0FBQSxVQUFVLENBQUM7UUFDVCxLQUFLLEVBQUUsTUFBTTtRQUNiLEtBQUssRUFBRSxZQUFZO0tBQ3BCLENBQUM7QUFIRixDQUdFLENBQUM7QUFFTCxNQUFNLENBQUMsSUFBTSxLQUFLLEdBQUcsVUFBQyxLQUFXLEVBQUUsTUFBWTtJQUF6QixzQkFBQSxFQUFBLFdBQVc7SUFBRSx1QkFBQSxFQUFBLFlBQVk7SUFBSyxPQUFBLENBQUM7UUFDbkQsRUFBRSxFQUFFLEVBQUUsRUFBRTtRQUNSLEdBQUcsRUFBRSw0QkFBMEIsS0FBSyxTQUFJLE1BQU0sVUFBTztRQUNyRCxLQUFLLE9BQUE7UUFDTCxNQUFNLFFBQUE7UUFDTixPQUFPLEVBQUUsTUFBTSxFQUFFO1FBQ2pCLE1BQU0sRUFBRSxNQUFNLEVBQUU7S0FDakIsQ0FBQztBQVBrRCxDQU9sRCxDQUFDIiwiZmlsZSI6InBhY2thZ2VzL2ZlbGEvc2tlbGV0b3IvZGF0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsb3JlbUlwc3VtIGZyb20gJ2xvcmVtLWlwc3VtJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuZXhwb3J0IGNvbnN0IGlkID0gKCkgPT4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpO1xuXG5leHBvcnQgY29uc3QgZGF0ZSA9ICgpID0+IG1vbWVudCgpO1xuXG5leHBvcnQgY29uc3QgY29sb3IgPSAoKSA9PiBgIyR7KChNYXRoLnJhbmRvbSgpICogMHhmZmZmZmYpIDw8IDApLnRvU3RyaW5nKDE2KX1gO1xuXG5leHBvcnQgY29uc3Qgc3RyaW5nID0gKGxlbmd0aCA9IDEpID0+XG4gIGxvcmVtSXBzdW0oe1xuICAgIGNvdW50OiBsZW5ndGgsIC8vIE51bWJlciBvZiB3b3Jkcywgc2VudGVuY2VzLCBvciBwYXJhZ3JhcGhzIHRvIGdlbmVyYXRlLlxuICAgIHVuaXRzOiAnd29yZHMnLCAvLyBHZW5lcmF0ZSB3b3Jkcywgc2VudGVuY2VzLCBvciBwYXJhZ3JhcGhzLlxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHRleHQgPSAobGVuZ3RoID0gMSkgPT5cbiAgbG9yZW1JcHN1bSh7XG4gICAgY291bnQ6IGxlbmd0aCwgLy8gTnVtYmVyIG9mIHdvcmRzLCBzZW50ZW5jZXMsIG9yIHBhcmFncmFwaHMgdG8gZ2VuZXJhdGUuXG4gICAgdW5pdHM6ICdwYXJhZ3JhcGhzJywgLy8gR2VuZXJhdGUgd29yZHMsIHNlbnRlbmNlcywgb3IgcGFyYWdyYXBocy5cbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBpbWFnZSA9ICh3aWR0aCA9IDQwMCwgaGVpZ2h0ID0gMzAwKSA9PiAoe1xuICBpZDogaWQoKSxcbiAgdXJsOiBgaHR0cHM6Ly9sb3JlbXBpeGVsLmNvbS8ke3dpZHRofS8ke2hlaWdodH0vY2F0c2AsXG4gIHdpZHRoLFxuICBoZWlnaHQsXG4gIGNhcHRpb246IHN0cmluZygpLFxuICBzb3VyY2U6IHN0cmluZygpLFxufSk7XG4iXX0=