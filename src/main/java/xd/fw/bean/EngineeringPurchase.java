package xd.fw.bean;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by xd on 1/12/2017.
 */
@Entity
@Table(name = "T_ENGINEERING_PURCHASE")
public class EngineeringPurchase implements IPurchase{
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE, generator = "pk_engineering_purchase_id")
    @TableGenerator(name = "pk_engineering_purchase_id", table = "t_primary_key",
            pkColumnName = "table_name", valueColumnName = "current_id")
    private Integer id;
    private Date belong;
    private Integer year;
    private Integer month;
    private Integer supplierType;
    private Integer serviceType;
    private Integer serviceSubType;
    private String name;
    private String productModel;
    private Integer productUnit;
    private Double productCount;
    private Double price;
    private Double unTaxCount;
    private Double rate;
    private Double rateCount;
    private Double total;

    @ManyToOne
    @JoinColumn(name = "project_id")
    @Fetch(FetchMode.SELECT)
    Project project;
    @ManyToOne
    @JoinColumn(name = "dept")
    Dept dept;
    @ManyToOne
    @JoinColumn(name = "supplier_id")
    Supplier supplier;

    public Supplier getSupplier() {
        return supplier;
    }

    public void setSupplier(Supplier supplier) {
        this.supplier = supplier;
    }

    public Dept getDept() {
        return dept;
    }

    public void setDept(Dept dept) {
        this.dept = dept;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public Date getBelong() {
        return belong;
    }

    public void setBelong(Date belong) {
        this.belong = belong;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public Integer getMonth() {
        return month;
    }

    public void setMonth(Integer month) {
        this.month = month;
    }

    public Integer getSupplierType() {
        return supplierType;
    }

    public void setSupplierType(Integer supplierType) {
        this.supplierType = supplierType;
    }

    public Integer getServiceType() {
        return serviceType;
    }

    public void setServiceType(Integer serviceType) {
        this.serviceType = serviceType;
    }

    public Integer getServiceSubType() {
        return serviceSubType;
    }

    public void setServiceSubType(Integer serviceSubType) {
        this.serviceSubType = serviceSubType;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getProductModel() {
        return productModel;
    }

    public void setProductModel(String productModel) {
        this.productModel = productModel;
    }

    public Integer getProductUnit() {
        return productUnit;
    }

    public void setProductUnit(Integer productUnit) {
        this.productUnit = productUnit;
    }

    public Double getProductCount() {
        return productCount;
    }

    public void setProductCount(Double productCount) {
        this.productCount = productCount;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Double getUnTaxCount() {
        return unTaxCount;
    }

    public void setUnTaxCount(Double unTaxCount) {
        this.unTaxCount = unTaxCount;
    }

    public Double getRate() {
        return rate;
    }

    public void setRate(Double rate) {
        this.rate = rate;
    }

    public Double getRateCount() {
        return rateCount;
    }

    public void setRateCount(Double rateCount) {
        this.rateCount = rateCount;
    }

    public Double getTotal() {
        return total;
    }

    public void setTotal(Double total) {
        this.total = total;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        EngineeringPurchase that = (EngineeringPurchase) o;

        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (dept != null ? !dept.equals(that.dept) : that.dept != null) return false;
        if (year != null ? !year.equals(that.year) : that.year != null) return false;
        if (month != null ? !month.equals(that.month) : that.month != null) return false;
        if (supplierType != null ? !supplierType.equals(that.supplierType) : that.supplierType != null) return false;
        if (serviceType != null ? !serviceType.equals(that.serviceType) : that.serviceType != null) return false;
        if (serviceSubType != null ? !serviceSubType.equals(that.serviceSubType) : that.serviceSubType != null)
            return false;
        if (name != null ? !name.equals(that.name) : that.name != null) return false;
        if (productModel != null ? !productModel.equals(that.productModel) : that.productModel != null) return false;
        if (productUnit != null ? !productUnit.equals(that.productUnit) : that.productUnit != null) return false;
        if (productCount != null ? !productCount.equals(that.productCount) : that.productCount != null) return false;
        if (price != null ? !price.equals(that.price) : that.price != null) return false;
        if (unTaxCount != null ? !unTaxCount.equals(that.unTaxCount) : that.unTaxCount != null) return false;
        if (rate != null ? !rate.equals(that.rate) : that.rate != null) return false;
        if (rateCount != null ? !rateCount.equals(that.rateCount) : that.rateCount != null) return false;
        if (total != null ? !total.equals(that.total) : that.total != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (dept != null ? dept.hashCode() : 0);
        result = 31 * result + (year != null ? year.hashCode() : 0);
        result = 31 * result + (month != null ? month.hashCode() : 0);
        result = 31 * result + (supplierType != null ? supplierType.hashCode() : 0);
        result = 31 * result + (serviceType != null ? serviceType.hashCode() : 0);
        result = 31 * result + (serviceSubType != null ? serviceSubType.hashCode() : 0);
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (productModel != null ? productModel.hashCode() : 0);
        result = 31 * result + (productUnit != null ? productUnit.hashCode() : 0);
        result = 31 * result + (productCount != null ? productCount.hashCode() : 0);
        result = 31 * result + (price != null ? price.hashCode() : 0);
        result = 31 * result + (unTaxCount != null ? unTaxCount.hashCode() : 0);
        result = 31 * result + (rate != null ? rate.hashCode() : 0);
        result = 31 * result + (rateCount != null ? rateCount.hashCode() : 0);
        result = 31 * result + (total != null ? total.hashCode() : 0);
        return result;
    }
}
