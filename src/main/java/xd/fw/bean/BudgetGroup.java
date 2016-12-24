package xd.fw.bean;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

/**
 * Created by xd on 2016/12/24.
 */
@Entity
@Table(name = "t_budget_group")
public class BudgetGroup {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE, generator = "pk_budget_group_id")
    @TableGenerator(name = "pk_budget_group_id", table = "t_primary_key",
            pkColumnName = "table_name", valueColumnName = "current_id",
            initialValue = 100, allocationSize = 100)
    private Integer id;
    private Byte groupIndex;
    private String name;
    private Double total;

    @ManyToOne(fetch= FetchType.LAZY)
    @JoinColumn(name = "project_id")
    @JsonIgnore
    Budget budget;

    @OneToMany(cascade = CascadeType.ALL,fetch=FetchType.EAGER,mappedBy = "group")
    List<GroupItem> items;

    public List<GroupItem> getItems() {
        return items;
    }

    public void setItems(List<GroupItem> items) {
        this.items = items;
    }

    public Budget getBudget() {
        return budget;
    }

    public void setBudget(Budget budget) {
        this.budget = budget;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Byte getGroupIndex() {
        return groupIndex;
    }

    public void setGroupIndex(Byte groupIndex) {
        this.groupIndex = groupIndex;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

        BudgetGroup that = (BudgetGroup) o;

        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (groupIndex != null ? !groupIndex.equals(that.groupIndex) : that.groupIndex != null) return false;
        if (name != null ? !name.equals(that.name) : that.name != null) return false;
        if (total != null ? !total.equals(that.total) : that.total != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (total != null ? total.hashCode() : 0);
        return result;
    }
}
