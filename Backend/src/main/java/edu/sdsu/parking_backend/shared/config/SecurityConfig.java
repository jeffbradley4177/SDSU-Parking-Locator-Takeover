package edu.sdsu.parking_backend;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            // DEV only: disable CSRF so H2 console POSTs work
            .csrf(csrf -> csrf.disable())

            // Allow frames so H2 console can render
            .headers(headers -> headers.frameOptions(frame -> frame.disable()))

            // Permit access to H2 console; tighten rules for other endpoints as needed
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/h2-console/**").permitAll()
                .anyRequest().permitAll()
            );

        return http.build();
    }
}
