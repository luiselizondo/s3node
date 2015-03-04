var AWS = require("aws-sdk");
var fs = require("fs");
var util = require("util");
var Chance = require("chance");

var imageFile = "./images/earth.jpg";

// US Standard is us-east-1
// US West (N. California) is us-west-1
// US West (Oregon) is us-west-2
// AWS.config.region = 'us-west-1';

var config = {
	bucket: process.env.AWS_BUCKET,
	name: new Chance().string() + ".jpg"
}

var params = {
	Bucket: config.bucket,
}

var s3 = new AWS.S3({params: params});

// Read the file and then upload it
fs.readFile(imageFile, function(err, buffer) {
	if(err) {
		throw err;
	}

	console.log("Uploading image %s to bucket %s", imageFile, config.bucket);

	s3.upload({Key: config.name, Body: buffer}, function(err, result) {
		if(err) {
			console.log("Cannot upload to AWS S3");
			console.log(err);
		}
		else {
			console.log(result);
		}
	});

})