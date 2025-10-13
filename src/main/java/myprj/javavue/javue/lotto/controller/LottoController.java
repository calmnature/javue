package myprj.javavue.javue.lotto.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/lotto")
@RequiredArgsConstructor
@Slf4j
public class LottoController {
    private final LottoService lottoService;

    @PostMapping("/getLottoNumber")
    public ResponseEntity<List<Integer>> getLottoNumber(@RequestBody List<Integer> selectLotto) {
        List<Integer> result = lottoService.getLottoNumber(selectLotto);

        return ResponseEntity.ok(result);
    }
}
