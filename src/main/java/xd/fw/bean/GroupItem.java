package xd.fw.bean;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

/**
 * Created by xd on 2016/12/24.
 */
@Entity
@Table(name = "t_group_item")
public class GroupItem {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE, generator = "pk_group_item_id")
    @TableGenerator(name = "pk_group_item_id", table = "t_primary_key",
            pkColumnName = "table_name", valueColumnName = "current_id",
            initialValue = 100, allocationSize = 100)
    private Integer id;
    private Integer itemIndex;
    private String materialName;
    private String model;
    private String unit;
    private Double count;
    private Double price;
    private Double total;

    @ManyToOne(fetch= FetchType.LAZY)
    @JoinColumn(name = "group_id")
    @JsonIgnore
    BudgetGroup group;

    public void setGroup(BudgetGroup group) {
        this.group = group;
    }

    public BudgetGroup getGroup() {
        return group;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getItemIndex() {
        return itemIndex;
    }

    public void setItemIndex(Integer itemIndex) {
        this.itemIndex = itemIndex;
    }

    public String getMaterialName() {
        return materialName;
    }

    public void setMaterialName(String materialName) {
        this.materialName = materialName;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public Double getCount() {
        return count;
    }

    public void setCount(Double count) {
        this.count = count;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
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

        GroupItem groupItem = (GroupItem) o;

        if (id != null ? !id.equals(groupItem.id) : groupItem.id != null) return false;
        if (itemIndex != null ? !itemIndex.equals(groupItem.itemIndex) : groupItem.itemIndex != null) return false;
        if (materialName != null ? !materialName.equals(groupItem.materialName) : groupItem.materialName != null)
            return false;
        if (model != null ? !model.equals(groupItem.model) : groupItem.model != null) return false;
        if (unit != null ? !unit.equals(groupItem.unit) : groupItem.unit != null) return false;
        if (count != null ? !count.equals(groupItem.count) : groupItem.count != null) return false;
        if (price != null ? !price.equals(groupItem.price) : groupItem.price != null) return false;
        if (total != null ? !total.equals(groupItem.total) : groupItem.total != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (itemIndex != null ? itemIndex.hashCode() : 0);
        result = 31 * result + (materialName != null ? materialName.hashCode() : 0);
        result = 31 * result + (model != null ? model.hashCode() : 0);
        result = 31 * result + (unit != null ? unit.hashCode() : 0);
        result = 31 * result + (count != null ? count.hashCode() : 0);
        result = 31 * result + (price != null ? price.hashCode() : 0);
        result = 31 * result + (total != null ? total.hashCode() : 0);
        return result;
    }
}
