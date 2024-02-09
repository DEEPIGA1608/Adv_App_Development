package com.recharge.mobilerecharge.mapper;

import com.recharge.mobilerecharge.dto.AddonsDto;
import com.recharge.mobilerecharge.model.Addons;

public class AddonsMapper {

    
    public static AddonsDto mapToAddonDto(Addons addon) {
        return new AddonsDto (
                addon.getAddonId(),
                addon.getAddonName(),
                addon.getAddonPrice(),
                addon.getAddonDetails(),
                addon.getAddonValidity());
                // addon.getRecharges());
    }

    public static Addons mapToAddon(AddonsDto addonDto) {
        return new Addons (
                addonDto.getAddonId(),
                addonDto.getAddonName(),
                addonDto.getAddonPrice(),
                addonDto.getAddonDetails(),
                addonDto.getAddonValidity());
                // addonDto.getRecharges());

    }

}