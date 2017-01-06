package xd.fw.bean;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Timestamp;
import java.util.List;
import java.util.Set;

/**
 * Created by xd on 2016/12/24.
 */
@Entity
@Table(name = "t_budget")
public class Budget {
    @Id
    private Integer projectId;
    private String importName;
    private Date reportDate;
    private String importUser;
    private Timestamp importDate;

    @OneToOne
    @JoinColumn(name="project_id")
    @Fetch(FetchMode.SELECT)
    private Project project;

    @OneToMany(cascade = CascadeType.ALL,fetch=FetchType.EAGER,mappedBy = "budget")
    Set<BudgetGroup> groups;

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public Integer getProjectId() {
        return projectId;
    }

    public void setProjectId(Integer projectId) {
        this.projectId = projectId;
    }

    public String getImportName() {
        return importName;
    }

    public void setImportName(String importName) {
        this.importName = importName;
    }

    public Date getReportDate() {
        return reportDate;
    }

    public void setReportDate(Date reportDate) {
        this.reportDate = reportDate;
    }

    public String getImportUser() {
        return importUser;
    }

    public void setImportUser(String importUser) {
        this.importUser = importUser;
    }

    public Timestamp getImportDate() {
        return importDate;
    }

    public void setImportDate(Timestamp importDate) {
        this.importDate = importDate;
    }

    public void setGroups(Set<BudgetGroup> groups) {
        this.groups = groups;
    }

    public Set<BudgetGroup> getGroups() {
        return groups;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Budget budget = (Budget) o;

        if (projectId != null ? !projectId.equals(budget.projectId) : budget.projectId != null) return false;
        if (importName != null ? !importName.equals(budget.importName) : budget.importName != null) return false;
        if (reportDate != null ? !reportDate.equals(budget.reportDate) : budget.reportDate != null) return false;
        if (importUser != null ? !importUser.equals(budget.importUser) : budget.importUser != null) return false;
        if (importDate != null ? !importDate.equals(budget.importDate) : budget.importDate != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = projectId != null ? projectId.hashCode() : 0;
        result = 31 * result + (importName != null ? importName.hashCode() : 0);
        result = 31 * result + (reportDate != null ? reportDate.hashCode() : 0);
        result = 31 * result + (importUser != null ? importUser.hashCode() : 0);
        result = 31 * result + (importDate != null ? importDate.hashCode() : 0);
        return result;
    }
}
