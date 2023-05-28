package com.study.board.Controller;


import com.study.board.Service.PhoneService;
import com.study.board.dto.PhoneDTO;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class PhoneController {
    private final PhoneService phoneService;

    public PhoneController(PhoneService phoneService) {
        this.phoneService = phoneService;
    }

    @GetMapping("/submit")
    public ResponseEntity<List<PhoneDTO>> submitData(PhoneDTO phoneDTO) {
        return ResponseEntity.ok().body(phoneService.selectProfessorAllByCriteria(phoneDTO));
    }
}