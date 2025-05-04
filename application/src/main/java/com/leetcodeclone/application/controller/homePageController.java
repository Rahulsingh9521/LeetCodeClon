package com.leetcodeclone.application.controller;

import com.leetcodeclone.application.entity.Question;
import com.leetcodeclone.application.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/api/v1")
public class homePageController {

    @Autowired
    private QuestionService questionService;

    @GetMapping("/menus")
    @ResponseBody
    public String GetMenuData(){
        return "{data: hello world ~ }";
    }

    @GetMapping("/problemLists")
    @ResponseBody
    public List<Question> GetProblemList(){
        return questionService.getFullList();
    }

    @PostMapping("/setQuestion")
    public Question RegisterQuestion(@RequestBody Question question){
        return questionService.saveQuestion(question);
    }

}
