package com.example.movids.controler;


import com.example.movids.model.Serials;

import com.example.movids.repository.SerialsRepository;
import com.example.movids.services.SerialsServices;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("serials")
public class SerialsController {

    private SerialsServices serials;
    private final SerialsRepository serialsRepository;


    public SerialsController(SerialsRepository serialsRepository) {
        this.serialsRepository = serialsRepository;

    }

    @GetMapping("/All")
    public List<Serials> getSerials(){
        List<Serials> serial = new ArrayList<>();
        serialsRepository.findAll().forEach(serial::add);
        return serial;
    }

    @GetMapping("/action")
    public List<Serials> getSerialsByType(){
        List<Serials> serials = new ArrayList<>();
        serialsRepository.findByType("action").forEach(serials::add);
        return serials;
    }




}