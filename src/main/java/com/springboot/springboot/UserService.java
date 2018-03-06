package com.springboot.springboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        List<User> users = new ArrayList<>();
        userRepository.findAll()
                .forEach(users::add);
        return users;
    }

    public User getUser(int id) {
        return userRepository.findOne(id);
    }

    public void addUser(User user) {
        userRepository.save(user);
    }

    public void deleteUser(int id) {
        userRepository.delete(id);
    }

    public void updateUser(User user, int id) {
        User update = getUser(id);
        update.setName(user.getName());
        userRepository.save(update);
    }
}
