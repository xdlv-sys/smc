package xd.fw.bean;

import javax.persistence.*;
import java.sql.Date;

/**
 * Created by xd on 2016/12/21.
 */
@Entity
@Table(name = "t_project_out_source")
public class ProjectOutSource {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE, generator = "pk_project_out_source_id")
    @TableGenerator(name = "pk_project_out_source_id", table = "t_primary_key",
            pkColumnName = "table_name", valueColumnName = "current_id",
            initialValue = 100, allocationSize = 100)
    private Integer id;
    private String contractName;
    private String unitName;
    private String address;
    private Date signDate;
    private Date startDate;
    private String location;
    private Byte supply;
    private Double count;
    private Integer projectId;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getContractName() {
        return contractName;
    }

    public void setContractName(String contractName) {
        this.contractName = contractName;
    }

    public String getUnitName() {
        return unitName;
    }

    public void setUnitName(String unitName) {
        this.unitName = unitName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Date getSignDate() {
        return signDate;
    }

    public void setSignDate(Date signDate) {
        this.signDate = signDate;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Byte getSupply() {
        return supply;
    }

    public void setSupply(Byte supply) {
        this.supply = supply;
    }

    public Double getCount() {
        return count;
    }

    public void setCount(Double count) {
        this.count = count;
    }

    public Integer getProjectId() {
        return projectId;
    }

    public void setProjectId(Integer projectId) {
        this.projectId = projectId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ProjectOutSource that = (ProjectOutSource) o;

        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (contractName != null ? !contractName.equals(that.contractName) : that.contractName != null) return false;
        if (unitName != null ? !unitName.equals(that.unitName) : that.unitName != null) return false;
        if (address != null ? !address.equals(that.address) : that.address != null) return false;
        if (signDate != null ? !signDate.equals(that.signDate) : that.signDate != null) return false;
        if (startDate != null ? !startDate.equals(that.startDate) : that.startDate != null) return false;
        if (location != null ? !location.equals(that.location) : that.location != null) return false;
        if (supply != null ? !supply.equals(that.supply) : that.supply != null) return false;
        if (count != null ? !count.equals(that.count) : that.count != null) return false;
        if (projectId != null ? !projectId.equals(that.projectId) : that.projectId != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (contractName != null ? contractName.hashCode() : 0);
        result = 31 * result + (unitName != null ? unitName.hashCode() : 0);
        result = 31 * result + (address != null ? address.hashCode() : 0);
        result = 31 * result + (signDate != null ? signDate.hashCode() : 0);
        result = 31 * result + (startDate != null ? startDate.hashCode() : 0);
        result = 31 * result + (location != null ? location.hashCode() : 0);
        result = 31 * result + (supply != null ? supply.hashCode() : 0);
        result = 31 * result + (count != null ? count.hashCode() : 0);
        result = 31 * result + (projectId != null ? projectId.hashCode() : 0);
        return result;
    }
}
