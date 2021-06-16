/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dev.jhordycg.examples.java.ensemble.model;

import java.io.Serializable;

/**
 *
 * @author jhordycg
 */
public class Ensemble implements Serializable {

    private Double output;
    private Double confidence;

    public Double getOutput() {
        return output;
    }

    public Double getConfidence() {
        return confidence;
    }

    public void setOutput(Double output) {
        this.output = output;
    }

    public void setConfidence(Double confidence) {
        this.confidence = confidence;
    }
}
