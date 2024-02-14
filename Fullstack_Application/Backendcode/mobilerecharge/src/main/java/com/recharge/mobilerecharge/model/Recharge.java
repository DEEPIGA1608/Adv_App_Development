package com.recharge.mobilerecharge.model;
import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name="recharge")
public class Recharge
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long rechargeId;

    @Column
    private Long customerId;

    @Column(name="recharge_price")
    private double planPrice;

    @Column(name="status")
    private String status;

    @Column(name="date")
    private Date date;

    @Column(nullable=true)
    private Long planId;

    @Column(nullable=true)
    private Long addonId;

    @Column
    private String mobilenumber;
    // @ManyToOne
    // @JoinColumn(name = "planId")
    // private Plans plan;

    // @ManyToOne
    // @JoinColumn(name = "addonId")
    // private Addons addons;

}