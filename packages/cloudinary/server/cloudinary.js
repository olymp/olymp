var cloudinary = require('cloudinary');
var lodash = require('lodash');
export var parseURI = function (uri) {
    var config = {};
    if (uri) {
        var split1 = uri.split('@');
        var split2 = split1[0].split('://');
        var split3 = split2[1].split(':');
        config.cloud_name = split1[1];
        config.api_key = split3[0];
        config.api_secret = split3[1];
    }
    return config;
};
export var transform = function (image) {
    var newImage = {};
    Object.keys(image).forEach(function (key) {
        if (key === 'public_id') {
            newImage.id = image.public_id;
            return;
        }
        else if (key === 'secureUrl') {
            return;
        }
        else if (key === 'url') {
            newImage.url = image.secureUrl || image.url;
            return;
        }
        else if (key === 'colors') {
            return;
        }
        else if (key === 'context' && image[key].custom) {
            newImage.caption = image[key].custom.caption;
            newImage.source = image[key].custom.source;
            newImage.removed = image[key].custom.removed;
            return;
        }
        else if (key === 'predominant') {
            newImage.colors = image.predominant.google.map(function (x) { return x[0]; });
            return;
        }
        else if (key === 'pages') {
            newImage.pages = image.pages;
            return;
        }
        newImage[lodash.camelCase(key)] = image[key];
    });
    return newImage;
};
export var transformSignature = function (_a, _b) {
    var cloud_name = _a.cloud_name;
    var signature = _b.signature, api_key = _b.api_key, timestamp = _b.timestamp;
    return ({
        url: "https://api.cloudinary.com/v1_1/" + cloud_name + "/auto/upload",
        signature: signature,
        timestamp: timestamp,
        apiKey: api_key,
    });
};
export var getImages = function (config, images, nextCursor) {
    if (images === void 0) { images = []; }
    return new Promise(function (yay, nay) {
        cloudinary.api.resources(function (result) {
            if (result.error) {
                return nay(result.error);
            }
            var results = result.resources && result.resources.length
                ? images.concat(result.resources.map(transform))
                : [];
            if (result.next_cursor) {
                console.error('WARNING, MORE THAN 500 IMAGES!');
                return getImages(config, results, result.next_cursor).then(yay);
            }
            return yay(results);
        }, Object.assign({}, config, {
            tags: true,
            context: true,
            type: 'upload',
            colors: true,
            max_results: 500,
            next_cursor: nextCursor,
        }));
    });
};
export var getImageById = function (config, id) {
    return new Promise(function (yay) {
        return cloudinary.api.resource(id, function (result) {
            yay(transform(result));
        }, Object.assign({}, config, {
            tags: true,
            context: true,
            type: 'upload',
            colors: true,
            pages: true,
        }));
    });
};
export var getSignedRequest = function (config) {
    return new Promise(function (yay) {
        return yay(transformSignature(config, cloudinary.utils.sign_request({
            timestamp: Math.round(new Date().getTime() / 1000),
        }, config)));
    });
};
export var updateImage = function (id, tags, source, caption, config, removed) {
    var context = [];
    if (source) {
        context.push("source=" + source);
    }
    if (caption) {
        context.push("caption=" + caption);
    }
    if (removed) {
        context.push('removed=true');
    }
    return new Promise(function (yay) {
        cloudinary.api.update(id, function (result) { return yay(transform(result)); }, Object.assign({}, config, {
            tags: (tags || []).join(','),
            context: context.join('|'),
        }));
    });
};
//# sourceMappingURL=cloudinary.js.map