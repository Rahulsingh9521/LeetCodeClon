package com.leetcodeclone.application.entity.problemInfo;

import com.leetcodeclone.application.entity.counter.ProblemSequence;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
@Data
public class QuestionDetils {

    @Id
    private ProblemSequence problemSequence;

    private String Title;
    private String Dificulty;
    private List<ProblemTags> problemTags;
    private String Description;
}
