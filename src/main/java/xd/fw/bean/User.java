package xd.fw.bean;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "t_user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE, generator = "pk_user_id")
    @TableGenerator(name = "pk_user_id", table = "t_primary_key",
            pkColumnName = "table_name", valueColumnName = "current_id",
            initialValue = 100, allocationSize = 1000)
    private Integer id;
    @Column(name = "name")
    private String name;

    @Column(name = "password")
    private String password;

    @Column(name="mail")
    private String mail;

    @ManyToMany(cascade={CascadeType.PERSIST},fetch=FetchType.EAGER)
    @JoinTable(name="t_user_role" ,joinColumns={@JoinColumn(name="user_id")}
            ,inverseJoinColumns={@JoinColumn(name="role_id")})
    private List<Role> roles;

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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public List<Role> getRoles() {
        return roles;
    }

    public void setRoles(List<Role> roles) {
        this.roles = roles;
    }

}