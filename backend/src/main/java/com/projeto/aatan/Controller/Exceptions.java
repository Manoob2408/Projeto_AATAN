package com.projeto.aatan.Controller;

import java.rmi.ServerException;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javassist.NotFoundException;

@ControllerAdvice
public class Exceptions {

	@ExceptionHandler(Exception.class)
	public String errorGeneric() {
		return "Erro generico";
	}
	
	@ExceptionHandler(NotFoundException.class)
	public String notFound() {
		return "Essa pagina não existe";
	}
	
	@ExceptionHandler(ServerException.class)
	public String serverError() {
		return "Erro no servidor";
	}
}