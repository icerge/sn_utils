(function() {
	var util = new MScheduledEventGenerator();
	util.setDocument(current);
	util.setLabel("Resend approval request");
	util.setAsSeconds(gs.getProperty("mars.approvals.reminder.rf", 60*60*24*4));
	util.setEvent("mars.resend_approval");
	util.setupScript();
	util.schedule();
	
})();
