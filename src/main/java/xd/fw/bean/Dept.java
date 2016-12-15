package xd.fw.bean;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "t_dept")
public class Dept {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String name;

    private Integer parent;
    @ManyToMany(fetch=FetchType.EAGER)
    @JoinTable(name="t_dept_role" ,joinColumns={@JoinColumn(name="dept_id")}
            ,inverseJoinColumns={@JoinColumn(name="role_id")})
    List<Role> roles;

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

    public Integer getParent() {
        return parent;
    }

    public void setParent(Integer parent) {
        this.parent = parent;
    }

    public void setRoles(List<Role> roles) {
        this.roles = roles;
    }

    public List<Role> getRoles() {
        return roles;
    }
}