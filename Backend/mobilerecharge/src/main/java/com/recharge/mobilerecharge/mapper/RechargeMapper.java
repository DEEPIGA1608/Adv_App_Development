package com.recharge.mobilerecharge.mapper;

import com.recharge.mobilerecharge.dto.RechargeDto;
import com.recharge.mobilerecharge.model.Recharge;

public class RechargeMapper {

    public static RechargeDto rechargeToRechargeDTO(Recharge recharge) {
        return new RechargeDto (
                recharge.getRechargeId(),
                recharge.getRechargePrice(),
                recharge.getStatus(),
                recharge.getDate());
                // recharge.getPlan(),
                // recharge.getAddons());
    }

    public static Recharge rechargeDTOToRecharge(RechargeDto rechargeDTO) {
        return new Recharge (
                rechargeDTO.getRechargeId(),
                rechargeDTO.getRechargePrice(),
                rechargeDTO.getStatus(),
                rechargeDTO.getDate());
                // rechargeDTO.getPlan(),
                // rechargeDTO.getAddon());
    }

}