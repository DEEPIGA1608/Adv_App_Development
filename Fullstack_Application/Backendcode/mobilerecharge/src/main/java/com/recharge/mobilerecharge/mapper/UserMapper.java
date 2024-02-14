// package com.recharge.mobilerecharge.mapper;

// import com.recharge.mobilerecharge.dto.UserDto;
// import com.recharge.mobilerecharge.model.User;

// public class UserMapper {

//     public static UserDto mapToUserDto(User user) {
//         return new UserDto(
//                 user.getUserId(),
//                 user.getEmail(),
//                 user.getPassword(),
//                 user.getUsername(),
//                 user.getMobileNumber(),
//                 user.getUserRole());
//     }

//     public static User mapToUser(UserDto userDto) {
//         return new User(
//                 userDto.getUserId(),
//                 userDto.getEmail(),
//                 userDto.getPassword(),
//                 userDto.getUsername(),
//                 userDto.getMobileNumber(),
//                 userDto.getUserRole());
//     }

// }