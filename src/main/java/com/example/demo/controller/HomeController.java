package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * Accept and handle HTTP requests.
 * 
 * @author swindle
 *
 */
@Controller
public class HomeController {
    @RequestMapping(path = "/home")
    public String home(
    		Model model, 
    		@RequestParam(value="name", required=false, defaultValue="Anonymous Visitor") String name,
    		@RequestParam(value="title", required=false, defaultValue="Welcome to this Thymeleaf demo!") String title
    		) {
        model.addAttribute("name", name);
        model.addAttribute("title", title);
        model.addAttribute("bootstrapVersion", "3.3.7");
        model.addAttribute("reactVersion", "16.1.1");
        model.addAttribute("reactBootstrapVerison", "0.31.5");
        return "home";
    }
}
