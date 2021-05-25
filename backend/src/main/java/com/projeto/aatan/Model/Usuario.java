package com.projeto.aatan.Model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table
public class Usuario {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	// Nome da pessoa
	private String nome;
	
	// Email de login
	private String email;
	
	// Usuario de login
	private String usuario;
	private String senha;
	private String data_cadastro;
	
	// Alertas sobre o usuario
	private String aviso;
	
	// Administrador, usuario, desenvolvedor
	private String tipo;
	
	@OneToOne(cascade = CascadeType.ALL)
	private Endereco endereco;
	
	// Se usuario adoção ----------------------------------------------
	private float renda_mensal;
	private int total_integrantes_casa;
	private String estado_civil;
	
	// Contadores
	private int total_adocao = 0;
	private int total_devolucao = 0;
	
	@OneToMany(cascade = CascadeType.ALL)
	private List<Animal> animais_adotados;
	
	@OneToMany(cascade = CascadeType.ALL)
	private List<Animal> animais_devolvidos;
}
