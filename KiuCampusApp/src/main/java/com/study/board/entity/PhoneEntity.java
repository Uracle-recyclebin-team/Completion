package com.study.board.entity;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@EnableJpaAuditing
@EntityListeners(AuditingEntityListener.class)
@Table(name = "professor")
public class PhoneEntity<S> {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pro_id;

    @Column(name = "pro_col")
    private String proCol;

    @Column(name = "pro_major")
    private String proMajor;

    @Column(name = "pro_name")
    private String proName;

    @Column(name = "pro_add")
    private String proAdd;

    @Column(name = "pro_phone")
    private String proPhone;

    @Column(name = "pro_email")
    private String proEmail;

    @Column(name = "pro_img")
    private String proImg;

    // Constructors
    public PhoneEntity(String proCol, String proMajor, String proName, String proAdd, String proPhone, String proEmail, String proImg) {
        this.proCol = proCol;
        this.proMajor = proMajor;
        this.proName = proName;
        this.proAdd = proAdd;
        this.proPhone = proPhone;
        this.proEmail = proEmail;
        this.proImg = proImg;
    }

}

