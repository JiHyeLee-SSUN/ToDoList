
package com.board.controller;

import com.board.dao.BoardVO;
import com.board.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
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

    @RequestMapping(value = "readAll", method = RequestMethod.GET)
    public List<BoardVO> readAll() throws Exception {
        return boardService.read();
    }

    @RequestMapping(value = "create", method = RequestMethod.POST)
    public Map<String, Object> create(@RequestBody BoardVO boardVO) throws Exception {
        Map<String, Object> result = new HashMap<>();

        try {
            boardService.createList(boardVO);
            result.put("status", "OK");

        } catch (Exception e) {
            e.printStackTrace();
            result.put("status", "False");
        }

        return result;

    }
}
