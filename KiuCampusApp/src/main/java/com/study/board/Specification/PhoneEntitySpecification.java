package com.study.board.Specification;

import org.springframework.data.jpa.domain.Specification;

import com.study.board.entity.PhoneEntity;

public class PhoneEntitySpecification {

    /**
     * proName Search
     * @param proName
     * @return proName
     */
    public static Specification<PhoneEntity> likeProName(String proName) {
        return (root, query, CriteriaBuilder) -> CriteriaBuilder.equal(root.get("proName"), proName);
    }

    /**
     * likeProMajor
     * @param proMajor
     * @return
     */
    public static Specification<PhoneEntity> likeProMajor(String proMajor) {
        return (root, query, CriteriaBuilder) -> CriteriaBuilder.equal(root.get("proMajor"), proMajor);
    }

    /**
     * likeProCol
     * @param proCol
     * @return
     */
    public static Specification<PhoneEntity> likeProCol(String proCol) {
        return (root, query, CriteriaBuilder) -> CriteriaBuilder.equal(root.get("proCol"), proCol);
    }
}