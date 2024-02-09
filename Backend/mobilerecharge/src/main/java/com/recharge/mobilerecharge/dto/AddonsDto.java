package com.recharge.mobilerecharge.dto;



import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AddonsDto
{
    
    private Long addonId;
    private String addonName;
    private double addonPrice;
    private String addonDetails;
    private String addonValidity;
    // private List<Recharge> recharges;

}
