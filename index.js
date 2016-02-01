/**
 * Example script getting pages from "Bosons" category on English Wikipedia
 *
 * @see http://en.wikipedia.org/wiki/Category:Bosons
 * @see http://en.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category%3ABosons&cmlimit=500&format=json
 */
'use strict';

var fs = require('fs');

var bot = require('nodemw'),
	client = new bot({
		server: 'en.wikipedia.org',
		path: '/w'
	});

var articles = [];

// Maybe find a better category?
// This will work for now as we get better at handling / parsing the data.
client.getPagesInCategory('Lists_of_plants', function(err, pages) {
	client.log('Pages in category: %d', pages.length);
	client.logData(pages);

	pages.forEach(function(page) {
		client.getArticle(page.title, function(err, content) {
			console.log('%s: %s', page.title, content);
			page.content = client.parse(content, page.title, function(err, html, images) {
				return {
					html: html,
					images: images
				};
			});
			fs.appendFile('./wikiplantinfo.json', JSON.stringify(page.content , null, '\n'), function (error) {
		        if (error) return console.log("Error", error);
		    });
		});
	});


	// // Todo make a regular expression that searches for "Cultivation" heading.
	// If found we add the page and content to a JSON file for later processing.
});
