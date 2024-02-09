package com.recharge.mobilerecharge.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PlansDto {

    private Long planId;
    private String planType;
    private String planName;
    private String planValidity;
    private String planDetails;
    private double planPrice;
    // private List<Recharge> recharge;

}
