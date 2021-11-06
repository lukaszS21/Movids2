package com.example.movids.services;
import com.example.movids.model.Serials;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.movids.repository.SerialsRepository;
import java.util.Optional;
import java.util.ArrayList;
import java.util.List;



@Service
public class SerialsServices {
    private final SerialsRepository serialsRepository;
    @Autowired
    public SerialsServices(SerialsRepository serialsRepository){
        this.serialsRepository=serialsRepository;
    }
    public SerialsRepository getSerialsRepository() {
        return serialsRepository;
    }
}
