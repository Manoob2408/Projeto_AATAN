package com.projeto.aatan.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projeto.aatan.Model.Animal;

@Repository
public interface Animais extends JpaRepository<Animal, Long>{

}
