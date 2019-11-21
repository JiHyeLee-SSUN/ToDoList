package com.board.service;

import com.board.dao.BoardVO;

import java.util.List;

public interface BoardService {
    List<BoardVO> readAsc() throws Exception;
    List<BoardVO> readDesc() throws Exception;
    int createList(BoardVO boardVO) throws Exception;
    int deleteList(BoardVO boardVO) throws Exception;
}
