Template.entriesList.helpers({
  entriesWithRank: function() {
    this.entries.rewind();
    return this.entries.map(function(entry, index, cursor) {
      entry._rank = index;
      return entry;
    });
  },
  /* TODO: fix so no jump to top of page on click more */
  hasMoreEntries: function(){
    this.entries.rewind();
    return Router.current().limit() == this.entries.fetch().length;
  }
});