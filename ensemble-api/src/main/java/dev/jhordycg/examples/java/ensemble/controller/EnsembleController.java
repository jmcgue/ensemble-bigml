package dev.jhordycg.examples.java.ensemble.controller;

import dev.jhordycg.examples.java.ensemble.model.Cancer;
import dev.jhordycg.examples.java.ensemble.model.Ensemble;
import dev.jhordycg.examples.java.ensemble.service.BigMLService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author jhordycg
 */
@RestController
@RequestMapping("cancer")
@CrossOrigin("*")
public class EnsembleController {

    BigMLService service;

    public EnsembleController(BigMLService service) {
        this.service = service;
    }

    @PostMapping("bigml")
    public Ensemble predict(@RequestBody Cancer cancer) {
        return service.getPrediction(cancer);
    }

}
