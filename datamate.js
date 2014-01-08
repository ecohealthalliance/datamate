console.log("datamate config test1");

Datamate = {};

Datamate.config = function(options) {
	console.log("datamate config test2");
	console.log(keyField);
}

keyFields = function () {
  return Datamate._options.keyFields || "qid";
};