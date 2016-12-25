package xd.fw.bean;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Date;

/**
 * Created by xd on 2016/12/25.
 */
@Entity
@Table(name = "t_contract_progress")
public class ContractProgress {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE, generator = "pk_contract_progress_id")
    @TableGenerator(name = "pk_contract_progress_id", table = "t_primary_key",
            pkColumnName = "table_name", valueColumnName = "current_id",
            initialValue = 100, allocationSize = 100)
    private Integer id;
    private Date belong;
    private Double finished;
    private String importUser;
    @Transient
    private Timestamp updateDate;

    @ManyToOne(fetch= FetchType.EAGER)
    @JoinColumn(name = "project_id")
    Project project;

    public void setProject(Project project) {
        this.project = project;
    }

    public Project getProject() {
        return project;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getBelong() {
        return belong;
    }

    public void setBelong(Date belong) {
        this.belong = belong;
    }

    public Double getFinished() {
        return finished;
    }

    public void setFinished(Double finished) {
        this.finished = finished;
    }

    public String getImportUser() {
        return importUser;
    }

    public void setImportUser(String importUser) {
        this.importUser = importUser;
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

        ContractProgress that = (ContractProgress) o;

        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (belong != null ? !belong.equals(that.belong) : that.belong != null) return false;
        if (finished != null ? !finished.equals(that.finished) : that.finished != null) return false;
        if (importUser != null ? !importUser.equals(that.importUser) : that.importUser != null) return false;
        if (updateDate != null ? !updateDate.equals(that.updateDate) : that.updateDate != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (belong != null ? belong.hashCode() : 0);
        result = 31 * result + (finished != null ? finished.hashCode() : 0);
        result = 31 * result + (importUser != null ? importUser.hashCode() : 0);
        result = 31 * result + (updateDate != null ? updateDate.hashCode() : 0);
        return result;
    }
}
