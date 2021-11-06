package com.example.movids.model;
import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.sql.Date;

@Entity
@Table(name="serials")
public class Serials {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_S")
    private Long id_S;

    @NotEmpty
    @Column(unique = true)
    private String name;
    @NotEmpty
    private String type;
    @NotEmpty
    @Column(name = "rate")
    private String rate;

    @NotNull
    private Long viewership;
    @Column
    private String description;
    @Column
    private String video;
    @Column
    private String img;

    public Long getId_S() {
        return id_S;
    }

    public void setId_S(Long id_S) {
        this.id_S = id_S;
    }
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getVideo() {
        return video;
    }

    public void setVideo(String video) {
        this.video = video;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }



    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getRate() {
        return rate;
    }

    public void setRate(String rate) {
        this.rate = rate;
    }

    public Long getViewership() {
        return viewership;
    }

    public void setViewership(Long viewership) {
        this.viewership = viewership;
    }
}
