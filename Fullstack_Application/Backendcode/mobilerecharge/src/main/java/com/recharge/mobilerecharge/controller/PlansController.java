package com.recharge.mobilerecharge.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.recharge.mobilerecharge.model.Plans;
import com.recharge.mobilerecharge.service.PlanService;

import io.swagger.v3.oas.annotations.tags.Tag;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/api/plans")
public class PlansController {

    @Autowired
    private PlanService planService;
    @Tag(name=" Display plans", description="Displaying plans based on plan type")
    @GetMapping("/customer/{planType}")
    public ResponseEntity<List<Plans>> getPlanByType(@PathVariable String planType) {
        List<Plans> plans = planService.getPlanByType(planType);
        return ResponseEntity.ok(plans);
    }
    @Tag(name=" Del plans", description="Deleting plans based on plan id")
    @DeleteMapping("/del/{planId}")
    public ResponseEntity<Void> deletePlan(@PathVariable Long planId) {
        planService.deletePlan(planId);
        return ResponseEntity.noContent().build();
    }
    @Tag(name=" Update plans", description="Updating plans based on plan id")
    @PutMapping("/update/{id}")
    public ResponseEntity<Plans> updatePlan(@PathVariable Long id, @RequestBody Plans plan) {
        Plans updatedPlan = planService.updatePlan(id, plan);
        if (updatedPlan != null) {
            return ResponseEntity.ok().body(updatedPlan);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @Tag(name="Get Plan by ID", description = "Get Plan details using PlanID Endpoint")
    @GetMapping("/{planId}")
    public ResponseEntity<Plans> getPlanById(@PathVariable Long planId) {
        Plans plan = planService.getPlanById(planId);
        if (plan != null) {
            return ResponseEntity.ok(plan);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @Tag(name=" Add plans", description="Creating plans")
    @PostMapping("/post")
    public ResponseEntity<Plans> savePlan(@RequestBody Plans plan) {
        Plans savedPlan = planService.savePlan(plan);
        return ResponseEntity.ok().body(savedPlan);
    }

}