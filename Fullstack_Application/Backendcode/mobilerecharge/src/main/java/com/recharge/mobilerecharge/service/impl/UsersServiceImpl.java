// // package com.recharge.mobilerecharge.service.impl;

// // import com.recharge.mobilerecharge.model.User;
// // import com.recharge.mobilerecharge.repository.UserRepo;
// // import com.recharge.mobilerecharge.service.UsersService;

// // import org.springframework.beans.factory.annotation.Autowired;
// // import org.springframework.stereotype.Service;


// // @Service
// // public class UserServiceImpl implements UsersService {
// //     @Autowired
// //     private UserRepo userRepository;

// //     @Override
// //     public User saveUser(User user) {
// //         return userRepository.save(user);
// //     }
// // }

// package com.recharge.mobilerecharge.service.impl;





// import org.springframework.security.authentication.AuthenticationManager;
// import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.stereotype.Service;

// import com.recharge.mobilerecharge.dto.request.LoginRequest;
// import com.recharge.mobilerecharge.dto.request.RegisterRequest;
// import com.recharge.mobilerecharge.dto.response.LoginResponse;
// import com.recharge.mobilerecharge.dto.response.RegisterResponse;
// import com.recharge.mobilerecharge.model.User;
// import com.recharge.mobilerecharge.repository.UserRepo;
// import com.recharge.mobilerecharge.service.AuthenticationService;
// import com.recharge.mobilerecharge.utils.JwtUtil;

// import lombok.RequiredArgsConstructor;

// @Service
// @RequiredArgsConstructor
// @SuppressWarnings("null")
// public class AuthenticationServiceImpl implements AuthenticationService {

//     private final PasswordEncoder passwordEncoder;
//     private final UserRepo usersRepository;
//     private final AuthenticationManager authenticationManager;
//     private final JwtUtil jwtUtil;

//     @Override
//     public RegisterResponse register(RegisterRequest request) {
//         if (!request.getPassword().equals(request.getConfirmPassword())) {
//             return RegisterResponse.builder()
//                     .message("Password and ConfirmPassword do not match")
//                     .build();
//         }

//         var user = User.builder()
//                 .name(request.getName())
//                 .email(request.getEmail())
//                 .password(passwordEncoder.encode(request.getPassword()))
//                 .role(com.recharge.mobilerecharge.enumerated.Role.USER)
//                 .build();
//         usersRepository.save(user);
//         return RegisterResponse.builder()
//                 .message("User registered successfully")
//                 .build();
//     }

//     @Override
//     public LoginResponse login(LoginRequest request) {
//         authenticationManager
//                 .authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
//         var user = usersRepository.findByEmail(request.getEmail()).orElseThrow();
//         var token = jwtUtil.generateToken(user);
//         return LoginResponse.builder()
//                 .message("Logged in successfully.")
//                 .token(token)
//                 .build();
//     }

// }