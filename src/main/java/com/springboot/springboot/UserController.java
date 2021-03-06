package com.springboot.springboot;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.*;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping("/users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @RequestMapping("/users/{id}")
    public User getUser(@PathVariable("id") int id) {
        return userService.getUser(id);
    }

    @RequestMapping(method = POST, value = "/users")
    public void addUser(@RequestBody User user) {
        //int id = getAllUsers().size() + 1;
        //user.setId(id);
        userService.addUser(user);
    }

    @RequestMapping(method = PUT, value = "/users/{id}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void updateUser(@RequestBody User user, @PathVariable("id") int id) {
        userService.updateUser(user, id);
    }

    @RequestMapping(method = DELETE, value = "/users/{id}")
    public void deleteUser(@PathVariable int id) {
        userService.deleteUser(id);
    }

}
