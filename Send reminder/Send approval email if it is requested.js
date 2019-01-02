(function() {
	// Check if current approval request is still waiting for approval action. Exit if it is answered.
	if(current.state != 'requested') {
		return;
	}

	// Trigger email: use event and OOB notification
	gs.eventQueue("sc_req_item.approval.inserted", current);
})();