package com.QAirline.controller;

import com.QAirline.model.Post;
import com.QAirline.model.User;
import com.QAirline.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/post")
public class PostController {
    @Autowired
    private PostService postService;
    @GetMapping()
    public ResponseEntity<List<Post>> getAllPost(
//            @RequestHeader("Authorization") String jwt
    ) throws Exception {
//        User user = userService.findUserByJwtToken(jwt);
        List<Post> PostList =  postService.getAllPost();

        return new ResponseEntity<>(PostList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Post> getPostById(
//            @RequestHeader("Authorization") String jwt
            @PathVariable Long id
    ) throws Exception {
//        User user = userService.findUserByJwtToken(jwt);
        Post post =  postService.findPostById(id);

        return new ResponseEntity<>(post, HttpStatus.OK);
    }
}
