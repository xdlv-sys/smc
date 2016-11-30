package xd.fw.controller;

/**
 * Created by xd on 2016/11/30.
 */
public class BaseController {

    protected final String DONE = "{\"success\":true}";

    protected PageContent page(int total, Object data){
        return new PageContent(total, data);
    }

    static class PageContent{
        int total;
        Object data;

        PageContent(int total, Object data){
            this.total = total;
            this.data = data;
        }

        public int getTotal() {
            return total;
        }

        public Object getData() {
            return data;
        }
    }
}
