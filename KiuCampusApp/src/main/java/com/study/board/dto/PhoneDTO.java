package com.study.board.dto;

import com.study.board.entity.PhoneEntity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PhoneDTO {
    private String proCol;
    private String proMajor;
    private String proName;
    private String proAdd;
    private String proPhone;
    private String proEmail;
    private String proImg;
    private String inputText;

    public String getInputText() {
        return inputText;
    }

    @Builder
    public PhoneDTO(PhoneEntity phoneEntity){
        this.proCol = phoneEntity.getProCol();
        this.proMajor = phoneEntity.getProMajor();
        this.proName = phoneEntity.getProName();
        this.proAdd = phoneEntity.getProAdd();
        this.proPhone = phoneEntity.getProPhone();
        this.proEmail = phoneEntity.getProEmail();
        this.proImg = phoneEntity.getProImg();
    }

}

    // Getter, Setter, Constructors, etc.
