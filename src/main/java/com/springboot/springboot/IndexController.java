package com.springboot.springboot;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class IndexController {

    @RequestMapping("/")
    public String showWelcomePage(){
        return "Welcome";
    }

}
