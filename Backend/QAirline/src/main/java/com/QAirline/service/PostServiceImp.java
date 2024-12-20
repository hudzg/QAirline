package com.QAirline.service;

import com.QAirline.model.Post;
import com.QAirline.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostServiceImp implements PostService{
    @Autowired
    PostRepository postRepository;
    @Override
    public Post createPost(Post post) {
        Post createdPost = new Post();
        createdPost.setContent(post.getContent());
        createdPost.setImage(post.getImage());
        createdPost.setTitle(post.getTitle());
        return postRepository.save(createdPost);
    }

    @Override
    public List<Post> getAllPost() {
        return postRepository.findAll();
    }

    @Override
    public Post updatePost(Long postId, Post post) throws Exception {
        Post updatedPost = findPostById(postId);
        updatedPost.setContent(post.getContent());
        updatedPost.setImage(post.getImage());
        updatedPost.setTitle(post.getTitle());
        return postRepository.save(updatedPost);
    }

    @Override
    public void deletePost(Long postId) throws Exception {
        postRepository.deleteById(postId);
    }

    @Override
    public Post findPostById(Long id) throws Exception {
        Optional<Post> optional = postRepository.findById(id);
        if (optional.isEmpty()) {
            throw new Exception("post not found with id: " + id);
        }
        return optional.get();
    }
}
