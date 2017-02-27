"use strict";
$.getJSON("/tweets", function (tweets) {
	tweets.forEach(function (t) {
		var tweetTag = '<div class="tweet">';
		tweetTag+= '<div class="col-md-2">';
		tweetTag+='<img src="' + t.user.profile_image_url + '"/>'
		tweetTag+='</div>';
		tweetTag+='<div class="col-md-10" type="float:left padding:10px;">';
		tweetTag+='<div>' + t.text + '</div>'
		tweetTag+='<br>';
		tweetTag+='<div>' + t.user.screen_name + '</div>'
		tweetTag+='<div>' + t.created_at + '</div>'
		tweetTag+='</div>';
		tweetTag+='</div>';
		$("#tweets").append(tweetTag);
	});
});