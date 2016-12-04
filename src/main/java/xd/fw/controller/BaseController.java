package xd.fw.controller;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import xd.fw.bean.User;

import java.util.List;

/**
 * Created by xd on 2016/11/30.
 */
public class BaseController {

    protected final String DONE = "{\"success\":true}";

    protected PageContent page(Page<?> data){
        return new PageContent(data);
    }
    protected PageRequest pageRequest(int page, int limit){
        return new PageRequest(page, limit);
    }

    static class PageContent{
        long total;
        List<?> data;

        PageContent(Page<?> data){
            this.total = data.getTotalElements();
            this.data = data.getContent();
        }

        public long getTotal() {
            return total;
        }

        public Object getData() {
            return data;
        }
    }
}
