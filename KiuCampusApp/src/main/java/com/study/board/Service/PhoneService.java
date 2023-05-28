package com.study.board.Service;

import com.study.board.Repository.PhoneRepository;
import com.study.board.Specification.PhoneEntitySpecification;
import com.study.board.dto.PhoneDTO;
import com.study.board.entity.PhoneEntity;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

@Service
public class PhoneService {

    private final PhoneRepository phoneRepository;

    public PhoneService(PhoneRepository phoneRepository) {
        this.phoneRepository = phoneRepository;
    }

    public List<PhoneDTO> selectProfessorAllByCriteria(PhoneDTO phoneDTO) {

        Specification<PhoneEntity> spec = (root, query, criteriaBuilder) -> null;

        if (phoneDTO.getProCol() != "") spec = spec.and(PhoneEntitySpecification.likeProCol(phoneDTO.getProCol()));
        if (phoneDTO.getProMajor() != "") spec = spec.and(PhoneEntitySpecification.likeProMajor(phoneDTO.getProMajor()));
        if (phoneDTO.getProName() != "") spec = spec.and(PhoneEntitySpecification.likeProName(phoneDTO.getProName()));

        List<PhoneEntity> entity = phoneRepository.findAll(spec);
        List<PhoneDTO> dto = entity.stream()
            .map(v -> new PhoneDTO(v))
            .collect(Collectors.toList());

        return dto;
    }
}

