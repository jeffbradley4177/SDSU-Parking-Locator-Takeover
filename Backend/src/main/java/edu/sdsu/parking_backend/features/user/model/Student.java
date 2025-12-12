package edu.sdsu.parking_backend.features.user.model;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
@DiscriminatorValue("STUDENT")
public class Student extends User {
    private String studentID;
    private String carInfo;
    // REMOVED: ParkingLotService and the complex @RequiredArgsConstructor
}