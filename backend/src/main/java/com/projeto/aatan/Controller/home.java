package com.projeto.aatan.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class home {
	
	@PostMapping("/post")
	public String login_post() {
		return "Conexão POST com o backend concluida com sucesso!";
	}
	
	@GetMapping("/")
	public String login_get() {
		return "Conexão GET com o backend concluida com sucesso!";
	}
}
