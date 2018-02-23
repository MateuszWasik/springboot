package com.springboot.springboot;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {


    private List<User> users = new ArrayList<>();

    public List<User> getAllUsers() {
        return users;
    }

    public User getUser(int id) {
        return users.stream().filter(t -> t.getId() == id).findFirst().get();

    }

    public void addUser(User user) {
        users.add(user);
    }

    public void deleteUser(User user) {
        users.remove(user);
    }

    public void updateUser(User user, int id) {
        for (User element : users) {
            if (element.getId() == id) {
                users.set(element.getId(), user);
            }
        }
    }
}
