package com.projeto.aatan.Model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table
public class Empresa {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	private String nome_fantasia;
	private String razao_social;
	private String cnpj;
	
	private int animais_doados;
	private int animais_devolvidos;
	
	@OneToOne(cascade = CascadeType.ALL)
	private Endereco endereco;
}
