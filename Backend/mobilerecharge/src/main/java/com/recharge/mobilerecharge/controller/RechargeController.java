package com.recharge.mobilerecharge.controller;

import com.recharge.mobilerecharge.model.Recharge;
import com.recharge.mobilerecharge.service.RechargesService;

import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;


@RestController
@RequestMapping("/api/recharges")
public class RechargeController {

    @Autowired
    private RechargesService rechargeService;
    @Tag(name="Del Recharge" ,description="Deleting Recharge Details by rechargeId")
    @Tag(name="Delete Recharge Plan",description = "Deleting Recharge Plan using PlanID Endpoint")
   
    @Tag(name="Add Recharge" ,description="Posting Recharge Details")
    @PostMapping("/customer/recharge")
    public ResponseEntity<Recharge> saveRecharge(@RequestBody Recharge recharge) {
        Recharge savedRecharge = rechargeService.saveRecharge(recharge);
        return ResponseEntity.ok().body(savedRecharge);
    }
    
    @Tag(name=" Update Recharge" ,description="Updating Recharge Details by rechargeId")
    @PutMapping("/customer/rechargeupdate/{planId}")
    public ResponseEntity<String> editRecharge(@PathVariable Long planId, @RequestBody Recharge recharge) {
		rechargeService.updateDetails(planId,recharge);
        return ResponseEntity.ok("Recharge plan edited");
    }
    @Tag(name="User Recharge" ,description="User Recharge Details")
    @GetMapping("/api/customer/{userid}")
	public Optional<Recharge> fetchID(@PathVariable("userid") Long id)
	{
		return rechargeService.getDetailss(id);
	}

}