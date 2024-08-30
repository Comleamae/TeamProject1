package com.green.TeamProject1.patient;

import lombok.Data;

@Data
public class TreatVO {
    private int treNum;
    private int patNum;
    private String disease;
    private int docLinum;
    private String aboutPat;
    private String treDate;
    private int dateNum;
    private int medNum;
    private RecipeVO recipeVO;//처방전 정보
    private DateVO dateVO;//입원 정보
}
