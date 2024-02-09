package com.recharge.mobilerecharge.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.recharge.mobilerecharge.model.Addons;
import com.recharge.mobilerecharge.service.AddonService;

import io.swagger.v3.oas.annotations.tags.Tag;

import java.util.List;

@RestController
@RequestMapping("/api/addons")
public class AddonsController {

    @Autowired
    private AddonService addOnService;
    @Tag(name=" Display Addon plans", description="Displaying all addon plans ")
    @GetMapping("/api/customer/addon")
    public List<Addons> getAllAddOns() {
        return addOnService.getAllAddOns();
    }

    @Tag(name=" Recharge ", description=" Recharging on addon plans")
    @PostMapping("/api/customer/recharge/addon")
    public ResponseEntity<Addons> saveAddOn(@RequestBody Addons addOn)
	{
        Addons savedAddOn = addOnService.saveAddOn(addOn);
        return ResponseEntity.ok().body(savedAddOn);
	}
    @Tag(name=" Create Addon plans", description=" Creating addon plans ")
    @PostMapping("/api/admin/addon")
    public ResponseEntity<Addons> saveAddOns(@RequestBody Addons addOn)
	{
        Addons savedAddOn = addOnService.saveAddOn(addOn);
        return ResponseEntity.ok().body(savedAddOn);
	}
}