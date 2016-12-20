package xd.fw.bean;

import xd.fw.service.IConst;

import javax.persistence.*;
import java.sql.Timestamp;

/**
 * Created by xd on 2016/12/17.
 */
@Entity
@Table(name = "t_product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE, generator = "pk_product_id")
    @TableGenerator(name = "pk_product_id", table = "t_primary_key",
            pkColumnName = "table_name", valueColumnName = "current_id",
            initialValue = 100, allocationSize = 100)
    private int id;
    private String code;
    private String name;
    private String model;
    private byte nature;
    private byte genre;
    private String batch;
    private Double storage;
    private Byte countUnit;
    private Byte weightUnit;
    private Byte bulkUnit;
    private String trademark;
    private String approveCode;
    private String lineCode;
    private String packageType;
    private String billName;
    private double rate;
    private Byte status = IConst.STATUS_INI;
    private Integer importId;
    private Timestamp createTime;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public byte getNature() {
        return nature;
    }

    public void setNature(byte nature) {
        this.nature = nature;
    }

    public byte getGenre() {
        return genre;
    }

    public void setGenre(byte genre) {
        this.genre = genre;
    }

    public String getBatch() {
        return batch;
    }

    public void setBatch(String batch) {
        this.batch = batch;
    }

    public Double getStorage() {
        return storage;
    }

    public void setStorage(Double storage) {
        this.storage = storage;
    }

    public Byte getCountUnit() {
        return countUnit;
    }

    public void setCountUnit(Byte countUnit) {
        this.countUnit = countUnit;
    }

    public Byte getWeightUnit() {
        return weightUnit;
    }

    public void setWeightUnit(Byte weightUnit) {
        this.weightUnit = weightUnit;
    }

    public Byte getBulkUnit() {
        return bulkUnit;
    }

    public void setBulkUnit(Byte bulkUnit) {
        this.bulkUnit = bulkUnit;
    }

    public String getTrademark() {
        return trademark;
    }

    public void setTrademark(String trademark) {
        this.trademark = trademark;
    }

    public String getApproveCode() {
        return approveCode;
    }

    public void setApproveCode(String approveCode) {
        this.approveCode = approveCode;
    }

    public String getPackageType() {
        return packageType;
    }

    public void setPackageType(String packageType) {
        this.packageType = packageType;
    }

    public String getBillName() {
        return billName;
    }

    public void setBillName(String billName) {
        this.billName = billName;
    }

    public double getRate() {
        return rate;
    }

    public void setRate(double rate) {
        this.rate = rate;
    }

    public Byte getStatus() {
        return status;
    }

    public void setStatus(Byte status) {
        this.status = status;
    }

    public Integer getImportId() {
        return importId;
    }

    public void setImportId(Integer importId) {
        this.importId = importId;
    }

    public String getLineCode() {
        return lineCode;
    }

    public void setLineCode(String lineCode) {
        this.lineCode = lineCode;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Product product = (Product) o;

        if (id != product.id) return false;
        if (nature != product.nature) return false;
        if (genre != product.genre) return false;
        if (rate != product.rate) return false;
        if (name != null ? !name.equals(product.name) : product.name != null) return false;
        if (model != null ? !model.equals(product.model) : product.model != null) return false;
        if (batch != null ? !batch.equals(product.batch) : product.batch != null) return false;
        if (storage != null ? !storage.equals(product.storage) : product.storage != null) return false;
        if (countUnit != null ? !countUnit.equals(product.countUnit) : product.countUnit != null) return false;
        if (weightUnit != null ? !weightUnit.equals(product.weightUnit) : product.weightUnit != null) return false;
        if (bulkUnit != null ? !bulkUnit.equals(product.bulkUnit) : product.bulkUnit != null) return false;
        if (trademark != null ? !trademark.equals(product.trademark) : product.trademark != null) return false;
        if (approveCode != null ? !approveCode.equals(product.approveCode) : product.approveCode != null) return false;
        if (packageType != null ? !packageType.equals(product.packageType) : product.packageType != null) return false;
        if (billName != null ? !billName.equals(product.billName) : product.billName != null) return false;
        if (status != null ? !status.equals(product.status) : product.status != null) return false;
        if (importId != null ? !importId.equals(product.importId) : product.importId != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (model != null ? model.hashCode() : 0);
        result = 31 * result + (int) nature;
        result = 31 * result + (int) genre;
        result = 31 * result + (batch != null ? batch.hashCode() : 0);
        result = 31 * result + (storage != null ? storage.hashCode() : 0);
        result = 31 * result + (countUnit != null ? countUnit.hashCode() : 0);
        result = 31 * result + (weightUnit != null ? weightUnit.hashCode() : 0);
        result = 31 * result + (bulkUnit != null ? bulkUnit.hashCode() : 0);
        result = 31 * result + (trademark != null ? trademark.hashCode() : 0);
        result = 31 * result + (approveCode != null ? approveCode.hashCode() : 0);
        result = 31 * result + (packageType != null ? packageType.hashCode() : 0);
        result = 31 * result + (billName != null ? billName.hashCode() : 0);
        result = 31 * result + (int) rate;
        result = 31 * result + (status != null ? status.hashCode() : 0);
        result = 31 * result + (importId != null ? importId.hashCode() : 0);
        return result;
    }

    public Timestamp getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Timestamp createTime) {
        this.createTime = createTime;
    }
}
