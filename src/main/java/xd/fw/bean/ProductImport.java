package xd.fw.bean;

import javax.persistence.*;
import java.sql.Timestamp;

/**
 * Created by xd on 2016/12/17.
 */
@Entity
@Table(name = "t_product_import")
public class ProductImport {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE, generator = "pk_product_import_id")
    @TableGenerator(name = "pk_product_import_id", table = "t_primary_key",
            pkColumnName = "table_name", valueColumnName = "current_id")
    private int id;
    private String operator;
    private Byte status;
    private Timestamp createTime;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getOperator() {
        return operator;
    }

    public void setOperator(String operator) {
        this.operator = operator;
    }

    public Byte getStatus() {
        return status;
    }

    public void setStatus(Byte status) {
        this.status = status;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ProductImport that = (ProductImport) o;

        if (id != that.id) return false;
        if (operator != null ? !operator.equals(that.operator) : that.operator != null) return false;
        if (status != null ? !status.equals(that.status) : that.status != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (operator != null ? operator.hashCode() : 0);
        result = 31 * result + (status != null ? status.hashCode() : 0);
        return result;
    }

    public Timestamp getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Timestamp createTime) {
        this.createTime = createTime;
    }
}
