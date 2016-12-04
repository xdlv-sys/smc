package xd.fw.mk;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Service
public class DefaultExceptionHandler implements HandlerExceptionResolver {
    private static Logger log = LoggerFactory.getLogger(DefaultExceptionHandler.class);

    public ModelAndView resolveException(HttpServletRequest request
            , HttpServletResponse response, Object handler, Exception ex) {
        ModelAndView mv = new ModelAndView();
        response.setStatus(HttpStatus.OK.value());
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        response.setCharacterEncoding("UTF-8");
        response.setHeader("Cache-Control", "no-cache, must-revalidate");
        try {
            response.getWriter().write("{\"success\":false,\"errorMsg\":\"" + ex.getMessage() + "\"}");
        } catch (IOException e) {
            log.error("与客户端通讯异常:" + e.getMessage(), e);
        }

        log.error("", ex);
        return mv;
    }
}