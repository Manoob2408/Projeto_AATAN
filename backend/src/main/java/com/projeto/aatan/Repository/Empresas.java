package com.projeto.aatan.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projeto.aatan.Model.Empresa;

@Repository
public interface Empresas extends JpaRepository<Empresa, Long> {

}
