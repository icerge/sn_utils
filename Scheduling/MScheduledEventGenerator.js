var ScheduledEventGenerator = Class.create();
ScheduledEventGenerator.prototype = Object.extendsObject(ScheduleOnce, {
    initialize: function() {
		ScheduleOnce.prototype.initialize.call(this);
		this.event = null;
		this.parm1 = null;
		
    },
	
	setEvent: function(event_name) {
		this.event = event_name;
	},
	
	setupScript: function() {
		if(this.document == null || this.document_key == null) {
			throw "Document and key must be set before script setup.";
		}
		
		if(this.event == null) {
			throw "Event name must be provided before script setup.";
		}
		
		var script = [];
		script.push("var g = new GlideRecord('" + this.document + "')");
		script.push("g.get('" + this.document_key + "')");
		script.push("gs.eventQueue('" + this.event + "', g, " + this.parm1 + ")");
		
		this.script = script.join(';\n');
		
		return true;
	},

	setParm1: function(value) {
		this.parm1 = value;
	},

    type: 'MScheduledEventGenerator'
});