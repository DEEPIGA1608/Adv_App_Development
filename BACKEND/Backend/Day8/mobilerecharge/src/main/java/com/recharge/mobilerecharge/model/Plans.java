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
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name="plans")
public class Plans
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long planId;

    @Column(name="plan_type")
    private String planType;

    @Column(name="plan_name")
    private String planName;

    @Column(name="plan_validity")
    private String planValidity;

    @Column(name="plan_details")
    private String planDetails;

    @Column(name="plan_price")
    private double planPrice;

    // private List<Recharge> recharge;


}

