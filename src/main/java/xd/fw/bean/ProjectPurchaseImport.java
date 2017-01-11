package xd.fw.bean;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Date;

/**
 * Created by xd on 1/11/2017.
 */
@Entity
@Table(name = "T_PROJECT_PURCHASE_IMPORT")
public class ProjectPurchaseImport {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE, generator = "pk_project_purchase_import_id")
    @TableGenerator(name = "pk_project_purchase_import_id", table = "t_primary_key",
            pkColumnName = "table_name", valueColumnName = "current_id")
    private Integer id;
    private String operator;
    private Integer projectId;
    private Date belong;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Timestamp createTime;

    public ProjectPurchaseImport(){
        createTime = new Timestamp(System.currentTimeMillis());
    }
    public ProjectPurchaseImport(String operator, Integer projectId, Date belong){
        this();
        this.operator = operator;
        this.projectId = projectId;
        this.belong = belong;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getOperator() {
        return operator;
    }

    public void setOperator(String operator) {
        this.operator = operator;
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

    public Timestamp getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Timestamp createTime) {
        this.createTime = createTime;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ProjectPurchaseImport that = (ProjectPurchaseImport) o;

        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (operator != null ? !operator.equals(that.operator) : that.operator != null) return false;
        if (projectId != null ? !projectId.equals(that.projectId) : that.projectId != null) return false;
        if (belong != null ? !belong.equals(that.belong) : that.belong != null) return false;
        if (createTime != null ? !createTime.equals(that.createTime) : that.createTime != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (operator != null ? operator.hashCode() : 0);
        result = 31 * result + (projectId != null ? projectId.hashCode() : 0);
        result = 31 * result + (belong != null ? belong.hashCode() : 0);
        result = 31 * result + (createTime != null ? createTime.hashCode() : 0);
        return result;
    }
}
