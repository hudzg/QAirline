package com.QAirline.controller;


import com.QAirline.model.Post;
import com.QAirline.model.User;
import com.QAirline.response.MessageResponse;

import com.QAirline.service.PostService;
import com.QAirline.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/post")
public class AdminPostController {
    @Autowired
    private UserService userService;
    @Autowired
    private PostService postService;

    @PostMapping()
    public ResponseEntity<Post> createPost(
            @RequestBody Post post,
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        Post createdPost = postService.createPost(post);

        return new ResponseEntity<>(createdPost, HttpStatus.CREATED);
    }

    @GetMapping()
    public ResponseEntity<List<Post>> getAllPost(
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        List<Post> PostList =  postService.getAllPost();

        return new ResponseEntity<>(PostList, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Post> updatePost(
            @RequestBody Post Post,
            @RequestHeader("Authorization") String jwt,
            @PathVariable Long id
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        Post updatedPost = postService.updatePost(id, Post);

        return new ResponseEntity<>(updatedPost, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<MessageResponse> deletePost(
            @RequestHeader("Authorization") String jwt,
            @PathVariable Long id
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        postService.deletePost(id);

        MessageResponse response = new MessageResponse();
        response.setMessage("Post deleted successfully");

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
