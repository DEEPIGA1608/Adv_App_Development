package com.recharge.mobilerecharge.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Getter
@Setter
@Table(name="Addons")
public class Addons 
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long addonId;

    @Column(name="addon_name")
    private String addonName;

    @Column(name="addon_price")
    private double addonPrice;
    
    @Column(name="addon_details")
    private String addonDetails;

    @Column(name="addon_validity")
    private String addonValidity;

    // @OneToMany(mappedBy = "Addons")
    // private List<Recharge> recharges;

}
 

