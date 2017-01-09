package xd.fw.bean;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

/**
 * Created by xd on 1/9/2017.
 */
@Entity
@Table(name = "T_SUPPLIER_SUB_TYPE_NAME")
public class SupplierSubTypeName {
    @Id
    private Integer id;
    private String name;
    private String rate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "parent_id")
    @JsonIgnore
    private SupplierTypeName supplierTypeName;

    public SupplierTypeName getSupplierTypeName() {
        return supplierTypeName;
    }

    public void setSupplierTypeName(SupplierTypeName supplierTypeName) {
        this.supplierTypeName = supplierTypeName;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRate() {
        return rate;
    }

    public void setRate(String rate) {
        this.rate = rate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        SupplierSubTypeName that = (SupplierSubTypeName) o;

        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (name != null ? !name.equals(that.name) : that.name != null) return false;
        if (rate != null ? !rate.equals(that.rate) : that.rate != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (rate != null ? rate.hashCode() : 0);
        return result;
    }
}
