// package com.recharge.mobilerecharge.service;

// import com.recharge.mobilerecharge.model.User;


// public interface UsersService {

//     User saveUser(User user);
// }

package com.recharge.mobilerecharge.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.recharge.mobilerecharge.model.User;
import com.recharge.mobilerecharge.repository.UserRepo;




@Service
public class UsersService {
    @Autowired
    UserRepo ur;
     
     
     public boolean AddUser(User ue)
     {
          ur.save(ue);
          return true;
     }
     public List<User> getUser()
     {
          return ur.findAll();
     }
     public Optional<User> getById(String id)
     {
    	 return ur.findById(id);
     }
}