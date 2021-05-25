package com.projeto.aatan.Model;

import java.util.ArrayList;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table
public class Animal {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	// Apelido do animal
	private String apelido;
	
	// Pinscher, poodle, pastor alemao
	private String raca;
	
	// Cachorro, gato, coelho
	private String tipo;
	
	// Escrever formato: 2 anos e 3 dias ou 3 semanas
	private String idade;
	
	// Cão bravo
	private String comportamento;
	
	// Recem nascido, velho
	private String tipo_idade;
	
	private String peso;
	
	private String data_cadastro;
	
	// Sofreu maus tratos?
	private boolean bool_maus_tratos = false;
	
	// Se sim
	private String str_maus_tratos;
	
	// Possui deficiencia?
	private boolean bool_deficiente = false;
	
	// Se sim
	private String str_deficiente;
	
	// Foi devolvido?
	private boolean bool_devolvido = false;
	
	// Se sim, acionar contador + 1
	private int total_devolvido = 0;
	
	// Se encontrar dono ------------------------------------------------
	private String data_adocao;
	
	// Se devolvido ------------------------------------------------
	private String data_devolucao;
	private ArrayList<String> donos_anteriores;
}
