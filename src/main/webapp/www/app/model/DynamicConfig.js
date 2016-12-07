Ext.define('XApp.model.DynamicConfig',{
	extend: 'XApp.model.Base',
	
	fields : ['confName','confValue','confDesc',{name: 'dirty', type: 'int'}],

	proxy: {
		url: '/config/obtainConfigs.cmd',
		reader: {
			type: 'json',
			rootProperty: 'data'
		}
	}
});