package com.recharge.mobilerecharge;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;

@SpringBootApplication
@OpenAPIDefinition(
		info =@Info(
				title = "Online Mobile Recharge Portal",
				version = "0.0.1",
				description = "Mobile Recharge Website",
				contact = @Contact(
						name = "Author Name",
						email = "Author Email"
						)
				)
		)
public class MobilerechargeApplication {

	public static void main(String[] args) {
		SpringApplication.run(MobilerechargeApplication.class, args);
	}

}
