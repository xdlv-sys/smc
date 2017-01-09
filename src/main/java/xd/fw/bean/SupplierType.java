package xd.fw.bean;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

/**
 * Created by xd on 2017/1/7.
 */
@Entity
@Table(name = "t_supplier_type")
public class SupplierType {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE, generator = "pk_supplier_type_id")
    @TableGenerator(name = "pk_supplier_type_id", table = "t_primary_key",
            pkColumnName = "table_name", valueColumnName = "current_id",
            initialValue = 100, allocationSize = 100)
    private Integer id;
    private Byte supplierType;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "supplier_id")
    @JsonIgnore
    private Supplier supplier;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "supplierType")
    List<SupplierSubType> supplierSubTypes;

    public List<SupplierSubType> getSupplierSubTypes() {
        return supplierSubTypes;
    }

    public void setSupplierSubTypes(List<SupplierSubType> supplierSubTypes) {
        this.supplierSubTypes = supplierSubTypes;
    }

    public Supplier getSupplier() {
        return supplier;
    }

    public void setSupplier(Supplier supplier) {
        this.supplier = supplier;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Byte getSupplierType() {
        return supplierType;
    }

    public void setSupplierType(Byte supplierType) {
        this.supplierType = supplierType;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        SupplierType that = (SupplierType) o;

        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (supplierType != null ? !supplierType.equals(that.supplierType) : that.supplierType != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (supplierType != null ? supplierType.hashCode() : 0);
        return result;
    }
}
