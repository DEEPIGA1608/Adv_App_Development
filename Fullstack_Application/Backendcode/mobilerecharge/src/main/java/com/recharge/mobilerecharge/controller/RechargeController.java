package com.recharge.mobilerecharge.controller;

import com.recharge.mobilerecharge.model.Recharge;
import com.recharge.mobilerecharge.service.RechargesService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/recharges")
public class RechargeController {

    @Autowired
    private final RechargesService rechargeService;

    public RechargeController(RechargesService rechargeService) {
        this.rechargeService = rechargeService;
    }

    @GetMapping("/customer/{customerId}")
    public List<Recharge> getRechargesByCustomerId(@PathVariable Long customerId) {
        return rechargeService.getRechargesByCustomerId(customerId);
    }

    @PostMapping
    public ResponseEntity<Recharge> createRecharge(@RequestBody Recharge recharge) {
        Recharge createdRecharge = rechargeService.createRecharge(recharge);
        return ResponseEntity.created(URI.create("/api/recharges/" + createdRecharge.getRechargeId())).body(createdRecharge);
    }

    @GetMapping
    public ResponseEntity<List<Recharge>> getAllRecharges() {
        List<Recharge> recharges = rechargeService.getAllRecharges();
        return ResponseEntity.ok(recharges);
    }

    // Add additional mapping methods if needed
}