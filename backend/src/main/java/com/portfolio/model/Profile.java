package com.portfolio.model;

import jakarta.persistence.*;

@Entity
@Table(name = "profiles")
public class Profile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String title;

    private String intro;

    @Column(columnDefinition = "TEXT")
    private String about;

    private String resumeUrl;

    // Default constructor
    public Profile() {}

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getIntro() { return intro; }
    public void setIntro(String intro) { this.intro = intro; }

    public String getAbout() { return about; }
    public void setAbout(String about) { this.about = about; }

    public String getResumeUrl() { return resumeUrl; }
    public void setResumeUrl(String resumeUrl) { this.resumeUrl = resumeUrl; }
}
