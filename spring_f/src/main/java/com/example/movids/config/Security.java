package com.example.movids.config;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import com.example.movids.filters.TokenFilter;


@Configuration
@EnableWebSecurity
public class Security extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http.cors()
                .and()
                .csrf()
                .disable()
                .addFilterBefore(
                        new TokenFilter(authenticationManager()),
                        UsernamePasswordAuthenticationFilter.class
                )
                .authorizeRequests()
                .antMatchers(HttpMethod.GET, "*").permitAll()
                .antMatchers(HttpMethod.POST, "*/Register").permitAll()
                .antMatchers(HttpMethod.POST, "*").permitAll();


    }
}