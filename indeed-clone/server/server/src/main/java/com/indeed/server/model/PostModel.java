package com.indeed.server.model;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "posts")
@Data
public class PostModel {

    @NotNull
    @NotEmpty
    private String profile;

    @NotNull
    private String type;

    @NotNull
    private String description;

    @NotNull
    private String experience;

    @NotNull
    private String[] technology;

    @NotNull
    private String salary;

    @CreatedDate
    private Date createdAt;

    public void setProfile(String profile) {
        this.profile = profile;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setSalary(String salary) {
        this.salary = salary;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setExperience(String experience) {
        this.experience = experience;
    }

    public void setTechnology(String[] technology) {
        this.technology = technology;
    }
}
