package com.example.movids.services;



import com.example.movids.model.Users;
import com.example.movids.repository.KeyRepository;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;


import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;

@Service
public class Token {
    public String generateToken(Users users) {

        Key signingKey = new SecretKeySpec(KeyRepository.getSigningKey().getBytes(StandardCharsets.UTF_8), SignatureAlgorithm.HS512.getJcaName());



        return Jwts.builder()
                .setSubject(users.getEmail())
                .claim("role", users.getRole())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis()+60000))
                .signWith(SignatureAlgorithm.HS512, signingKey)
                .compact();
    }
}