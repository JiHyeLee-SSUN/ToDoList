
package com.board.controller;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@Controller
@RequestMapping("")
public class MainController {

    @RequestMapping(value = "", method = RequestMethod.GET)
    public String home() {
        return "todolist";
    }

}
