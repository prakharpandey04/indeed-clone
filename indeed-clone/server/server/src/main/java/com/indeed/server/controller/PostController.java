package com.indeed.server.controller;

import com.indeed.server.constants.APIConstants;
import com.indeed.server.dto.PostDTO;
import com.indeed.server.model.PostModel;
import com.indeed.server.service.PostService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;
import lombok.RequiredArgsConstructor;

import java.util.List;

@RestController
@CrossOrigin
public class PostController {

    private static final Logger log = LoggerFactory.getLogger(PostController.class);

    final PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @PostMapping(APIConstants.SAVE_POST)
    public PostModel savePost(@Valid @RequestBody PostDTO postDTORequest) {

        log.info("Saving Post ######", postDTORequest);

        return this.postService.savePost(postDTORequest);
    }

    @GetMapping(APIConstants.GET_ALL_POSTS)
    public List<PostModel> getAllPosts(){
        log.info("Getting all posts #######");
        return this.postService.getAllPosts();
    }
}
