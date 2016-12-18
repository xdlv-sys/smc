package xd.fw.bean;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "t_role")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE, generator = "pk_role_id")
    @TableGenerator(name = "pk_role_id", table = "t_primary_key",
            pkColumnName = "table_name", valueColumnName = "current_id",
            initialValue = 100, allocationSize = 100)
    private Integer id;
    @Column(name="name")
    private String name;

    @ManyToMany(fetch=FetchType.EAGER)
    @JoinTable(name="t_role_mod" ,joinColumns={@JoinColumn(name="role_id")}
            ,inverseJoinColumns={@JoinColumn(name="mod_id")})
    @Fetch(FetchMode.SELECT)
    private List<Mod> mods;

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

    public void setMods(List<Mod> mods) {
        this.mods = mods;
    }

    public List<Mod> getMods() {
        return mods;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Role role = (Role) o;

        if (id != null ? !id.equals(role.id) : role.id != null) return false;
        return name != null ? name.equals(role.name) : role.name == null;

    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        return result;
    }
}