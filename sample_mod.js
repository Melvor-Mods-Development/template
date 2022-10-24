// Made for version 1.1 (rev 4526)

(function() {
	function say_something() {
		console.log("Hi again");
	}

	console.log("[sample_mod] Loading...");
	setTimeout( () => setInterval(say_something, 5000), 15000 );  // wait 15 seconds, then run say_something each 5000ms
	console.log("[sample_mod] Done!");
})();
