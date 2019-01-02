(function() {
	var util = new ScheduledEventGenerator();
	util.setDocument(current);
	util.setLabel("Resend approval request");
	util.setAsSeconds(gs.getProperty("com.approvals.reminder_interval", 60*60*24*4));
	util.setEvent("com.resend_approval");
	util.setupScript();
	util.schedule();
})();
