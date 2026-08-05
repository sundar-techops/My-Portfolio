package com.portfolio.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Value("${admin.username}")
    private String adminUsername;

    @Value("${admin.password}")
    private String adminPassword;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> credentials) {
        String username = credentials.get("username");
        String password = credentials.get("password");

        if (adminUsername.equals(username) && adminPassword.equals(password)) {
            return ResponseEntity.ok(Map.of("message", "Login successful", "authenticated", true));
        }

        return ResponseEntity.status(401).body(Map.of("message", "Invalid credentials", "authenticated", false));
    }
}
