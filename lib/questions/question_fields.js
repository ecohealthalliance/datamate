Template.questionFields.events({
	"change select[name=questionType]":function () {
		if ($("select[name=questionType]").val() == 'dropdown')
			$("#dropOptions").show();
		else
			$("#dropOptions").hide();
	}
});