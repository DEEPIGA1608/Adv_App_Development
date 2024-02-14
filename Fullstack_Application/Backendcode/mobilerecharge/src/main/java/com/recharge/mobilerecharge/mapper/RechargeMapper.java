// package com.recharge.mobilerecharge.mapper;


// import com.recharge.mobilerecharge.dto.RechargeDto;
// import com.recharge.mobilerecharge.model.Recharge;

// public class RechargeMapper {

//     public static RechargeDTO rechargeToRechargeDTO(Recharge recharge) {
//         return new RechargeDto(
//                 recharge.getRechargeId(),
//                 recharge.getCustomerId(),
//                 recharge.getPlanPrice(),
//                 recharge.getStatus(),
//                 recharge.getDate(),
//                 recharge.getPlanId(),
//                 recharge.getAddonId(),
//                 recharge.getMobilenumber()
//         );
//     }

//     public static Recharge rechargeDTOToRecharge(RechargeDto rechargeDTO) {
//         Recharge recharge = new Recharge();
//         recharge.setRechargeId(rechargeDTO.getRechargeId());
//         recharge.setCustomerId(rechargeDTO.getCustomerId());
//         recharge.setPlanPrice(rechargeDTO.getPlanPrice());
//         recharge.setStatus(rechargeDTO.getStatus());
//         recharge.setDate(rechargeDTO.getDate());
//         recharge.setPlanId(rechargeDTO.getPlanId());
//         recharge.setAddonId(rechargeDTO.getAddonId());
//         recharge.setMobilenumber(rechargeDTO.getMobilenumber());
//         return recharge;
//     }
// }
