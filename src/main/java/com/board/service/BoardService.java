package com.board.service;

import com.board.dao.BoardVO;

import java.util.List;

public interface BoardService {
    List<BoardVO> read() throws Exception;
    int createList(BoardVO boardVO) throws Exception;
}
