package myprj.javavue.javue.lotto.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
@Slf4j
public class LottoService {
    public List<Integer> getLottoNumber(List<Integer> selectLotto) {
        Set<Integer> result = new HashSet<>(selectLotto);

        int count = 6 - result.size();

        while(count > 0) {
            int number = (int)(Math.random() * 45) + 1;

            if(result.add(number)) {
                count--;
            }
        }

        return new ArrayList<>(result);
    }
}
