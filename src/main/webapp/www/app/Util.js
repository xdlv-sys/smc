Ext.define('XApp.Util', {
    singleton: true,

    ajax: function (objs) {
        Ext.Ajax.request({
            url: objs.url,
            method: objs.method ? objs.method : 'POST',
            params: objs.params,
            scope: objs.scope,
            callback: function(options,success,response){
                var jsonObj = Ext.decode(response.responseText, true);
                if (jsonObj && jsonObj.needLogin){
                    window.location.href='/';
                    return;
                }
                var blockTips = false;
                if (!success || jsonObj.errorMsg){
                    if (objs.failure) {
                        blockTips = objs.failure(jsonObj);
                    }
                    if (!blockTips) {
                        Ext.MessageBox.alert('错误', '操作失败:' + (Ext.isEmpty(jsonObj.errorMsg) ? "" : jsonObj.errorMsg));
                    }
                } else {
                    if (objs.success) {
                        blockTips = objs.success(jsonObj,response);
                    }
                    if (!blockTips) {
                        Ext.MessageBox.alert('提示', '操作成功');
                    }
                }
                if (objs.clean){
                    objs.clean(jsonObj);
                }
            }
        });
    }
});