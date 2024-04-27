package com.example.demo.ComplaintDTO;

import org.springframework.stereotype.Component;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@ComponentScan(basePackages = { "com.example.demo" })
@Component
@RestController
public class ComplaintDTO {

    private int id;

    private String name;

    private String department;

    private String complaintTitle;

    private String complaintDescription;

    private String location;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getComplaintTitle() {
        return complaintTitle;
    }

    public void setComplaintTitle(String complaintTitle) {
        this.complaintTitle = complaintTitle;
    }

    public String getComplaintDescription() {
        return complaintDescription;
    }

    public void setComplaintDescription(String complaintDescription) {
        this.complaintDescription = complaintDescription;
    }

    public ComplaintDTO(int id, String name, String department, String complaintTitle, String complaintDescription,
            String location) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.complaintTitle = complaintTitle;
        this.complaintDescription = complaintDescription;
        this.location = location;

    }

    public ComplaintDTO() {

    }

    @Override
    public String toString() {
        return "Complaint{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", department='" + department + '\'' +
                ", complaintTitle='" + complaintTitle + '\'' +
                ", complaintDescription='" + complaintDescription + '\'' +
                ", location='" + location + '\''
                + '}';
    }

}