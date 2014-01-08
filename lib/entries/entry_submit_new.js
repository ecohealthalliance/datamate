Template.entrySubmitNew.events({
  'submit form': function(event) {
    event.preventDefault();

    var entry = {}

    $(".controls *").each(function(index,element){
      var name=$(element).attr('name')
      var value=$(element).val()
      entry[name]=value
    })

    /*add parse to jquery select above*/
    /*var entry = {
      qid: parseInt($(event.target).find('[name=qid]').val(),10),
    }*/

    Meteor.call('entry', entry, function(error, id) {
      if (error) {
        // display the error to the user
        throwError(error.reason);
        // if the error is that the entry already exists, take us there
        if (error.error === 302)
          Router.go('entryView', {_id: error.details})
      } else {
        Router.go('entryView', {_id: id});
      }
    });
  }
});

Template.entrySubmitNew.helpers({
  questions: function() {
    return Questions.find();
  }
});