package xd.fw.bean;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.sql.Time;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

/**
 * Created by xd on 2017/1/7.
 */
@Entity
@Table (name = "t_supplier")
public class Supplier {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE, generator = "pk_supplier_id")
    @TableGenerator(name = "pk_supplier_id", table = "t_primary_key",
            pkColumnName = "table_name", valueColumnName = "current_id",
            initialValue = 100, allocationSize = 100)
    private Integer id;
    private String licenseCode;
    private String name;
    private Byte identityType;
    private String legalPerson;
    private Integer assets;
    private Date licenseDate;
    private String runScope;
    private String address;
    private String telephone;
    private String bank;
    private String bankNumber;
    private String licenseImg;
    private String registryImg;
    private String organizationImg;
    private String openAccountImg;
    private Integer dept;
    private Timestamp updateDate;

    @OneToMany(cascade = CascadeType.ALL,fetch=FetchType.EAGER,mappedBy = "supplier")
    List<SupplierType> supplierTypes;

    @OneToMany(cascade = CascadeType.ALL,fetch=FetchType.EAGER,mappedBy = "supplier")
    @Fetch(FetchMode.SUBSELECT)
    List<SupplierSubType> supplierSubTypes;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public List<SupplierSubType> getSupplierSubTypes() {
        return supplierSubTypes;
    }

    public void setSupplierSubTypes(List<SupplierSubType> supplierSubTypes) {
        this.supplierSubTypes = supplierSubTypes;
    }

    public List<SupplierType> getSupplierTypes() {
        return supplierTypes;
    }

    public void setSupplierTypes(List<SupplierType> supplierTypes) {
        this.supplierTypes = supplierTypes;
    }

    public String getLicenseCode() {
        return licenseCode;
    }

    public void setLicenseCode(String licenseCode) {
        this.licenseCode = licenseCode;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Byte getIdentityType() {
        return identityType;
    }

    public void setIdentityType(Byte identityType) {
        this.identityType = identityType;
    }

    public String getLegalPerson() {
        return legalPerson;
    }

    public void setLegalPerson(String legalPerson) {
        this.legalPerson = legalPerson;
    }

    public Integer getAssets() {
        return assets;
    }

    public void setAssets(Integer assets) {
        this.assets = assets;
    }

    public Date getLicenseDate() {
        return licenseDate;
    }

    public void setLicenseDate(Date licenseDate) {
        this.licenseDate = licenseDate;
    }

    public String getRunScope() {
        return runScope;
    }

    public void setRunScope(String runScope) {
        this.runScope = runScope;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telphone) {
        this.telephone = telphone;
    }

    public String getBank() {
        return bank;
    }

    public void setBank(String bank) {
        this.bank = bank;
    }

    public String getBankNumber() {
        return bankNumber;
    }

    public void setBankNumber(String bankNumber) {
        this.bankNumber = bankNumber;
    }

    public String getLicenseImg() {
        return licenseImg;
    }

    public void setLicenseImg(String licenseImg) {
        this.licenseImg = licenseImg;
    }

    public String getRegistryImg() {
        return registryImg;
    }

    public void setRegistryImg(String registryImg) {
        this.registryImg = registryImg;
    }

    public String getOrganizationImg() {
        return organizationImg;
    }

    public void setOrganizationImg(String organizationImg) {
        this.organizationImg = organizationImg;
    }

    public String getOpenAccountImg() {
        return openAccountImg;
    }

    public void setOpenAccountImg(String openAccountImg) {
        this.openAccountImg = openAccountImg;
    }

    public Integer getDept() {
        return dept;
    }

    public void setDept(Integer dept) {
        this.dept = dept;
    }

    public Timestamp getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(Timestamp updateDate) {
        this.updateDate = updateDate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Supplier supplier = (Supplier) o;

        if (id != null ? !id.equals(supplier.id) : supplier.id != null) return false;
        if (licenseCode != null ? !licenseCode.equals(supplier.licenseCode) : supplier.licenseCode != null)
            return false;
        if (name != null ? !name.equals(supplier.name) : supplier.name != null) return false;
        if (identityType != null ? !identityType.equals(supplier.identityType) : supplier.identityType != null)
            return false;
        if (legalPerson != null ? !legalPerson.equals(supplier.legalPerson) : supplier.legalPerson != null)
            return false;
        if (assets != null ? !assets.equals(supplier.assets) : supplier.assets != null) return false;
        if (licenseDate != null ? !licenseDate.equals(supplier.licenseDate) : supplier.licenseDate != null)
            return false;
        if (runScope != null ? !runScope.equals(supplier.runScope) : supplier.runScope != null) return false;
        if (address != null ? !address.equals(supplier.address) : supplier.address != null) return false;
        if (telephone != null ? !telephone.equals(supplier.telephone) : supplier.telephone != null) return false;
        if (bank != null ? !bank.equals(supplier.bank) : supplier.bank != null) return false;
        if (bankNumber != null ? !bankNumber.equals(supplier.bankNumber) : supplier.bankNumber != null) return false;
        if (licenseImg != null ? !licenseImg.equals(supplier.licenseImg) : supplier.licenseImg != null) return false;
        if (registryImg != null ? !registryImg.equals(supplier.registryImg) : supplier.registryImg != null)
            return false;
        if (organizationImg != null ? !organizationImg.equals(supplier.organizationImg) : supplier.organizationImg != null)
            return false;
        if (openAccountImg != null ? !openAccountImg.equals(supplier.openAccountImg) : supplier.openAccountImg != null)
            return false;
        if (dept != null ? !dept.equals(supplier.dept) : supplier.dept != null) return false;
        if (updateDate != null ? !updateDate.equals(supplier.updateDate) : supplier.updateDate != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (licenseCode != null ? licenseCode.hashCode() : 0);
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (identityType != null ? identityType.hashCode() : 0);
        result = 31 * result + (legalPerson != null ? legalPerson.hashCode() : 0);
        result = 31 * result + (assets != null ? assets.hashCode() : 0);
        result = 31 * result + (licenseDate != null ? licenseDate.hashCode() : 0);
        result = 31 * result + (runScope != null ? runScope.hashCode() : 0);
        result = 31 * result + (address != null ? address.hashCode() : 0);
        result = 31 * result + (telephone != null ? telephone.hashCode() : 0);
        result = 31 * result + (bank != null ? bank.hashCode() : 0);
        result = 31 * result + (bankNumber != null ? bankNumber.hashCode() : 0);
        result = 31 * result + (licenseImg != null ? licenseImg.hashCode() : 0);
        result = 31 * result + (registryImg != null ? registryImg.hashCode() : 0);
        result = 31 * result + (organizationImg != null ? organizationImg.hashCode() : 0);
        result = 31 * result + (openAccountImg != null ? openAccountImg.hashCode() : 0);
        result = 31 * result + (dept != null ? dept.hashCode() : 0);
        result = 31 * result + (updateDate != null ? updateDate.hashCode() : 0);
        return result;
    }
}
