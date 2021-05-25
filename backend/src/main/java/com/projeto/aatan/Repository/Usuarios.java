package com.projeto.aatan.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projeto.aatan.Model.Usuario;

@Repository
public interface Usuarios extends JpaRepository<Usuario, Long>{

}
