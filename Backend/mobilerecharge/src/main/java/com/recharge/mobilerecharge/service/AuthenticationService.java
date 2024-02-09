package com.recharge.mobilerecharge.service;

import com.recharge.mobilerecharge.dto.request.LoginRequest;
import com.recharge.mobilerecharge.dto.request.RegisterRequest;
import com.recharge.mobilerecharge.dto.response.LoginResponse;
import com.recharge.mobilerecharge.dto.response.RegisterResponse;

public interface AuthenticationService {
    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);
}