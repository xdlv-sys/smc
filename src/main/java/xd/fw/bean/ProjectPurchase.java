package xd.fw.bean;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by xd on 2017/1/10.
 */
@Entity
@Table(name="T_PROJECT_PURCHASE")
public class ProjectPurchase implements IPurchase {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE, generator = "pk_project_purchase_id")
    @TableGenerator(name = "pk_project_purchase_id", table = "t_primary_key",
            pkColumnName = "table_name", valueColumnName = "current_id")
    private Integer id;
    private Date belong;
    private String company;
    private String productName;
    private String productModel;
    private Byte productUnit;
    private Double productCount;
    private Double price;
    private Double unTaxCount;
    private Double rate;
    private Double rateCount;
    private Double total;
    private Integer importId;
    private Integer projectId;

    public Integer getProjectId() {
        return projectId;
    }
    public void setProjectId(Integer projectId) {
        this.projectId = projectId;
    }

    public Integer getImportId() {
        return importId;
    }

    public void setImportId(Integer importId) {
        this.importId = importId;
    }
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Override
    public Date getBelong() {
        return belong;
    }

    public void setBelong(Date belong) {
        this.belong = belong;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getProductModel() {
        return productModel;
    }

    public void setProductModel(String productModel) {
        this.productModel = productModel;
    }

    public Byte getProductUnit() {
        return productUnit;
    }

    public void setProductUnit(Byte productUnit) {
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

    @Override
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

    @Override
    public Double getRateCount() {
        return rateCount;
    }

    public void setRateCount(Double rateNumber) {
        this.rateCount = rateNumber;
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

        ProjectPurchase that = (ProjectPurchase) o;

        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (belong != null ? !belong.equals(that.belong) : that.belong != null) return false;
        if (company != null ? !company.equals(that.company) : that.company != null) return false;
        if (productName != null ? !productName.equals(that.productName) : that.productName != null) return false;
        if (productModel != null ? !productModel.equals(that.productModel) : that.productModel != null) return false;
        if (productUnit != null ? !productUnit.equals(that.productUnit) : that.productUnit != null) return false;
        if (productCount != null ? !productCount.equals(that.productCount) : that.productCount != null) return false;
        if (price != null ? !price.equals(that.price) : that.price != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (belong != null ? belong.hashCode() : 0);
        result = 31 * result + (company != null ? company.hashCode() : 0);
        result = 31 * result + (productName != null ? productName.hashCode() : 0);
        result = 31 * result + (productModel != null ? productModel.hashCode() : 0);
        result = 31 * result + (productUnit != null ? productUnit.hashCode() : 0);
        result = 31 * result + (productCount != null ? productCount.hashCode() : 0);
        result = 31 * result + (price != null ? price.hashCode() : 0);
        return result;
    }
}
