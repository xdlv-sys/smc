Ext.define("XApp.view.cdu.CDUGrid", {
    extend: "Ext.grid.Panel",
    xtype: 'cduGrid',

    viewModel: {
        data:　{
            selectedCount : 0
        },
        formulas: {
            singleSelected: function (get) {
                return get('selectedCount') === 1;
            },
            multiSelected: function(get){
                return get('selectedCount') > 0;
            }
        }
    },

    constructor: function (config) {
        config.tbar = {
            margin: '0 0 10 10',
            xtype: 'container',
            layout: 'hbox',
            items: []
        };
        var createButtonItem = function(key){
            if (config.hiddenButtons && Ext.Array.contains(config.hiddenButtons,key)){
                return;
            }
            var ret = {
                margin: '0 10 0 0',
                xtype: 'button',
                handler: key + config.model,
                hidden: !XApp.store.ModTree.checkMod(config[key + 'ModId']),
                text : config.addText ? config.addText : ('新增' + config.modelName)
            };
            if (key === 'mod'){
                ret.text = config.modText ? config.modText : ('修改' + config.modelName);
                ret.bind = { disabled: '{!singleSelected}'};
            }
            if (key === 'del'){
                ret.text = config.delText ? config.delText : ('删除' + config.modelName);
                ret.bind = { disabled: '{!multiSelected}'};
            }
            return ret;
        };
        config.tbar.items.push(createButtonItem('add'));
        config.tbar.items.push(createButtonItem('mod'));
        config.tbar.items.push(createButtonItem('del'));

        Ext.each(config.tbarButtons, function(v,i){
            config.tbar.items.push(v);
        });
        config.bind= {
            columns : config.columns,
            store : '{'+config.model+'}'
        };
        var grid = this;
        config.selModel= {
            type : 'checkboxmodel',
            listeners : {
                selectionchange : function(model,records){
                    grid.lookupViewModel(false).set('selectedCount',records.length);
                }
            }
        };

        config.bbar ={
            xtype : "pagingtoolbar",
            displayInfo : true,
            bind: '{'+config.model+'}'
        };
        this.callParent(arguments);
    }
});