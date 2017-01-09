package xd.fw.bean;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

/**
 * Created by xd on 2017/1/7.
 */
@Entity
@Table(name = "t_supplier_sub_type")
public class SupplierSubType {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE, generator = "pk_supplier_sub_type_id")
    @TableGenerator(name = "pk_supplier_sub_type_id", table = "t_primary_key",
            pkColumnName = "table_name", valueColumnName = "current_id",
            initialValue = 100, allocationSize = 100)
    private Integer id;
    private Integer supplierSubType;

    @ManyToOne(fetch= FetchType.LAZY)
    @JoinColumn(name = "supplier_type")
    @JsonIgnore
    private SupplierType supplierType;

    public SupplierType getSupplierType() {
        return supplierType;
    }

    public void setSupplierType(SupplierType supplierType) {
        this.supplierType = supplierType;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setSupplierSubType(Integer supplierSubType) {
        this.supplierSubType = supplierSubType;
    }

    public Integer getSupplierSubType() {
        return supplierSubType;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        SupplierSubType that = (SupplierSubType) o;

        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (supplierSubType != null ? !supplierSubType.equals(that.supplierSubType) : that.supplierSubType != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (supplierSubType != null ? supplierSubType.hashCode() : 0);
        return result;
    }
}
