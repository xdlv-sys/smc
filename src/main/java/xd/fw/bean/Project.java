package xd.fw.bean;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Timestamp;
import java.util.List;

/**
 * Created by xd on 2016/12/21.
 */
@Entity
@Table(name = "t_project")
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE, generator = "pk_project_id")
    @TableGenerator(name = "pk_project_id", table = "t_primary_key",
            pkColumnName = "table_name", valueColumnName = "current_id",
            initialValue = 100, allocationSize = 100)
    private Integer id;
    private String name;
    private String employer;
    private Byte projectMode;
    private Byte projectType;
    private String manager;
    private String contractNumber;
    private Date contractSignDate;
    private Date contractStartDate;
    private Date contractEndTime;
    private String licenseNumber;
    private Date licenseDate;
    private String projectLocation;
    private Byte supplyMode;
    private Double totalCount;
    private Byte rate;
    private Double untaxedCount;
    private Byte outSource;
    private Byte attach;
    private Byte status;
    private Timestamp createTime;

    @OneToMany(cascade = CascadeType.ALL,fetch=FetchType.EAGER,mappedBy = "project")
    List<ProjectOutSource> outSources;

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

    public String getEmployer() {
        return employer;
    }

    public void setEmployer(String employer) {
        this.employer = employer;
    }

    public Byte getProjectMode() {
        return projectMode;
    }

    public void setProjectMode(Byte projectMode) {
        this.projectMode = projectMode;
    }

    public Byte getProjectType() {
        return projectType;
    }

    public void setProjectType(Byte projectType) {
        this.projectType = projectType;
    }

    public String getManager() {
        return manager;
    }

    public void setManager(String manager) {
        this.manager = manager;
    }

    public String getContractNumber() {
        return contractNumber;
    }

    public void setContractNumber(String contractNumber) {
        this.contractNumber = contractNumber;
    }

    public Date getContractSignDate() {
        return contractSignDate;
    }

    public void setContractSignDate(Date contractSignDate) {
        this.contractSignDate = contractSignDate;
    }

    public Date getContractStartDate() {
        return contractStartDate;
    }

    public void setContractStartDate(Date contractStartDate) {
        this.contractStartDate = contractStartDate;
    }

    public Date getContractEndTime() {
        return contractEndTime;
    }

    public void setContractEndTime(Date contractEndTime) {
        this.contractEndTime = contractEndTime;
    }

    public String getLicenseNumber() {
        return licenseNumber;
    }

    public void setLicenseNumber(String licenseNumber) {
        this.licenseNumber = licenseNumber;
    }

    public Date getLicenseDate() {
        return licenseDate;
    }

    public void setLicenseDate(Date licenseDate) {
        this.licenseDate = licenseDate;
    }

    public String getProjectLocation() {
        return projectLocation;
    }

    public void setProjectLocation(String projectLocation) {
        this.projectLocation = projectLocation;
    }

    public Byte getSupplyMode() {
        return supplyMode;
    }

    public void setSupplyMode(Byte supplyMode) {
        this.supplyMode = supplyMode;
    }

    public Double getTotalCount() {
        return totalCount;
    }

    public void setTotalCount(Double totalCount) {
        this.totalCount = totalCount;
    }

    public Byte getRate() {
        return rate;
    }

    public void setRate(Byte rate) {
        this.rate = rate;
    }

    public Double getUntaxedCount() {
        return untaxedCount;
    }

    public void setUntaxedCount(Double untaxedCount) {
        this.untaxedCount = untaxedCount;
    }

    public Byte getOutSource() {
        return outSource;
    }

    public void setOutSource(Byte outSource) {
        this.outSource = outSource;
    }

    public Byte getAttach() {
        return attach;
    }

    public void setAttach(Byte attach) {
        this.attach = attach;
    }

    public Byte getStatus() {
        return status;
    }

    public void setStatus(Byte status) {
        this.status = status;
    }

    public Timestamp getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Timestamp createTime) {
        this.createTime = createTime;
    }

    public List<ProjectOutSource> getOutSources() {
        return outSources;
    }

    public void setOutSources(List<ProjectOutSource> outSources) {
        this.outSources = outSources;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Project project = (Project) o;

        if (id != null ? !id.equals(project.id) : project.id != null) return false;
        if (name != null ? !name.equals(project.name) : project.name != null) return false;
        if (employer != null ? !employer.equals(project.employer) : project.employer != null) return false;
        if (projectMode != null ? !projectMode.equals(project.projectMode) : project.projectMode != null) return false;
        if (projectType != null ? !projectType.equals(project.projectType) : project.projectType != null) return false;
        if (manager != null ? !manager.equals(project.manager) : project.manager != null) return false;
        if (contractNumber != null ? !contractNumber.equals(project.contractNumber) : project.contractNumber != null)
            return false;
        if (contractSignDate != null ? !contractSignDate.equals(project.contractSignDate) : project.contractSignDate != null)
            return false;
        if (contractStartDate != null ? !contractStartDate.equals(project.contractStartDate) : project.contractStartDate != null)
            return false;
        if (contractEndTime != null ? !contractEndTime.equals(project.contractEndTime) : project.contractEndTime != null)
            return false;
        if (licenseNumber != null ? !licenseNumber.equals(project.licenseNumber) : project.licenseNumber != null)
            return false;
        if (licenseDate != null ? !licenseDate.equals(project.licenseDate) : project.licenseDate != null) return false;
        if (projectLocation != null ? !projectLocation.equals(project.projectLocation) : project.projectLocation != null)
            return false;
        if (supplyMode != null ? !supplyMode.equals(project.supplyMode) : project.supplyMode != null) return false;
        if (totalCount != null ? !totalCount.equals(project.totalCount) : project.totalCount != null) return false;
        if (rate != null ? !rate.equals(project.rate) : project.rate != null) return false;
        if (untaxedCount != null ? !untaxedCount.equals(project.untaxedCount) : project.untaxedCount != null)
            return false;
        if (outSource != null ? !outSource.equals(project.outSource) : project.outSource != null) return false;
        if (attach != null ? !attach.equals(project.attach) : project.attach != null) return false;
        if (status != null ? !status.equals(project.status) : project.status != null) return false;
        if (createTime != null ? !createTime.equals(project.createTime) : project.createTime != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (employer != null ? employer.hashCode() : 0);
        result = 31 * result + (projectMode != null ? projectMode.hashCode() : 0);
        result = 31 * result + (projectType != null ? projectType.hashCode() : 0);
        result = 31 * result + (manager != null ? manager.hashCode() : 0);
        result = 31 * result + (contractNumber != null ? contractNumber.hashCode() : 0);
        result = 31 * result + (contractSignDate != null ? contractSignDate.hashCode() : 0);
        result = 31 * result + (contractStartDate != null ? contractStartDate.hashCode() : 0);
        result = 31 * result + (contractEndTime != null ? contractEndTime.hashCode() : 0);
        result = 31 * result + (licenseNumber != null ? licenseNumber.hashCode() : 0);
        result = 31 * result + (licenseDate != null ? licenseDate.hashCode() : 0);
        result = 31 * result + (projectLocation != null ? projectLocation.hashCode() : 0);
        result = 31 * result + (supplyMode != null ? supplyMode.hashCode() : 0);
        result = 31 * result + (totalCount != null ? totalCount.hashCode() : 0);
        result = 31 * result + (rate != null ? rate.hashCode() : 0);
        result = 31 * result + (untaxedCount != null ? untaxedCount.hashCode() : 0);
        result = 31 * result + (outSource != null ? outSource.hashCode() : 0);
        result = 31 * result + (attach != null ? attach.hashCode() : 0);
        result = 31 * result + (status != null ? status.hashCode() : 0);
        result = 31 * result + (createTime != null ? createTime.hashCode() : 0);
        return result;
    }
}
