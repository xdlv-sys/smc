package xd.fw.bean;

import java.util.Date;

/**
 * Created by xd on 2017/1/26.
 */
public interface IPurchase {
    Date getBelong();

    Double getUnTaxCount();

    Double getRateCount();

    Double getRate();

    Double getTotal();
}
