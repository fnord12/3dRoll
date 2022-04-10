var attackScript = attackScript || {};

on("chat:message", function (msg) {
	// Exit if not an api command...
	if (msg.type != "api") return;
	
	// Get the api command...
	var command = msg.content.split("~", 1)[0];
	if (command === "!3dRoll") attackScript.Process(msg);
});

attackScript.Process = function(msg, who) {
   	sendChat("Trialman", "/r [[3d6]]", null, {use3d: true});
	
}
