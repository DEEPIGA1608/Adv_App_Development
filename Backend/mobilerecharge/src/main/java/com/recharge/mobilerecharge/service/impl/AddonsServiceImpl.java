package com.recharge.mobilerecharge.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.recharge.mobilerecharge.model.Addons;
import com.recharge.mobilerecharge.repository.AddonsRepo;
import com.recharge.mobilerecharge.service.AddonService;

import java.util.List;

@Service
public class AddonsServiceImpl implements AddonService {
    @Autowired
    private AddonsRepo addOnRepository;

    @Override
    public List<Addons> getAllAddOns() {
        return addOnRepository.findAll();
    }

    // @Override
    // public AddOn getAddOnById(Long id) {
    //     return addOnRepository.findById(id).orElse(null);
    // }

    @Override
    public Addons saveAddOn(Addons addOn) {
        return addOnRepository.save(addOn);
    }

    @Override
    public Addons saveAddOns(Addons addOn) {
        return addOnRepository.save(addOn);
    }

    // @Override
    // public void deleteAddOn(Long id) {
    //     addOnRepository.deleteById(id);
    // }
}