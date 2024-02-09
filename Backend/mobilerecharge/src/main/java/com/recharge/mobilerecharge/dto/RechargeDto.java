package com.recharge.mobilerecharge.dto;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RechargeDto 
{
    private Long rechargeId;
    private double rechargePrice;
    private String status;
    private Date date;
    // private Plans plan;
    // private Addons addon;

}
