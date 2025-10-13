package myprj.javavue.javue.home.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RequestMapping("/api")
@RestController
public class HomeController {
    @GetMapping(value = {"/", ""})
    public void home() {
        log.info("HomeController Call");
    }
}
