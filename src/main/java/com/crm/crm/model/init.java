package com.crm.crm.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity

public class init {
    private @Id @GeneratedValue Long id;
    private String name;

    public init() {};

    public init(String name) {
        this.name = name;
    }
}
