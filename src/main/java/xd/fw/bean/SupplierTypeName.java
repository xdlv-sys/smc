package xd.fw.bean;

import javax.persistence.*;
import java.util.List;

/**
 * Created by xd on 1/9/2017.
 */
@Entity
@Table(name = "T_SUPPLIER_TYPE_NAME")
public class SupplierTypeName {
    @Id
    private Integer id;
    private Byte degree;
    private String name;

    @OneToMany(cascade = CascadeType.ALL,fetch=FetchType.EAGER,mappedBy = "supplierTypeName")
    List<SupplierSubTypeName> supplierSubTypeNames;

    public List<SupplierSubTypeName> getSupplierSubTypeNames() {
        return supplierSubTypeNames;
    }

    public void setSupplierSubTypeNames(List<SupplierSubTypeName> supplierSubTypeNames) {
        this.supplierSubTypeNames = supplierSubTypeNames;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Byte getDegree() {
        return degree;
    }

    public void setDegree(Byte degree) {
        this.degree = degree;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        SupplierTypeName that = (SupplierTypeName) o;

        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (degree != null ? !degree.equals(that.degree) : that.degree != null) return false;
        if (name != null ? !name.equals(that.name) : that.name != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (degree != null ? degree.hashCode() : 0);
        result = 31 * result + (name != null ? name.hashCode() : 0);
        return result;
    }
}
