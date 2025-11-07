package edu.sdsu.parking_backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.Transient;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Entity
@Data
@NoArgsConstructor(force = true)
@RequiredArgsConstructor(onConstructor_ = @__(@Autowired))
@EqualsAndHashCode(callSuper = true)
@DiscriminatorValue("STUDENT") // links this to the user inheritance table
public class Student extends User 
{
    private String studentID;
    private String carInfo;
    @Transient
    private transient final ParkingLotService parkingLotService;
}

