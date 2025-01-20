package com.indeed.server.dto;

import lombok.Data;

import java.util.List;

@Data
public class PostDTO {

    private String profile;

    private String type;

    private String description;

    private String experience;

    private String[] technology;

    private String salary;

    public String getProfile() {
        return profile;
    }

    public String getType() {
        return type;
    }

    public String getDescription() {
        return description;
    }

    public String getExperience() {
        return experience;
    }

    public String[] getTechnology() {
        return technology;
    }

    public String getSalary() {
        return salary;
    }


}
