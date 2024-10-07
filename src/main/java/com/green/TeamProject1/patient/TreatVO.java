package com.green.TeamProject1.patient;

import com.green.TeamProject1.doctor.DiseaseVO;
import lombok.Data;

@Data
public class TreatVO {
    private int treNum;
    private int patNum;
    private String disease;
    private int docLinum;
    private String aboutPat;
    private String treDate;
    private int medNum;
    private int recipeNum;
    private RecipeVO recipeVO;//처방전 정보
    private PriceVO priceVO;//진료비 정보
    private DiseaseVO diseaseVO; // 질병 카테고리
}
