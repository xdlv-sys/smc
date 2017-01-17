package xd.fw.bean;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by xd on 2017/1/17.
 */
@Entity
@Table(name = "t_project_receipt")
public class ProjectReceipt {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE, generator = "pk_project_receipt_id")
    @TableGenerator(name = "pk_project_receipt_id", table = "t_primary_key",
            pkColumnName = "table_name", valueColumnName = "current_id")
    private Integer id;
    private Date belong;
    private Double count;
    private Date createTime;

    @ManyToOne(fetch= FetchType.EAGER)
    @JoinColumn(name = "project_id")
    Project project;

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
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

    public Double getCount() {
        return count;
    }

    public void setCount(Double count) {
        this.count = count;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ProjectReceipt that = (ProjectReceipt) o;

        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (belong != null ? !belong.equals(that.belong) : that.belong != null) return false;
        if (count != null ? !count.equals(that.count) : that.count != null) return false;
        if (createTime != null ? !createTime.equals(that.createTime) : that.createTime != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (belong != null ? belong.hashCode() : 0);
        result = 31 * result + (count != null ? count.hashCode() : 0);
        result = 31 * result + (createTime != null ? createTime.hashCode() : 0);
        return result;
    }


}
