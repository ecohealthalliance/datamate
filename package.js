Package.describe({
	summary: "A package to allow users to design questions for data entry and collect data."
});

Package.on_use(function (api) {
	api.use(['deps', 'service-configuration', 'accounts-base',
         'underscore', 'templating',
         'handlebars', 'spark', 'session'], 'client');

	// core files
	api.add_files(["datamate.html","datamate.js","lib/test.html","lib/test.js"], "client");
	api.add_files(["datamate.js"], "server");

	// question files
	api.add_files([
		"lib/questions/question_dropdowns.html",
		"lib/questions/question_edit.html",
		"lib/questions/question_edit.js",
		"lib/questions/question_fields.html",
		"lib/questions/question_fields.js",
		"lib/questions/question_submit_new.html",
		"lib/questions/question_submit_new.js",
		"lib/questions/question_view.html",
		"lib/questions/question_view.js",
		"lib/questions/questions_list.html",
		"lib/questions/questions_list.js",
		"lib/questions/questions_list_item.html",
		"lib/questions/questions_list_item.js"
	], "client");

	// comment files
	api.add_files([
		"lib/comments/comment.html",
		"lib/comments/comment.js",
		"lib/comments/comment_submit.html",
		"lib/comments/comment_submit.js"
	], "client");

	// entries files
	api.add_files([
		"lib/entries/entries_list.html",
		"lib/entries/entries_list.js",
		"lib/entries/entries_list_item.html",
		"lib/entries/entries_list_item.js",
		"lib/entries/entry_edit.html",
		"lib/entries/entry_edit.js",
		"lib/entries/entry_edit_values.html",
		"lib/entries/entry_edit_values.js",
		"lib/entries/entry_submit_new.html",
		"lib/entries/entry_submit_new.js",
		"lib/entries/entry_view.html",
		"lib/entries/entry_view.js",
		"lib/entries/entry_view_values.html",
		"lib/entries/entry_view_values.js",
	], "client");

	// notifications files
	api.add_files([
		"lib/notifications/notifications.html",
		"lib/notifications/notifications.js"
	], "client");

	// collections files
	/*
	api.add_files([
		"collections/comments.js",
		"collections/entries.js",
		"collections/notifications.js",
		"collections/questions.js"
	], "client");
	*/

	if (typeof api.export !== 'undefined') {
	    api.export('Datamate', ['client', 'server']);
	}
});
