package edu.sdsu.parking_backend;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    private final Admin admin;

    public AdminController(Admin admin) {
        this.admin = admin;
        this.admin.setAdminID("ADM001"); // prototype id
    }

    // Mock login/logout toggles the in-memory flag on the Admin bean
    @PostMapping("/login")
    public String login()  { admin.login();  return "admin logged in"; }

    @PostMapping("/logout")
    public String logout() { admin.logout(); return "admin logged out"; }

    // endpoint: admin requests analytics usage report
    @GetMapping("/analytics")
    public ResponseEntity<Analytics> analyticsReport() {
        Analytics report = admin.generateUsageReport();
        if (report == null) {
            return ResponseEntity.status(403).build(); // not logged in or failed
        }
        return ResponseEntity.ok(report);
    }

    // Optional: delete a user via Admin.manageUsers("DELETE", email)
    @DeleteMapping("/users/{email}")
    public java.util.Map<String, Object> deleteUser(@PathVariable String email) {
        return java.util.Map.of("ok", admin.manageUsers("DELETE", email));
    }
}

