package xd.fw.bean;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by xd on 1/20/2017.
 */
@Entity
@Table(name = "t_project_addition")
public class ProjectAddition {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE, generator = "pk_project_addition_id")
    @TableGenerator(name = "pk_project_addition_id", table = "t_primary_key",
            pkColumnName = "table_name", valueColumnName = "current_id")
    private Integer id;
    private Integer projectId;
    private Date belong;
    private String progress;
    private String progress2;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getProjectId() {
        return projectId;
    }

    public void setProjectId(Integer projectId) {
        this.projectId = projectId;
    }

    public Date getBelong() {
        return belong;
    }

    public void setBelong(Date belong) {
        this.belong = belong;
    }

    public String getProgress() {
        return progress;
    }

    public void setProgress(String progress) {
        this.progress = progress;
    }

    public String getProgress2() {
        return progress2;
    }

    public void setProgress2(String progress2) {
        this.progress2 = progress2;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ProjectAddition that = (ProjectAddition) o;

        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (projectId != null ? !projectId.equals(that.projectId) : that.projectId != null) return false;
        if (belong != null ? !belong.equals(that.belong) : that.belong != null) return false;
        if (progress != null ? !progress.equals(that.progress) : that.progress != null) return false;
        if (progress2 != null ? !progress2.equals(that.progress2) : that.progress2 != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (projectId != null ? projectId.hashCode() : 0);
        result = 31 * result + (belong != null ? belong.hashCode() : 0);
        result = 31 * result + (progress != null ? progress.hashCode() : 0);
        result = 31 * result + (progress2 != null ? progress2.hashCode() : 0);
        return result;
    }
}
