package xd.fw.controller;

import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import xd.fw.bean.User;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

/**
 * Created by xd on 2016/11/30.
 */
public class BaseController {

    protected final String DONE = "{\"success\":true}";

    protected PageContent page(Page<?> data){
        return new PageContent(data);
    }
    protected PageContent page(List<?> data){
        return new PageContent(data);
    }
    protected PageRequest pageRequest(int page, int limit){
        return new PageRequest(page -1, limit);
    }

    protected ModelRequest modelRequest(Object obj){
        return new ModelRequest(obj);
    }
    static class ModelRequest{
        Object data;
        ModelRequest(Object data){
            this.data = data;
        }

        public Object getData() {
            return data;
        }
    }

    static class PageContent extends ModelRequest{
        long total;

        PageContent(Page<?> data){
            super(data.getContent());
            this.total = data.getTotalElements();
        }
        PageContent(List<?> data){
            super(data);
            this.total = data == null ? 0 : data.size();
        }

        public long getTotal() {
            return total;
        }
    }

    @InitBinder
    public void initBinder(WebDataBinder binder) {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        dateFormat.setLenient(false);
        binder.registerCustomEditor(Date.class, new CustomDateEditor(dateFormat, true));
    }
}
