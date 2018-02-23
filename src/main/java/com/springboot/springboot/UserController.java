package com.springboot.springboot;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class UserController {

    @RequestMapping("/user")
    public List<User> getAllUsers() {
        return Arrays.asList(
                new User(1, "Mateusz"),
                new User(2, "Robert"),
                new User(3, "Monika")
        );
    }
}
