
package com.board.controller;

import com.board.dao.BoardVO;
import com.board.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class AjaxController {

    @Autowired
    private BoardService boardService;

    // 리스트 오름차순 조회
    @RequestMapping(value = "readAsc", method = RequestMethod.GET)
    public List<BoardVO> readAsc() throws Exception {
        return boardService.readAsc();
    }

    // 리스트 내림차순 조회
    @RequestMapping(value = "readDesc", method = RequestMethod.GET)
    public List<BoardVO> readDesc() throws Exception {
        return boardService.readDesc();
    }

    // 리스트 작성
    @RequestMapping(value = "/", method = RequestMethod.POST)
    public ResponseEntity<Map<String, Object>> create(@RequestBody BoardVO boardVO) throws Exception {
        ResponseEntity<Map<String, Object>> entity = null;
        Map<String, Object> resultMap = new HashMap<>();
        try {
            boardService.createList(boardVO);
            resultMap.put("status",HttpStatus.OK);
            entity = new ResponseEntity<>(resultMap, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            resultMap = null;
            entity = new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return entity;
    }

    //리스트 삭제
    @RequestMapping(value = "/", method = RequestMethod.DELETE)
    public ResponseEntity<Map<String, Object>> delete(@RequestBody BoardVO boardVO) throws Exception {
        ResponseEntity<Map<String, Object>> entity = null;
        Map<String, Object> resultMap = new HashMap<>();
        try {
            boardService.deleteList(boardVO);
            resultMap.put("status",HttpStatus.OK);
            entity = new ResponseEntity<>(resultMap, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            resultMap = null;
            entity = new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return entity;
    }
}
