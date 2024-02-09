package com.recharge.mobilerecharge.mapper;

import com.recharge.mobilerecharge.dto.PlansDto;
import com.recharge.mobilerecharge.model.Plans;

public class PlansMapper {

    public static PlansDto mapToPlanDto(Plans plan) {
        return new PlansDto (
                plan.getPlanId(),
                plan.getPlanType(),
                plan.getPlanName(),
                plan.getPlanValidity(),
                plan.getPlanDetails(),
                plan.getPlanPrice());
                // plan.getRecharge());
    }

    public static Plans mapToPlan(PlansDto planDto) {
        return new Plans(
                planDto.getPlanId(),
                planDto.getPlanType(),
                planDto.getPlanName(),
                planDto.getPlanValidity(),
                planDto.getPlanDetails(),
                planDto.getPlanPrice());
                // planDto.getRecharge());
    }

}