/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dev.jhordycg.examples.java.ensemble.model;

import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonSetter;
import java.io.Serializable;

/**
 *
 * @author jhordycg
 */
public class Cancer implements Serializable{

    private int clumpThickness;
    private int uniformityOfCellSize;
    private int uniformityOfCellShape;
    private int marginalAdhesion;
    private int singleEpithelialCellSize;
    private int bareNuclei;
    private int blandChromatin;
    private int normalNucleoli;
    private int mitosis;

    @JsonGetter("000000")
    public int getClumpThickness() {
        return clumpThickness;
    }

    @JsonGetter("000001")
    public int getUniformityOfCellSize() {
        return uniformityOfCellSize;
    }

    @JsonGetter("000002")
    public int getUniformityOfCellShape() {
        return uniformityOfCellShape;
    }

    @JsonGetter("000003")
    public int getMarginalAdhesion() {
        return marginalAdhesion;
    }

    @JsonGetter("000004")
    public int getSingleEpithelialCellSize() {
        return singleEpithelialCellSize;
    }

    @JsonGetter("000005")
    public int getBareNuclei() {
        return bareNuclei;
    }

    @JsonGetter("000006")
    public int getBlandChromatin() {
        return blandChromatin;
    }

    @JsonGetter("000007")
    public int getNormalNucleoli() {
        return normalNucleoli;
    }

    @JsonGetter("000008")
    public int getMitosis() {
        return mitosis;
    }

    @JsonSetter("clumpThickness")
    public void setClumpThickness(int clumpThickness) {
        this.clumpThickness = clumpThickness;
    }

    @JsonSetter("uniformityOfCellSize")
    public void setUniformityOfCellSize(int uniformityOfCellSize) {
        this.uniformityOfCellSize = uniformityOfCellSize;
    }

    @JsonSetter("uniformityOfCellShape")
    public void setUniformityOfCellShape(int uniformityOfCellShape) {
        this.uniformityOfCellShape = uniformityOfCellShape;
    }

    @JsonSetter("marginalAdhesion")
    public void setMarginalAdhesion(int marginalAdhesion) {
        this.marginalAdhesion = marginalAdhesion;
    }

    @JsonSetter("singleEpithelialCellSize")
    public void setSingleEpithelialCellSize(int singleEpithelialCellSize) {
        this.singleEpithelialCellSize = singleEpithelialCellSize;
    }

    @JsonSetter("bareNuclei")
    public void setBareNuclei(int bareNuclei) {
        this.bareNuclei = bareNuclei;
    }

    @JsonSetter("blandChromatin")
    public void setBlandChromatin(int blandChromatin) {
        this.blandChromatin = blandChromatin;
    }

    @JsonSetter("normalNucleoli")
    public void setNormalNucleoli(int normalNucleoli) {
        this.normalNucleoli = normalNucleoli;
    }

    @JsonSetter("mitosis")
    public void setMitosis(int mitosis) {
        this.mitosis = mitosis;
    }
}
