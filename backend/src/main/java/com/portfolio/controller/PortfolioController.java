package com.portfolio.controller;

import com.portfolio.model.*;
import com.portfolio.repository.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PortfolioController {

    private final ProfileRepository profileRepository;
    private final SkillRepository skillRepository;
    private final ProjectRepository projectRepository;
    private final ExperienceRepository experienceRepository;

    public PortfolioController(ProfileRepository profileRepository,
                                SkillRepository skillRepository,
                                ProjectRepository projectRepository,
                                ExperienceRepository experienceRepository) {
        this.profileRepository = profileRepository;
        this.skillRepository = skillRepository;
        this.projectRepository = projectRepository;
        this.experienceRepository = experienceRepository;
    }

    // ========================
    // HEALTH CHECK
    // ========================

    @GetMapping("/health")
    public ResponseEntity<String> health() {
        return ResponseEntity.ok("OK");
    }

    // ========================
    // PROFILE ENDPOINTS
    // ========================

    @GetMapping("/profile")
    public ResponseEntity<Profile> getProfile() {
        return profileRepository.findAll().stream().findFirst()
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/profile")
    public Profile createProfile(@RequestBody Profile profile) {
        return profileRepository.save(profile);
    }

    @PutMapping("/profile/{id}")
    public ResponseEntity<Profile> updateProfile(@PathVariable Long id, @RequestBody Profile profileDetails) {
        return profileRepository.findById(id)
                .map(profile -> {
                    profile.setName(profileDetails.getName());
                    profile.setTitle(profileDetails.getTitle());
                    profile.setIntro(profileDetails.getIntro());
                    profile.setAbout(profileDetails.getAbout());
                    profile.setResumeUrl(profileDetails.getResumeUrl());
                    return ResponseEntity.ok(profileRepository.save(profile));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/profile/{id}")
    public ResponseEntity<Void> deleteProfile(@PathVariable Long id) {
        return profileRepository.findById(id)
                .map(profile -> {
                    profileRepository.delete(profile);
                    return ResponseEntity.ok().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // ========================
    // SKILLS ENDPOINTS
    // ========================

    @GetMapping("/skills")
    public List<Skill> getAllSkills() {
        return skillRepository.findAll();
    }

    @PostMapping("/skills")
    public Skill createSkill(@RequestBody Skill skill) {
        return skillRepository.save(skill);
    }

    @PutMapping("/skills/{id}")
    public ResponseEntity<Skill> updateSkill(@PathVariable Long id, @RequestBody Skill skillDetails) {
        return skillRepository.findById(id)
                .map(skill -> {
                    skill.setName(skillDetails.getName());
                    skill.setCategory(skillDetails.getCategory());
                    skill.setProficiency(skillDetails.getProficiency());
                    return ResponseEntity.ok(skillRepository.save(skill));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/skills/{id}")
    public ResponseEntity<Void> deleteSkill(@PathVariable Long id) {
        return skillRepository.findById(id)
                .map(skill -> {
                    skillRepository.delete(skill);
                    return ResponseEntity.ok().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // ========================
    // PROJECTS ENDPOINTS
    // ========================

    @GetMapping("/projects")
    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    @PostMapping("/projects")
    public Project createProject(@RequestBody Project project) {
        return projectRepository.save(project);
    }

    @PutMapping("/projects/{id}")
    public ResponseEntity<Project> updateProject(@PathVariable Long id, @RequestBody Project projectDetails) {
        return projectRepository.findById(id)
                .map(project -> {
                    project.setTitle(projectDetails.getTitle());
                    project.setDescription(projectDetails.getDescription());
                    project.setLink(projectDetails.getLink());
                    project.setImageUrl(projectDetails.getImageUrl());
                    return ResponseEntity.ok(projectRepository.save(project));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/projects/{id}")
    public ResponseEntity<Void> deleteProject(@PathVariable Long id) {
        return projectRepository.findById(id)
                .map(project -> {
                    projectRepository.delete(project);
                    return ResponseEntity.ok().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // ========================
    // EXPERIENCES ENDPOINTS
    // ========================

    @GetMapping("/experiences")
    public List<Experience> getAllExperiences() {
        return experienceRepository.findAll();
    }

    @PostMapping("/experiences")
    public Experience createExperience(@RequestBody Experience experience) {
        return experienceRepository.save(experience);
    }

    @PutMapping("/experiences/{id}")
    public ResponseEntity<Experience> updateExperience(@PathVariable Long id, @RequestBody Experience experienceDetails) {
        return experienceRepository.findById(id)
                .map(experience -> {
                    experience.setRole(experienceDetails.getRole());
                    experience.setCompany(experienceDetails.getCompany());
                    experience.setStartDate(experienceDetails.getStartDate());
                    experience.setEndDate(experienceDetails.getEndDate());
                    experience.setDescription(experienceDetails.getDescription());
                    return ResponseEntity.ok(experienceRepository.save(experience));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/experiences/{id}")
    public ResponseEntity<Void> deleteExperience(@PathVariable Long id) {
        return experienceRepository.findById(id)
                .map(experience -> {
                    experienceRepository.delete(experience);
                    return ResponseEntity.ok().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
