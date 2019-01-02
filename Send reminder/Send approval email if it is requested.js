(function() {
	if(current.state != 'requested') {
		return;
	}
	
	gs.eventQueue("sc_req_item.approval.inserted", current);
})();