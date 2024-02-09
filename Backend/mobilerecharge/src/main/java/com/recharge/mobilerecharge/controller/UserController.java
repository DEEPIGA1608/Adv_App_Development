package com.recharge.mobilerecharge.controller;


import org.springframework.web.bind.annotation.RestController;

import com.recharge.mobilerecharge.model.User;
import com.recharge.mobilerecharge.service.UsersService;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
public class UserController {
    @Autowired
	UsersService us;
	
    @PostMapping("user/post")
	public boolean addUser(@RequestBody User ue)
	{
        return us.AddUser(ue);
	}
    @GetMapping("user/get")
    public List<User> getAllUser()
    {
        return us.getUser();
    }
	@GetMapping("user/get/{id}")
	public Optional<User> getbyId(@PathVariable String id)
	{
		return us.getById(id);
	}
    
}
