package com.QAirline.service;

import com.QAirline.model.Post;

import java.util.List;

public interface PostService {
    public Post createPost(Post post);
    public List<Post> getAllPost();
    public Post updatePost(Long postId, Post post) throws Exception;
    public void deletePost(Long postId) throws Exception;
    public Post findPostById(Long id) throws Exception;
}
