package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.Entity.User;
import com.example.demo.Repo.UserRepository;

public interface UserService {
    static User register(User user) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'register'");
    }

    User findByUsername(String username);

    boolean authenticate(String username, String password);
}
