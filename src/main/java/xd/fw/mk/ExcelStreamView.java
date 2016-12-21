package xd.fw.mk;

import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.web.servlet.view.document.AbstractXlsxStreamingView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;

/**
 * Created by xd on 2016/12/21.
 */
public abstract class ExcelStreamView extends AbstractXlsxStreamingView {
    @Override
    protected void buildExcelDocument(Map<String, Object> model, Workbook workbook, HttpServletRequest request, HttpServletResponse response) throws Exception {

    }

    public abstract void fillWorkbook(Workbook workbook);
}
