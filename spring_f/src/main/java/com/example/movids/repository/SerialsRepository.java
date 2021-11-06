package com.example.movids.repository;
import com.example.movids.model.Serials;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SerialsRepository extends CrudRepository<Serials, Long> {
    Serials getBooksByName(String name);

    List<Serials> findByType(String type);
    Optional <Serials>getBooksByType(String type);





}
