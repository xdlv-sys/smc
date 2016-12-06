Ext.define('XApp.view.user.UserManagerController', {
    extend: 'XApp.view.BaseViewController',
    alias: 'controller.user-usermanager',

    getGrid: function (btn) {
        return btn.up('grid');
    },
    // user manager
    openUserInfo: function (btn, user, saveCallback) {
        Ext.create('XApp.view.user.UserInfo', {
            roleEditable: true,
            saveCallback: saveCallback,
            viewModel: {
                data: {
                    user: user
                }
            }
        }).show();
    },

    addUser: function (btn) {
        this.openUserInfo(btn, null, function () {
            btn.up('grid').getStore().reload();
        });
    },
    modUser: function (btn) {
        var users = this.getGrid(btn).getSelection();
        this.openUserInfo(btn, Ext.apply({}, users[0]), function () {
            btn.up('grid').getStore().reload();
        });
    },
    delUser: function (btn) {
        var users = this.getGrid(btn).getSelection();
        var userIds = [];
        Ext.each(users, function (v, i) {
            userIds.push(v.get('id'));
        });
        this.ajax({
            url: '/user/deleteUser.cmd',
            params: {userIds: userIds},
            success: function () {
                btn.up('grid').getStore().reload();
            }
        });
    },
    //role manager
    openRoleInfo: function (btn, role) {
        var win = Ext.create('XApp.view.cdu.BaseInfo', {
            viewModel: {
                data: {
                    operation: this.saveRole,
                    grid: this.getGrid(btn),
                    title: '角色信息',
                    role: role
                }
            },
            fieldItems: [{
                xtype: 'textfield',
                name: 'id',
                hidden: true,
                bind: '{role.id}'
            }, {
                name: 'name',
                xtype: 'textfield',
                fieldLabel: '角色名',
                bind: '{role.name}'
            }, {
                xtype: 'modtree',
                scrollable: true
            }]
        });
        win.show(null, function () {
            //select mods when modifying a role
            if (!role) {
                return;
            }
            Ext.defer(function () {
                XApp.Util.ajax({
                    url: '/mod/obtainModsByRole.cmd',
                    params: {'roleId': role.id},
                    success: function (records) {
                        win.down('modtree').getRootNode().cascadeBy({
                            before: function (node) {
                                Ext.each(records, function (v, i) {
                                    if (node.get('modId') == v.id) {
                                        var tempNode = node;
                                        while (tempNode) {
                                            tempNode.set('checked', true);
                                            tempNode = tempNode.parentNode;
                                        }
                                    }
                                });
                            }
                        });
                        return true;
                    }
                });
            }, 500);
        });
    },
    saveRole: function (btn) {
        var win = btn.up('window');
        var mods = win.down('modtree').getChecked();

        var params = Ext.apply({}, btn.up('form').getValues());

        Ext.each(mods, function (v, i) {
            params['mods[' + i + '].id'] = v.get('modId');
        });

        XApp.Util.ajax({
            url: '/role/saveRole.cmd',
            params: params,
            success: function (response) {
                win.getViewModel().get('grid').getStore().reload();
                win.close();
            }
        });
    },

    addRole: function (btn) {
        this.openRoleInfo(btn);
    },
    modRole: function (btn) {
        var roles = this.getGrid(btn).getSelection();
        this.openRoleInfo(btn, Ext.apply({}, roles[0]));
    },
    delRole: function (btn) {
        var roles = this.getGrid(btn).getSelection();
        var ids = [];
        Ext.each(roles, function (v, i) {
            ids.push(v.get('id'));
        });
        this.ajax({
            url: '/role/deleteRole.cmd',
            params: {roleIds: ids },
            success: function (response) {
                btn.up('grid').getStore().reload();
            }
        });
    }
});
