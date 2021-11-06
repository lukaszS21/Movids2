package com.example.movids.controler;

import com.example.movids.model.Users;

import com.example.movids.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserRepository userRepository;

    @Autowired
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    @GetMapping({"/Userall"})
    public List<Users> getUsers(){
        List<Users> users = new ArrayList<>();
        userRepository.findAll().forEach(users::add);
        return users;
    }



}